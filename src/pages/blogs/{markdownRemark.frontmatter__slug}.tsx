import Icon from '../../components/ui/icon';
import React, { useEffect, useRef, useState } from 'react';
import SEO from '../../components/seo';
import { graphql, Link } from 'gatsby';
import BlogNavbar from '../../components/blog-navbar';
import Footer from '../../components/footer';
import { formatDate } from '../../utils';
import { Blog } from '../../types';
import '../../styles/blog-index.css';

type Props = { data: { markdownRemark: Blog } };
type Section = { id: string; title: string; depth: number };

function BlogDetail({ data }: Props) {
  const { frontmatter, html, timeToRead } = data.markdownRemark;
  const { title, slug, featuredImage, date } = frontmatter;
  const bodyRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [copyStatus, setCopyStatus] = useState('Copy link');
  const shareTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const headings = Array.from(body.querySelectorAll<HTMLHeadingElement>('h2, h3'));
    setSections(headings.map((heading, index) => {
      if (!heading.id) heading.id = `section-${index + 1}`;
      return { id: heading.id, title: heading.textContent?.trim() || '', depth: Number(heading.tagName.slice(1)) };
    }));
    const cleanups: (() => void)[] = [];
    body.querySelectorAll('pre').forEach((pre) => {
      const code = pre.querySelector('code');
      if (!code) return;
      pre.tabIndex = 0;
      pre.setAttribute('aria-label', 'Code example');
      const toolbar = document.createElement('div');
      toolbar.className = 'article-code-toolbar';
      const language = document.createElement('span');
      language.textContent = code.className.match(/language-([\w-]+)/)?.[1] || 'code';
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = 'Copy code';
      let timer: ReturnType<typeof setTimeout>;
      const copy = async () => {
        try {
          await navigator.clipboard.writeText(code.textContent || '');
          button.textContent = 'Copied!';
        } catch { button.textContent = 'Select code to copy'; }
        clearTimeout(timer);
        timer = setTimeout(() => { button.textContent = 'Copy code'; }, 2500);
      };
      button.addEventListener('click', copy);
      toolbar.append(language, button);
      pre.before(toolbar);
      cleanups.push(() => { clearTimeout(timer); button.removeEventListener('click', copy); toolbar.remove(); });
    });
    let frame = 0;
    const updateProgress = () => {
      const rect = body.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : rect.top <= 0 ? 1 : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(updateProgress); };
    updateProgress();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(body);
    return () => {
      cleanups.forEach(cleanup => cleanup());
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
    };
  }, [html]);
  useEffect(() => () => clearTimeout(shareTimer.current), []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href.split('#')[0]);
      setCopyStatus('Link copied!');
    } catch { setCopyStatus('Copy the URL from your address bar'); }
    clearTimeout(shareTimer.current);
    shareTimer.current = setTimeout(() => setCopyStatus('Copy link'), 3000);
  };
  const image = featuredImage?.childrenImageSharp?.[0]?.fluid?.originalImg;
  return (
    <div className="blog-index article-page">
      <a className="blog-skip" href="#article-content">Skip to article</a>
      <div className="article-progress" aria-hidden="true"><div ref={progressRef} /></div>
      <BlogNavbar />
      <main className="notebook-container">
        <header className="article-header" id="article-top">
          <Link className="article-back" to="/blogs/">← Back to the notebook</Link>
          <h1>{title}</h1>
          <div className="article-byline"><img src="/images/me-1.jpg" alt="" /><div><span>Manjil Tamang</span><p><time dateTime={date}>{formatDate(date)}</time><span aria-hidden="true"> · </span>{timeToRead} min read</p></div><button onClick={copyLink} type="button" aria-label="Copy article link"><span role="status">{copyStatus}</span><span aria-hidden="true"> <Icon /></span></button></div>
        </header>
        <div className="article-layout">
          <article className="article-reading">
            {image && <div className="article-cover"><img src={image} alt="" /></div>}
            <div id="article-content" ref={bodyRef} className="blog-detail blog-body" dangerouslySetInnerHTML={{ __html: html }} />
            <div className="article-endnote"><span aria-hidden="true">{'</>'}</span><p>Thanks for reading.</p><div><Link to="/blogs/">← More from the notebook</Link><a href="#article-top">Back to top ↑</a></div></div>
            <section className="article-comments" aria-labelledby="comments-title"><p className="article-section-label">CONTINUE THE CONVERSATION</p><h2 id="comments-title">Questions or thoughts?</h2><p>Leave a comment below, or <a href="mailto:hello@manjiltamang.com">send me an email <Icon /></a>.</p><iframe title="Article comments powered by Commentsy" loading="lazy" scrolling="no" id="commentsyIframe" src={`https://commentsy.vercel.app/embed/TF-ZtzmUlnQa?identifier=${slug}&theme=light`} /></section>
          </article>
          {sections.length > 0 && <aside className="article-sidebar" aria-label="Article contents"><details open><summary>ON THIS PAGE <span aria-hidden="true">⌄</span></summary><ol>{sections.map(section => <li key={section.id} className={section.depth === 3 ? 'is-subsection' : ''}><a href={`#${section.id}`} onClick={event => {
            const heading = document.getElementById(section.id);
            if (!heading) return;
            event.preventDefault();
            window.history.replaceState(null, '', `#${section.id}`);
            heading.scrollIntoView({ block: 'start' });
          }}>{section.title}</a></li>)}</ol></details><Link to="/blogs/" className="article-sidebar-back">← All articles</Link></aside>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        date title slug
        featuredImage { childrenImageSharp { fluid { originalImg } } }
      }
    }
  }
`;
export const Head = ({ data }: Props) => <SEO title={data.markdownRemark.frontmatter.title} pathname={`/blogs/${data.markdownRemark.frontmatter.slug}/`} />;
export default BlogDetail;
