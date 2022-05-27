import React from 'react'
import styled from 'styled-components'
import Image from './Image'



export default function MidPoster(props) {

  return (
    <Box url={props.url}>
        <Image url={props.url} w='60%' h='40vh'/>
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
    @media screen and (min-width: 768px) {
      height: 50vh;
        div{
            width: 60%;
            height: 50vh;
        }
    }
    @media screen and (min-width: 1000px) {
      height: 70vh;
        div{
              width: 30vw;
              height: 70vh;
            }
        }
    }
    
`
