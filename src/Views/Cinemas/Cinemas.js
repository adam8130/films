import React, { useEffect, useState } from 'react'
import { NavBar } from 'antd-mobile'
import { SearchOutline, DownOutline } from 'antd-mobile-icons'
import { connect } from 'react-redux'
import styled from 'styled-components'
import UeR2Card from '../Share/UeR2Card'
import axios from 'axios'




function Cinemas(props) {

  const {cityId} = props
  const [list,setlist] = useState([])
  const [currentCity,setcity] = useState('')
  const font20 = {fontSize:'20px'}

  useEffect(()=>{
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=6092976`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651519839805538296233985","bc":"440300"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      setlist(res.data.data.cinemas)
      setcity(res.data.data.cinemas[0].cityName)})
  },[cityId])


  const click = (r) =>{
    props.history.push(r)
  }


  return (
    <div>
      
      {/* navbar */}
      <NavBar back={currentCity} backArrow={<DownOutline style={font20}/>}
      right={<SearchOutline style={font20}/>} onBack={()=>click('/search')}>
        劇院
      </NavBar>

      {/* list */}
      {list.map(item=>
        <UeR2Card key={item.cinemaId} 
            mid={<div style={{width:'90%'}}>
                    <h4>{item.name}</h4>
                    <p>{item.address}</p>
                  </div>}
            right={<Button>查看票價</Button>}/>
      )}
    </div>
  )
}

const Button = styled.button`
    padding: 3px 5px;
    border: 1px solid rgba(40,40,40,0.4);
    color: rgb(254,175,0);
`

const mapState = state =>(
  {cityId: state.cityId}
)

export default connect(mapState)(Cinemas)