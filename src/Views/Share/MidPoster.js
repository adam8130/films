import React from 'react'
import styled from 'styled-components'
import Image from './Image'



export default function MidPoster(props) {

  return (
    <Box url={props.url}>
        <Image url={props.url} w='60%'/>
    </Box>
  )
}

const Box = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(rgba(50,50,50,0.3),
    rgba(50,50,50,0.3)),url(${props=>props.url});
    background-size: cover;
    background-position: center -50px;
        img{
            width: 60%;
        }
`
