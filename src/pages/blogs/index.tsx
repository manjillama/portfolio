import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Footer from '../../components/footer';
import Seo from '../../components/seo';
import { Blog } from '../../types';
import { formatDate } from '../../utils';
import '../../styles/blog-index.css';

type Props = { data: { blogs: { nodes: Blog[] } } };
const topics = ['All posts', 'Systems & data', 'Java & Spring', 'Web & deployment'];
function topicFor(blog: Blog) {
  const title = blog.frontmatter.title;
  if (/kafka|elasticsearch|dynamodb|data-intensive/i.test(title)) return 'Systems & data';
  if (/java|spring|solid/i.test(title)) return 'Java & Spring';
  return 'Web & deployment';
}

function Blogs({ data }: Props) {
  const blogs = data.blogs.nodes;
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState('All posts');
  const visibleBlogs = blogs.filter(blog =>
    (topic === 'All posts' || topicFor(blog) === topic) &&
    `${blog.frontmatter.title} ${blog.excerpt}`.toLowerCase().includes(search.trim().toLowerCase())
  );
  const filtered = search.trim() !== '' || topic !== 'All posts';
  const clearFilters = () => { setSearch(''); setTopic('All posts'); };

  return (
    <div className="blog-index">
      <a className="blog-skip" href="#articles">Skip to articles</a>
      <header className="notebook-nav">
        <nav className="notebook-container" aria-label="Main navigation">
          <p className="notebook-brand">Manjil Tamang <span>/ writing</span></p>
          <div><Link to="/">Home</Link><Link to="/blogs/" aria-current="page">Blog<span className="notebook-current" /></Link><Link to="/#projects">Projects <span aria-hidden="true">↗</span></Link></div>
        </nav>
      </header>
      <main>
        <section className="notebook-intro notebook-container" aria-labelledby="notebook-title">
          <p className="notebook-kicker"><span aria-hidden="true">✳</span> THE ENGINEERING NOTEBOOK</p>
          <h1 id="notebook-title">Occasional notes from my work<span>.</span></h1>
          <p className="notebook-description">A place for things I don’t want to forget.</p>
          <div className="notebook-byline"><img src="/images/me-1.jpg" alt="" /><span>Written by Manjil Tamang</span><span className="notebook-post-count">{blogs.length} articles</span></div>
          <span className="notebook-margin-note" aria-hidden="true">// learn. build. write.</span>
        </section>
        <section id="articles" className="notebook-archive notebook-container" aria-labelledby="archive-title">
          <h2 id="archive-title" className="sr-only">Articles</h2>
          <div className="notebook-tools">
            <div className="notebook-filters" role="group" aria-label="Filter articles by topic">{topics.map(item => <button key={item} aria-pressed={topic === item} onClick={() => setTopic(item)}>{item}{item === 'All posts' && <span>{blogs.length}</span>}</button>)}</div>
            <label className="notebook-search"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><span className="sr-only">Search articles</span><input type="search" placeholder="Search the notebook…" value={search} onChange={event => setSearch(event.target.value)} /></label>
          </div>
          <p className={filtered ? 'notebook-result-count' : 'sr-only'} role="status">{visibleBlogs.length} {visibleBlogs.length === 1 ? 'article' : 'articles'}{filtered ? ' found' : ' · newest first'}</p>
          <ol className="notebook-list">
            {visibleBlogs.map((blog, index) => {
              const { frontmatter, timeToRead } = blog;
              const year = frontmatter.date.slice(0, 4);
              const previousYear = index > 0 ? visibleBlogs[index - 1].frontmatter.date.slice(0, 4) : '';
              return <li key={frontmatter.slug}>
                {year !== previousYear && <div className="notebook-year"><span>{year}</span><span /></div>}
                <article className="notebook-article">
                  <Link to={`/blogs/${frontmatter.slug}`}>
                    <div className="notebook-article-meta"><span>{topicFor(blog)}</span></div>
                    <div className="notebook-article-title"><h3>{frontmatter.title}</h3><span aria-hidden="true">↗</span></div>
                    <div className="notebook-article-footer"><time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time><span aria-hidden="true">·</span><span>{timeToRead} min read</span></div>
                  </Link>
                </article>
              </li>;
            })}
          </ol>
          {visibleBlogs.length === 0 && <div className="notebook-empty"><span aria-hidden="true">⌕</span><h3>No matching notes yet.</h3><p>Try a different topic or search term.</p><button onClick={clearFilters}>Show all articles ↗</button></div>}
          <div className="notebook-end"><span aria-hidden="true">{'</>'}</span><p>That’s the notebook so far.</p><a href="mailto:hello@manjiltamang.com">Have a question? Say hello ↗</a></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query GetBlogs {
    blogs: allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { published: { eq: true } } }) {
      nodes {
        frontmatter { date title slug }
        excerpt(pruneLength: 160)
        timeToRead
      }
    }
  }
`;
export default Blogs;
export const Head = () => <Seo title="Engineering notebook" pathname="/blogs/" description="Notes by Manjil Tamang on Java, backend systems, databases, and building for the web." />;
