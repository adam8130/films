import React from 'react'
import styled from 'styled-components'



export default function Image(props) {

    const {w,h,m,url,mt,mb,fit,media,click} = props

  return (
    <Box w={w} h={h} m={m} mt={mt} mb={mb} url={url} fit={fit} media={media}
      onClick={()=>click&&click()}/>
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
    @media screen and (${props=>props.media && props.media.media2}) {
      ${props=>props.media && props.media.css2}
    }
    @media screen and (${props=>props.media && props.media.media3}) {
      ${props=>props.media && props.media.css3}
    }
    `
    // ${props=>props.media.map((item,i)=>'@media screen and (' +item.media+ ')'+
    // '{' + item.css +'}')}