import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/organisms/layout/layout";
// import SEO from "../components/seo"
// import Body from "../components/molecules/body/body"
import BodyHome from "../components/organisms/body-home/bodyHome";
import "./../styles/index.scss"

const IndexPage = () => {

   const data = useStaticQuery( graphql`
      query HOME_CONTENT {
         allContentfulHome {
            nodes {
               logotype {
                  description
                  title
                  file {
                     url
                     fileName
                  }
               }
            }
         }
      }
   `);

   return (
      <Layout>
         <BodyHome {...data.allContentfulHome.nodes[0]} />
      </Layout>
   )
}

export default IndexPage
