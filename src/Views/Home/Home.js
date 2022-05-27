import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Swiper } from 'antd-mobile'
import Showing from './Child/Showing'
import Comming from './Child/Comming'
import MidPoster from '../Share/MidPoster'
import Tabbar from '../Share/Tabbar'
import axios from 'axios'
import { connect } from 'react-redux'




function Home(props) {

  const {showinglist, dispatch, comminglist,cityId} = props
  const {pathname} = props.location
  const [list, setlist] = useState([])
  const [swiperlist, setswiper] = useState([])
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

  },[dispatch,showinglist,pathname,comminglist])


  return (

    <div>
      
      {/* Swiper */}
      {swiperlist.length >0 &&
        <Swiper autoplay loop>
          {swiperlist.map((item)=> 
            <Swiper.Item key={item.filmId}>
                <MidPoster url={item.poster}/>
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

const mapState = (state) =>({
  cityId: state.cityId,
  showinglist: state.showinglist,
  comminglist: state.comminglist
})

export default connect(mapState,{dispatch(r){return {type: 'showinglist', payload: r}}})
(Home)