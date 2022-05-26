import React from 'react'
import styled from 'styled-components'




export default function Card(props) {

    const {w,h,m,p} = props

  return (
    <Box w={w} h={h} m={m} p={p}>
        {props.children}
    </Box>
  )
}


const Box = styled.div`
    width: ${props=>props.w? props.w: '100%'};
    height: ${props=>props.h? props.h: '80px'};
    margin: ${props=>props.m? props.m: '40px 0'};
    padding: ${props=>props.p? props.p: '30px'};
    line-height: ${props=>props.h? props.h: '80px'};
    background: rgb(240,240,240);
    letter-spacing: 2px;
    font-size: 18px;
`