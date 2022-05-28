import React, { useEffect, useState } from 'react'
import { NavBar, Popup, Toast } from 'antd-mobile'
import { SearchOutline, DownOutline } from 'antd-mobile-icons'
import { connect } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'




function Cinemas(props) {

  const {cityId} = props
  const [list,setlist] = useState([])
  const [popup,setpopup] = useState(false)
  const [input,setinput] = useState('')
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

  const filteredList = ()=>(
      list.filter(item=>item.name.includes(input))
  )
  


  return (
    <div>
      
      {/* navbar */}
      <NavBar back={currentCity} backArrow={<DownOutline style={font20}/>}
      right={<SearchOutline style={font20} onClick={()=>setpopup(true)}/>} 
      onBack={()=>click('/search')}>
        劇院
      </NavBar>

      {/* popup && input */}
      <Popup visible={popup} position='top' bodyStyle={{height: '6vh'}}
        onMaskClick={()=>setpopup(false)}>
          <InputBar placeholder='請輸入城市名' 
          onChange={(e)=>setinput(e.target.value)}/>
      </Popup>

      {/* list */}
      {filteredList().map(item=>
        <Box key={item.cinemaId}>
            <div onClick={()=>Toast.show({content:'請點擊左上角選擇城市'})}>
              <h4>{item.name}</h4>
              <p>{item.address}</p>
            </div>
            <div>
              <Button >查看票價</Button>
            </div>
        </Box> 
      )}
    </div>
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
      > div{
        flex:0.8;
          +div{
            flex: 0.2;
          }
      }
    @media screen and (min-width:1000px){
      > div{
        flex:0.9;
          +div{
            flex: 0.1;
          }
      }
    }
`  
const Button = styled.button`
    padding: 3px 5px;
    border: 1px solid rgba(40,40,40,0.4);
    color: rgb(254,175,0);
`
const InputBar = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 20px;
    font-size: 20px;
`


const mapState = state =>(
  {cityId: state.cityId}
)

export default connect(mapState)(Cinemas)