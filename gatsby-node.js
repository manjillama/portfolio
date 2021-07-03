const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blogs {
      blogs: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.blogs.nodes.forEach((node) => {
    actions.createPage({
      path: `/blogs/${node.frontmatter.slug}`,
      component: path.resolve(`./src/components/templates/blog-detail.jsx`),
      context: {
        slug: node.frontmatter.slug
      }
    });
  });
};
