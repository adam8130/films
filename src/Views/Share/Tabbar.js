import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'




function Tabbar(props) {

  const {item, clickColor,fixed,color} = props
  const [list, setlist] = useState([])

  useEffect(()=>{
    item && setlist(item)
  },[item])
  
  
  const effect = (r)=>{
    return {color: props.location.pathname.split('/')[1] === r.id.split('/')[1] 
    || props.location.pathname=== r.url? (clickColor? clickColor: 'orange'): ''}
  }


  return (
    <Box fixed={fixed} color={color}>
      
      {list.map((item,i)=>
        <BoxItem key={item.id} style={effect(item)} 
          onClick={()=>props.history.push(item.url)}>
          {item.title}
        </BoxItem>
      )}
    </Box>
  )
}


const Box = styled.div`
  width: 100%;
  padding: 10px 0;
  background: ${props=>props.color? props.color : 'rgb(240,240,240)'};
  display: flex;
  align-items: center;
  ${props=>props.fixed==='bottom'? 'position: fixed; bottom: 0;' : null}
  ${props=>props.fixed==='top'? 'position: fixed; top: 0;' : null}
  ${props=>props.fixed==='sticky-top'? 'position: sticky; top: 0;' : null}
  ${props=>props.fixed==='sticky-bottom'? 'position: sticky; bottom: 0;' : null}
`
const BoxItem = styled.div`
  flex: 1;
  padding: 10px 0;
  text-align: center;
`


export default withRouter(Tabbar)