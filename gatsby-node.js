const _ = require(`lodash`);
const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);

const createCustomizedCreatePage = function createCustomizedCreatePage (createPage) {
  return (node, templateName) => createPage({
    path: node.fields.slug,
    component: path.resolve(templateName),
    context: {
      slug: node.fields.slug,
    },
  });
}

const createContentPage = function createContentPage (customizedCreatePage, node) {
  if (node.fields.fileName === `index`) {
    customizedCreatePage(node, `./src/pages/index.js`);
    return;
  }

  customizedCreatePage(node, `./src/templates/content-page.js`);
}

const createSlug = function createSlug ({ basePath, fileName, node, getNode }) {
  if (basePath === `content` && fileName === `index`) {
    return `/`;
  }

  return createFilePath({ node, getNode, basePath });
}

exports.onCreateNode = ({ getNode, boundActionCreators, node }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const fileName = path.basename(node.fileAbsolutePath, `.md`);

    // It looks like on Windows, Gatsby also uses `/`,
    // so we should not use `path.sep` constant.
    const basePath = _.last(path.dirname(node.fileAbsolutePath).split("/"));

    const slug = createSlug({ basePath, fileName, node, getNode });

    createNodeField({ node, name: `slug`, value: slug });
    createNodeField({ node, name: `type`, value: basePath });
    createNodeField({ node, name: `fileName`, value: fileName });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const customizedCreatePage = createCustomizedCreatePage(createPage);

  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                fileName
                slug
                type
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        switch (node.fields.type) {
          case `content`:
            createContentPage(customizedCreatePage, node);
            break;

          default:
            // eslint-disable-next-line no-console
            console.warn(`Unexpected type '${node.fields.type}' discovered for '${node.fields.slug}'.`);
            break;
        }
      });

      resolve();
    });
  });
};
