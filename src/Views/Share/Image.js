import React from 'react'
import styled from 'styled-components'



export default function Image(props) {

    const {w,h,m,url,mt,mb} = props

  return (
    <Box w={w} h={h} m={m} mt={mt} mb={mb} url={url}/>
  )
}

const Box = styled.div`
    width: ${props=>props.w? props.w: '100%'};
    height: ${props=>props.h? props.h: '300px'};
    margin: ${props=>props.m};
    margin-top: ${props=>props.mt};
    margin-bottom: ${props=>props.mb};
    background-image: url(${props=>props.url});
    background-size: cover;
`