import React from 'react'
import styled from 'styled-components'



export default function MidPoster(props) {

  return (
    <Box url={props.url}>
        <img src={props.url} alt=''/>
    </Box>
  )
}

const Box = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(rgba(50,50,50,0.3),
    rgba(50,50,50,0.3)),url(${props=>props.url});
    background-size: cover;
    background-position: center -50px;
        img{
            width: 50%;
        }
`
