import React,{useState} from 'react'
import './../../styles/helpers/blogfilter.scss';
import {useStaticQuery,graphql,Link} from 'gatsby';

import {getAllTags} from './../../static/data';


export default function BlogFilter() {
    const [blog,setCurrentBlog]=useState("");

    const data=useStaticQuery(graphql`
        query{
            allMdx{
                edges{
                    node{
                        frontmatter{
                            title,
                            slug,
                            tags,
                            date,
                        },
                        featuredImg{
                            childImageSharp{
                                fluid(maxWidth:600){
                                    src
                                }
                            }
                            
                        }
                        excerpt,
                        body
                    }
                }
            },
        }
    `)

    let allTags=getAllTags(data);

    const blogFilterHandler=(e) => {
        setCurrentBlog(e.target.value);
        data.allBlogs.edges.map( (edge) => {
            if(edge.node.title.toLowerCase().startsWith(e.target.value)){
                console.log("Blog found!");
            }
        })
    }
    

    return (
        <div className="filter">
            <h1>All blogs</h1>
            <h3>Filter blogs by categories</h3>

            <div className="tags">
                {Object.keys(allTags).map( (tag) => {
                    return (
                        <span className={"Tag"} key={Math.random()}>
                            <Link to={`/tags/${tag}`}>
                                {tag} <span className="blogcount">{allTags[tag]}</span>
                            </Link>
                        </span>
                    )
                })}
            </div>

        </div>
    )
}
