import React, { useEffect, useRef, useState }from 'react'
import { NavBar, Popup } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import R1Card from '../Share/R1Card'
import styled from 'styled-components'
import axios from 'axios'



export default function Search(props) {
    
    const [list,setlist] = useState([])
    const [popup,setpopup] = useState(false)
    const ref = useRef()
  

    useEffect(() => {
      axios({
          url: 'https://m.maizuo.com/gateway?k=8213049',
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651519839805538296233985","bc":"440300"}',
            'X-Host': 'mall.film-ticket.city.list'
          }
      }).then(res=>setlist(res.data.data.cities))
    
      return () => {}
    }, [])

    const change = ()=>{
        
    }

  return (
    <div>
        <NavBar right={<SearchOutline style={{fontSize:'20px'}}
        onClick={()=>setpopup(true)}/>}
        onBack={()=>{props.history.goBack()}}>
            目前選擇:
        </NavBar>

        <Popup visible={popup} position='top' bodyStyle={{height: '10vh'}}
        onMaskClick={()=>setpopup(false)}>
            <SearchBar placeholder='請輸入城市名' ref={ref} 
            onChange={()=>change()}/>
        </Popup>

        {list.map(item=>
            <R1Card key={item.cityId} h='50px' m='5px auto' p='5px 10px' >
                <h4>{item.name}</h4>
            </R1Card>    
        )}
    </div>
  )
}


const SearchBar = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 20px;
    font-size: 20px;
`