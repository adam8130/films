import React, { useState } from 'react'
import styled from 'styled-components'



export default function TabsApp(props) {

  const {item, title} = props
  const [target, settarget] = useState(0)
  const itemList = []
  console.log(title);


  for(let i=0; i<item; i++){itemList.push(
    {id: i, title: title[i].title}
  )}
  
  const effect = (r)=>{
    return {
      transform: target===r ? 'translateY(-10px)' : '',
      color: target===r ? 'orange' : ''
    }
  }


  return (
    <>
      <Tabs>
        {itemList.map((item,i)=>
          <TabItem key={item.id} style={effect(i)} onClick={()=>settarget(i)}>
            <p>{item.title}</p>
          </TabItem>
        )}
      </Tabs>
      <Desc>
          <p>{title[target].desc}</p>
      </Desc>
    </>
  )
}


const Tabs = styled.div`
  width: 100%;
  height: 70px;
  margin: 40px auto 0;
  background: rgb(240,240,240);
  display: flex;
  align-items: flex-end;
`

const TabItem = styled.div`
  flex: 1;
  height: 50px;
  border-style: solid;
  border-width: 5px 2px 5px 5px;
  border-color: rgba(39, 176, 213, 0.3) transparent transparent rgba(39, 176, 213, 0.3);
  text-align: center;
  line-height: 45px;
    p{
      letter-spacing: 2px;
    }
`

const Desc = styled.div`
  width: 100%;
  height: 250px;
  background: rgb(240,240,240);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  // border-top: 1px solid gray;
`
