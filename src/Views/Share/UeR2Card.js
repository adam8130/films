import React from 'react'
import styled from 'styled-components'



export default function UeR2Card(props) {

    return (
        <Box>
            <BoxItem>{props.mid}</BoxItem>
            <BoxItem>{props.right}</BoxItem>
        </Box>
    )
}


const Box = styled.div`
    width: 100%;
    background: rgba(240,240,240,0.4);
    padding: 20px 10px;
    margin: 5px auto;
    display: flex;
    align-items: center;
    font-size: 16px;
`  
const BoxItem = styled.div`
    flex: 0.8;
        + div{
            flex: 0.2;
        }
           
`
