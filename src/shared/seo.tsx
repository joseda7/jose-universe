/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
// const Helmet = require('react-helmet');

const SEO = (props: SEOInterface) => {
   const { site, allFile } = useStaticQuery(
      graphql`
         query {
            site {
               siteMetadata {
                  title
                  description
                  author
                  siteUrl
               }
            }
            allFile(filter: { name: { eq: "logo" } }) {
               nodes {
                  relativePath
                  publicURL
               }
            }
         }
      `
   );
   // console.log(props);
   const description = props.description;
   const lang = props.lang || site.siteMetadata.locale;
   const meta = props.meta || [];
   const title = props.title;
   let metaDescription = description || site.siteMetadata.description;
   let author = site.siteMetadata.author;
   let siteUrl = site.siteMetadata.siteUrl;
   // let ogImageUrl = props.image || siteUrl + '/logo.png';
   let ogImageUrl = props.image || siteUrl + allFile.nodes[0].publicURL;
   const isArticle = props.isArticle;
   const titleArticle = props.titleArticle;
   const datePublished = props.datePublished;
   const slug = props.slug;
   // let script = props.script;

   // Organization Schema ----------------------------------
   const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "COMFAMA",
      alternateName: author,
      url: siteUrl,
      // 'logo': siteUrl + '/logo.png',
      logo: siteUrl + allFile.nodes[0].publicURL,
      contactPoint: {
         "@type": "ContactPoint",
         telephone: "01 8000 124 477",
         contactType: "customer service",
         contactOption: "TollFree",
         areaServed: "CO",
         availableLanguage: "es",
      },
      sameAs: [
         "https://www.facebook.com/comfama/",
         "https://twitter.com/Comfama/",
         "https://www.instagram.com/comfama/",
         "https://www.youtube.com/user/ComfamaCCF/",
         "https://www.linkedin.com/company/comfama/",
      ],
   };
   const schemaOrgJSONLD = {
      type: "application/ld+json",
      innerHTML: JSON.stringify(org),
   };

   // WebSite Schema ----------------------------------
   const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": siteUrl + "#website",
      headline: "Comfama",
      name: "Comfama",
      description: site.siteMetadata.description,
      url: siteUrl,
      potentialAction: {
         "@type": "SearchAction",
         target: siteUrl + "?s={search_term_string}",
         "query-input": "required name=search_term_string",
      },
   };
   const schemaWebSiteJSONLD = {
      type: "application/ld+json",
      innerHTML: JSON.stringify(website),
   };

   // Local Business Schema ----------------------------------
   const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Comfama",
      // "image": siteUrl + '/logo.png',
      image: siteUrl + allFile.nodes[0].publicURL,
      "@id": siteUrl + "#website",
      url: siteUrl,
      telephone: "01 8000 124 477",
      address: {
         "@type": "PostalAdress",
         streetAddress: "Cra. 48 #20-114",
         addressLocality: "Medellín",
         postalCode: "050021",
         addressCountry: "Colombia",
      },
      openingHoursSpecification: {
         "@type": "OpeningHoursSpecification",
         dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
         ],
         opens: "08:00",
         closes: "16:00",
      },
      sameAs: [
         "https://www.facebook.com/comfama/",
         "https://twitter.com/Comfama/",
         "https://www.instagram.com/comfama/",
         "https://www.youtube.com/user/ComfamaCCF/",
         "https://www.linkedin.com/company/comfama/",
      ],
   };
   const schemaLocalBusinessJSONLD = {
      type: "application/ld+json",
      innerHTML: JSON.stringify(localBusiness),
   };

   // Blog Posting Schema ----------------------------------
   const blogPosting = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: titleArticle, // Article title
      image: ogImageUrl, // Article main image
      author: {
         "@type": "Organization",
         name: author,
      },
      publisher: {
         "@type": "Organization",
         name: "Comfama",
         logo: {
            "@type": "ImageObject",
            // "url": siteUrl + '/logo.png',
            url: siteUrl + allFile.nodes[0].publicURL,
         },
      },
      datePublished: datePublished,
      dateModified: datePublished,
   };

   const blogPostingJSONLD = {
      type: "application/ld+json",
      innerHTML: JSON.stringify(blogPosting),
   };

   // FAQ Page Schema example ----------------------------------
   // const faqPage = {
   //    "@context": "https://schema.org",
   //    "@type": "FAQPage",
   //    "mainEntity": [{
   //       "@type": "Question",
   //       "name": " ",	// El título de la pregunta
   //       "acceptedAnswer": {
   //             "@type": "Answer",
   //             "text": " "  // Respuesta
   //             }
   //       },{
   //          "@type": "Question",
   //          "name": "",	// El título de la pregunta
   //          "acceptedAnswer": {
   //             "@type": "Answer",
   //             "text": ""  // Respuesta
   //       }
   //    }]
   // };
   // FAQ Page HTML example ----------------------------------
   // <section itemscope="" itemtype="https://schema.org/WebPage" id="container-frecuentes">
   //    <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/FAQPage" class="contenedor-preguntas-frecuentes">
   //       <article itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question" class="pregunta pregunta-1">
   //          <h3 itemprop="name" class="titulo-pregunta">Este es el título de la pregunta</h3>
   //          <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer" class="contenedor-respuesta">
   //             <div itemprop="text" class="Respuesta">
   //                <p>esta es la respuesta de la pregunta, puede tener dos parrafos o mas desde que esten dentro del item text</p>
   //                <p>esta es el segundo parrafo, también puede ponerse el itemprop="text" en cada <  p > que tengas dentro de la respuesta aceptada </p>
   //             </div>
   //          </div>
   //       </article>
   //    </div>
   // </section>

   let schemas;

   if (isArticle) {
      schemas = [
         schemaOrgJSONLD,
         schemaWebSiteJSONLD,
         schemaLocalBusinessJSONLD,
         blogPostingJSONLD,
      ];
   } else {
      schemas = [
         schemaOrgJSONLD,
         schemaWebSiteJSONLD,
         schemaLocalBusinessJSONLD,
      ];
   }

   return (
      <Helmet
         htmlAttributes={{ lang }}
         title={title}
         titleTemplate={`%s | ${site.siteMetadata.title}`}
         meta={[
            { name: `description`, content: metaDescription },
            { property: `image`, content: ogImageUrl },
            { property: `og:title`, content: title },
            { property: `og:description`, content: metaDescription },
            { property: `og:image`, content: ogImageUrl },
            { property: `og:image:width`, content: `400` },
            { property: `og:image:height`, content: `300` },
            { property: `og:type`, content: `website` },
            { property: `og:url`, content: siteUrl + slug },
            { name: `twitter:card`, content: `summary` },
            { name: `twitter:creator`, content: author },
            { name: `twitter:title`, content: title },
            { name: `twitter:description`, content: metaDescription },
            { name: `twitter:image`, content: ogImageUrl },
            {
               name: "google-site-verification",
               content: process.env.GOOGLE_SITE_VERIFICATION,
            },
         ].concat(meta)}
         script={schemas}
      >
         { 
            title==="Resultados " && <meta name="robots" content="noindex"></meta>
         }
      </Helmet>
   );
};

interface SEOInterface {
   title: string;
   description?: any;
   lang?: string;
   meta?: Array<any>;
   image?: string;
   isArticle?: boolean;
   titleArticle?: string;
   datePublished?: string;
   slug?: string;
}

export default SEO;
