import React from 'react'
import styled from 'styled-components'




export default function R1Card(props) {

    const {w,h,m,p,mt,mb,bg,d,aic,click,ls,fs} = props

  return (
    <Box w={w} h={h} m={m} mt={mt} mb={mb} p={p} bg={bg} ls={ls} fs={fs} d={d} aic={aic}
      onClick={()=>click()&&click()}>
        {props.children}
    </Box>
  )
}


const Box = styled.div`
    width: ${props=>props.w? props.w: '100%'};
    height: ${props=>props.h};
    margin: ${props=>props.m};
    margin-top: ${props=>props.mt};
    margin-bottom: ${props=>props.mb};
    padding: ${props=>props.p};
    line-height: ${props=>props.h};
    background: ${props=> props.bg? props.bg: 'rgb(240,240,240)'};
    letter-spacing: ${props=>props.ls};
    font-size: ${props=>props.fs};
    display: ${props=>props.d};
    ${props=>props.aic && 'align-items: center'};

`