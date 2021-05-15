/*
 * This is the home page, where you land when you reach timellison.dev
 */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import { BlogPostExcerpt } from './blog'
import Layout from '../components/Layout'

const LilHook = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </a>
)

export default ({ location }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
              }
            }
          }
        }
      }
    `}
    render={data => {
      const posts = get(data, 'allMarkdownRemark.edges') || []

      return (
        <Layout location={location}>
          <p>
            Hi, I'm Tim 👋 I'm a software engineer specializing in enterprise web applications
          </p>
          <p>
            At <LilHook href="https://jobs.netflix.com/">Netflix</LilHook> I build
            tools used by translators around the world to create subtitles. In my work
            I value utility, simplicity, and clarity above all else. I'm passionate about
            automated testing, documentation practices, communication tools, and
            operations visibility — anything that helps developers help themselves.
          </p>
          <div>
            <h2>Blog Posts</h2>
            <ul>
              {posts.map(({ node }) => (
                <li>
                  <BlogPostExcerpt
                    url={node.fields.slug}
                    title={get(node, 'frontmatter.title') || node.fields.slug}
                    key={node.fields.slug}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Layout>
      )
    }}
  />
)
