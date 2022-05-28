import React, { useEffect, useState }from 'react'
import { NavBar, Popup } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import Card from '../Share/Card'
import styled from 'styled-components'
import axios from 'axios'
import { connect } from 'react-redux'



function Search(props) {
    
    const [list,setlist] = useState([])
    const [popup,setpopup] = useState(false)
    const [input,setinput] = useState('')
  

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


    const filteredList = ()=>{
      return (
        list.filter(item=>item.name.includes(input))
      )
    }

    const jumpTo = (r)=>{
      props.dispatch(r)
      props.history.push('/home')
    }

  return (
    <div>

      {/* navbar */}

        <NavBar right={<SearchOutline style={{fontSize:'20px'}}
        onClick={()=>setpopup(true)}/>}
        onBack={()=>{props.history.goBack()}}>
            目前選擇:
        </NavBar>

      {/* popup && input */}

        <Popup visible={popup} position='top' bodyStyle={{height: '6vh'}}
        onMaskClick={()=>setpopup(false)}>
          <InputBar placeholder='請輸入城市名' 
          onChange={(e)=>setinput(e.target.value)}/>
        </Popup>

      {/* renderlist */}

        {filteredList().map(item=>
            <Card key={item.cityId} h='70px' m='5px auto' p='5px 10px' 
              fs='20px' ls='2px' click={()=>jumpTo(item)}>
                <h4>{item.name}</h4>
            </Card>    
        )}
    </div>
  )
}


const InputBar = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 20px;
    font-size: 20px;
`

const mapDispatch = {
  dispatch(r){
    return {type:'city', value: r.cityId,
      value2: r.name}
  }
}

export default connect(null,mapDispatch)(Search)