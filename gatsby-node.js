exports.createPages = async ({ graphql, actions }) => {

  const results = await graphql(
    `
          {
          pages: allStrapiPage(sort: {order: ASC, fields: createdAt}) {
            edges {
              node {
                name
                Slug
                id
              }
            }
          },
          albums: allStrapiBlogItem{
            edges {
              node {
                title
                id
                Slug
              }
            }
          }
          }
      `
  )
  if (results.errors) {
    throw results.errors;
  }
  const pages = results.data.pages.edges;
  const albums = results.data.albums.edges;

  const { createPage } = actions
  pages.forEach(page => {
    createPage({
      path: `/${page.node.name.toLowerCase()}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        name: page.node.name,
        id: page.node.id,
        Slug: page.node.Slug,
      },
    })
  });
  albums.forEach(album => {
    createPage({
      path: `/album/${album.node.Slug.toLowerCase()}`,
      component: require.resolve("./src/templates/album.js"),
      context: {
        title: album.node.title,
        id: album.node.id,
        Slug: album.node.Slug,
      },
    })
  });

  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/${pages[0].node.name.toLowerCase()}`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
