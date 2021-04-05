import React from 'react';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Options } from "@contentful/rich-text-react-renderer"
//import [MARKS, BLOCKS] from '@contentful/rich-text-types'
//import [Options] from "@contentful/rich-text-react-renderer"
import {ContentfulRichTextGatsbyReference,renderRichText,RenderRichTextData} from 'gatsby-source-contentful/rich-text';
import {useContentfulImage} from '../hooks/useContentfulImage';
import {Bold, Heading1, Text} from "./Markdown"
import Img from 'gatsby-image';

type BlogBodyProps ={
    content : RenderRichTextData<ContentfulRichTextGatsbyReference>
}

export const BlogBody=({content}: BlogBodyProps)=>{
  const options: Options ={
      renderMark:{
          [MARKS.BOLD] : (text) => <Bold>{text}</Bold>,
      },
      renderNode:{
          [BLOCKS.HEADING_1]: (node, children)=> <Heading1>{children}</Heading1>,
          [BLOCKS.PARAGRAPH]: (node, children)=><Text>{children}</Text>,
          [BLOCKS.EMBEDDED_ASSET]: (node) =>{
            const asset = useContentfulImage(node.data.target.sys.id)
            if(asset){
                return(
                    <Img
                    fluid ={asset.node.fluid}
                    style={{maxWidth:"500px", margin:"5% auto"}}
                    />
                )
            }

          },
      }
  }
  return(
      <article className="blog-body">{renderRichText(content,options)}</article>
  )
}