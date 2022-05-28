import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Swiper } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'
import { connect } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import Showing from './Child/Showing'
import Comming from './Child/Comming'
import MidImage from '../Share/MidImage'
import Tabbar from '../Share/Tabbar'




function Home(props) {

  const {showinglist, dispatch, comminglist,cityId} = props
  const {pathname} = props.location
  const [list, setlist] = useState([])
  const [swiperlist, setswiper] = useState([])
  const [iconstate, seticonstate] = useState([true])
  const item = [
    {id: '/showing', url: '/home/showing', title:'現正熱映'},
    {id: '/comming', url: '/home/comming', title:'即將上映'}
  ]

console.log(cityId);
  useEffect(()=>{
    
    if(!showinglist.length>0){
      axios({
        url: `https://m.maizuo.com/gateway?cityId=${cityId}&pageNum=1&pageSize=10&type=1&k=5153642`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651519839805538296233985","bc":"440300"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>dispatch(res.data.data.films))
    }else{setlist(showinglist)}

    if(pathname === '/home/showing'){setswiper(showinglist)}
    else{setswiper(comminglist)}

  },[dispatch,showinglist,pathname,comminglist,cityId])

  const backIcon = ()=>{        
    const css = {
        div: {
            width:'30px',height:'30px',background:'rgba(40,40,40,0.5)',
            borderRadius:'50%',position:'absolute',top: '5px', right:'5px'
        },
        icon: {
            fontSize:'20px',color:'white',margin:'5px 0 0 5px'
        }
    }
    return (
        <div style={css.div}>
            <CloseOutline style={css.icon} onClick={()=>seticonstate(false)}/>
        </div>
    )
  }

  return (

    <div>
      
      {/* 暫時 */}
      {iconstate &&
        <Box>
          <p>
            目前是以手機板開發, PC僅有加入一點的RWD設定
            <br/>還請使用f12觀看, 避免傷眼...<br/>
            全部組件皆使用styled-components＆少量antd獨立開發複用<br/> 
            主要實做功能為, 拿到後端所有地區及所有劇院數據, 於劇院組件做切換,
            使用redux-persist保留住數據, 並在電影組件瀏覽, 現正熱映＆即將上映的電影
          </p>
          {backIcon()}
        </Box>
      }

      {/* Swiper */}
      {swiperlist.length >0 &&
        <Swiper autoplay loop>
          {swiperlist.map((item)=> 
            <Swiper.Item key={item.filmId}>
                <MidImage url={item.poster}/>
            </Swiper.Item>
          )}
        </Swiper>
      }

      {/* Tabbar */}
      <Tabbar item={item} fixed='sticky-top' color='white'/>

      {/* Showing || Comming */}
      <Switch>
        <Route path='/home/showing' render={()=><Showing list={list}/>}/>
        <Route path='/home/Comming' component={Comming}/>
        <Redirect from='/home' to='/home/showing'/>
      </Switch>

    </div>
  )
}

const Box = styled.div`
  width: 100%;
  padding: 10px;
  background: rgb(240,240,240);
  display: flex;
  align-items: center;
  position: relative;
`



const mapState = (state) =>({
  cityId: state.cityId,
  showinglist: state.showinglist,
  comminglist: state.comminglist
})

export default connect(mapState,{dispatch(r){return {type: 'showinglist', payload: r}}})
(Home)