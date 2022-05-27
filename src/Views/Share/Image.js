import React from 'react'
import styled from 'styled-components'



export default function Image(props) {

    const {w,h,m,url,mt,mb,fit,media} = props

  return (
    <Box w={w} h={h} m={m} mt={mt} mb={mb} url={url} fit={fit} media={media}/>
  )
}

const Box = styled.div`
    width: ${props=>props.w? props.w: '100%'};
    height: ${props=>props.h? props.h: '300px'};
    margin: ${props=>props.m};
    margin-top: ${props=>props.mt};
    margin-bottom: ${props=>props.mb};
    background-image: url(${props=>props.url});
    background-size: ${props=>props.fit? props.fit: 'cover'};
    @media screen and (${props=>props.media && props.media.media}) {
      ${props=>props.media && props.media.css}
    }
    
`