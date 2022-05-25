import React from 'react'
import styled from 'styled-components'



export default function UnEqualR3Card(props) {

    
    return (
        <Box>
            <BoxItem>{props.left}</BoxItem>
            <BoxItem>{props.mid}</BoxItem>
            <BoxItem>{props.right}</BoxItem>
        </Box>
    )
}


const Box = styled.div`
    width: 100%;
    background: rgba(240,240,240,0.4);
    padding: 10px 10px;
    margin: 5px auto;
    display: flex;
    align-items: center;
`  
const BoxItem = styled.div`
    flex: 0.3;
        + div{
            flex: 0.55;
                + div{
                    flex: 0.15;
                }
        }
           
`
