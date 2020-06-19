/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import icon from './../images/icon_512.png';

function SEO(props) {

  const {meta,
      image: metaImage,
      postSEO,postNode,postPath,
      title:pageTitle
  }=props;

  console.log(props);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
                description
                title
                image
                siteUrl
                siteLanguage
                twitterUsername
                author
                keywords
          }
        }
      }
    `
  )

  let title;
  let description;
  let image='';
  let postURL;

  

  if(postSEO){
    const postMeta=postNode.frontmatter;

    title=postMeta.title;
    description=postMeta.description ? postMeta.description : postNode.excerpt;

    //swap between postImage and icon for '/blogs' and '/' respectively
    const postImage= postNode.featuredImg.childImageSharp.fluid.src 
    image=metaImage.src;
    postURL=site.siteMetadata.siteUrl + `/blogs/${postMeta.slug}`
  }
  else{
    title=pageTitle ? pageTitle : site.siteMetadata.title;
    description=site.siteMetadata.description;
    image=metaImage ? metaImage.src : icon;
    
  }


 
  return (
    <Helmet

      htmlAttributes={{
        lang:"en"
      }}
    
      title={title}
    
      // titleTemplate={`%s | ${title}`}
    
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:url`,
          content: postSEO ? postURL : site.siteMetadata.siteUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property:'og:type',
          content:postSEO ? "article" : "portfolio"
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: "og:image",
          content: image
        },

        {
          name:"keywords",
          content:site.siteMetadata.keywords.join(",")
        },

        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name:'twitter:image',
          content:image
        }
      ]
      .concat(
        metaImage
          ?
          [
            {
              name: "twitter:card",
              content: "summary_large_image"
            }
          ]
          :
          [
            {
              name: "twitter:card",
              content: "summary_large_image"
            }
          ]
      )
      .concat(meta)
    }
    />
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image:PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  })
}

export default SEO
