import React from 'react'
import styled from 'styled-components'
import Image from './Image'



export default function MidImage(props) {

  const {w,h,m,url,mt,mb,fit,media,click,xy} = props

  return (
    <Box url={url} w={w} h={h} m={m} mt={mt} mb={mb} fit={fit} xy={xy}
      media={media} onClick={()=>click?click():{}}>
        <Image url={url} w='60%' h='40vh'/>
    </Box>
  )
}


const Box = styled.div`
    width: ${props=>props.w? props.w : '100%'};
    height: ${props=>props.h? props.h : '40vh'};
    margin: ${props=>props.m};
    margin-top: ${props=>props.mt};
    margin-bottom: ${props=>props.mb};
    display: flex;
    justify-content: center;
    background-image: linear-gradient(rgba(50,50,50,0.3),
    rgba(50,50,50,0.3)),url(${props=>props.url});
    background-size: ${props=>props.fit? props.fit: 'cover'};
    background-position: ${props=>props.xy? props.xy: 'center center'};
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
