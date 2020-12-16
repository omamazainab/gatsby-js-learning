const { graphql } = require('gatsby')
const path = require('path')




module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query{
            allContentfulBlogPost{
                nodes{
                    slug
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.nodes.map((data) => {
        createPage({
            component: blogTemplate,
            path: `/blogs/${data.slug}`,
            context: {
                slug: data.slug
            }
        })
    })
}