import { Avatar } from 'antd-mobile'
import React from 'react'
import R1Card from '../Share/R1Card'
import styled from 'styled-components'
import DfR2Card from '../Share/DfR2Card'




export default function Profile() {

  const item = [
    {title:'酷碰卷'},
    {title:'紅包'},
    {title:'餘額'},
    {title:'客服與幫助'},
    {title:'設定'},
  ]

  return (
    <div>
      <R1Card bg='orange' h='150px'>
        <Box>
          <Avatar style={{'--size':'48px'}}/>
          <h3>尚未登錄</h3>
        </Box>
      </R1Card>

      <DfR2Card left={<h5>我的電影</h5>} right={<h5>購票紀錄</h5>}/>
      
      {item.map((item,i)=>
        <Item key={i}>{item.title}</Item>
      )}
        
    </div>
  )
}

const Box = styled.div`
  margin-top: 20px;
  height: 50px;
  display: flex;
    h3{
      font-size: 18px;
      line-height: 50px;
      margin-left: 15px;
      color: rgba(240,240,240,0.9)
      }
`
const Item = styled.div`
  padding: 10px 20px;
  height: 60px;
  font-size: 16px;
`