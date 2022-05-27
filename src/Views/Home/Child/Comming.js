import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import UnEqualR3Card from '../../Share/UnEqualR3Card'




function Comming(props) {
  
  const {dispatch, comminglist} = props
  const [list,setlist] = useState([])


  useEffect(()=>{
    if(!comminglist.length >0){
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=855043',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651519839805538296233985","bc":"440300"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>dispatch(res.data.data.films))
    }else{
      setlist(comminglist)
    }
  },[comminglist,dispatch])


  const infoRender = r => (
    <Desc>
      <h5>{r.name}</h5>
      <h6>評分: {r.grade? r.grade: '尚未評分'}</h6>
      <p>{r.nation} | {r.runtime}分</p>
      <button>詳情</button>
    </Desc>
  )

  return (
    <div>
      
      {list.map(item=>
        <UnEqualR3Card key={item.filmId} 
          left={<Img url={item.poster}/>}
          mid={infoRender(item)}
          right={<Button>購買</Button>}
          click={()=>{props.history.push(`/detail/${item.filmId}`)}}
        />
      )}

    </div>
  )
}


const Img = styled.div`
  width: 100px;
  height: 120px;
  background-image: url(${props=>props.url});
  background-size: cover;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 220px;
    margin: auto;
  }
`
const Desc = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
    h5{
      font-size: 16px;
      overflow : hidden;
      text-overflow : ellipsis;
      white-space : nowrap;
      width: 160px;
    }
    button{
      margin-top: 15px;
      width: 50px;
    }
`
const Button = styled.button`
    padding: 3px 8px;
    border: 1px solid rgba(40,40,40,0.4);
    color: rgb(254,175,0);
    
`


const mapState = state => ({ 
  comminglist: state.comminglist
})

  
export default connect(mapState,{dispatch(r){return {type: 'comminglist', payload: r}}})
(Comming)