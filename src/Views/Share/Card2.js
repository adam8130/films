import React from 'react'
import styled from 'styled-components'



export default function Card2(props) {

    let {mc, tc, ic} = props
    
    return (
        <Card mc={mc} tc={tc} ic={ic}>
            <h6>{props.title}</h6>
            <p>{props.children}</p>
        </Card>
    )
}


const Card = styled.div`
    width: 90%;
    background: ${props=>props.mc ? props.mc : 'rgb(240,240,240)'};
    padding: 20px 0 40px 0;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
        h6{
            width: 90%;
            background: ${props=>props.tc ? props.tc : 'rgb(240,240,240)'};
            padding: 30px;
            font-size: 18px;
            letter-spacing: 2px;
        }
        p{
            width: 90%;
            margin-top: 20px;
            background: ${props=>props.ic ? props.ic : 'rgba(255,255,255,0.8)'};
            padding: 30px;
            font-size: 18px;
            letter-spacing: 2px;
        }
`  

