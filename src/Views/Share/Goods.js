import React from 'react'
import styled from 'styled-components'



export default function Goods(props) {

    const {item1, item2} = props

    return (
        <Good>
            <Wrap>
                <Item src={item1.url} onClick={()=>props.click1()}/>
                <Title>{props.title1}</Title>
            </Wrap>
            <Wrap>
                <Item src={item2.url} onClick={()=>props.click2()}/>
                <Title>{props.title2}</Title>
            </Wrap>
        </Good>
  )
}


const Good = styled.div`
    width: 100%;
    background: rgb(240,240,240);
    padding: 40px 0 40px 0;
    margin: 40px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Item = styled.div`
    width: 90%;
    height: 150px;
    margin: auto;
    background-image: url(${props=>props.src});
    background-size: cover;
    
`

const Wrap = styled.div`
    width: 90%;
    height: 200px;
    margin: 0 5px;
    background: rgb(240,240,240);
`

const Title = styled.h4`
    width: 90%;
    margin: 15px auto;
    padding: 10px;
    text-align: center;
    // background: rgb(255,255,255);
`

