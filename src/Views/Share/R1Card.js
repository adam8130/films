import React from 'react'
import styled from 'styled-components'




export default function R1Card(props) {

    const {w,h,m,p,mt,mb,bg,click} = props

  return (
    <Box w={w} h={h} m={m} mt={mt} mb={mb} p={p} bg={bg}
      onClick={()=>click()&&click()}>
        {props.children}
    </Box>
  )
}


const Box = styled.div`
    width: ${props=>props.w? props.w: '100%'};
    height: ${props=>props.h? props.h: '80px'};
    margin: ${props=>props.m};
    margin-top: ${props=>props.mt};
    margin-bottom: ${props=>props.mb};
    padding: ${props=>props.p? props.p: '30px'};
    line-height: ${props=>props.h? props.h: '80px'};
    background: ${props=> props.bg? props.bg: 'rgb(240,240,240)'};
    letter-spacing: 2px;
    font-size: 20px;
`