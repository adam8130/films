import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Divider, Image } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { connect } from 'react-redux'
import styled from 'styled-components'




function Detail(props) {

    const {id} = props.match.params
    const {dispatch} = props
    const [list,setlist] = useState({})
    const [actorslist, setactors] = useState([])
    const [photoslist, setphotos] = useState([])

    useEffect(()=>{
        axios({
            url: `https://m.maizuo.com/gateway?filmId=${id}&k=4604148`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651519839805538296233985","bc":"440300"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            setlist(res.data.data.film)
            setactors(res.data.data.film.actors)
            setphotos(res.data.data.film.photos)
        })

        dispatch(false)
        return ()=>dispatch(true)

    },[id,dispatch])


    const backIcon = ()=>{        
        
        const css = {
            div: {
                width:'40px',height:'40px',background:'rgba(40,40,40,0.5)',
                borderRadius:'50%',position:'fixed',top: '5px'
            },
            icon: {
                fontSize:'30px',color:'white',margin:'5px 0 0 2px'
            }
        }

        return (
            <div style={css.div}>
                <LeftOutline style={css.icon} onClick={()=>
                    props.history.goBack()}/>
            </div>
        )
    }


  return (
    <div>
        {/* backIcon */}
        {backIcon()}

        {/* banner */}
        <Image src={list.poster} height={250} fit='cover'/>
        <h2>{list.name}</h2>
        <h4>{list.category}</h4>
        <p>{list.nation} | {list.runtime}分</p>
        <Divider style={{borderColor: 'gray'}}><h4>劇情簡介</h4></Divider>
        <p>{list.synopsis}</p>

        {/* actorslist */}
        <ImgBox>
            {actorslist.map((item,i)=>
                <ImgItem key={i}>
                    <Image src={item.avatarAddress} width={100}/>
                    <h4>{item.name}</h4>
                    <p>角色: {item.role}</p>
                </ImgItem>    
            )}
        </ImgBox>

        {/* photoslist */}
        <Divider style={{borderColor: 'gray'}}><h4>劇照</h4></Divider>
        <ImgBox>
            {photoslist.map((item,i)=>
                <ImgItem key={i}>
                    <Image src={item} height={300} width={400} fit='cover'/>
                </ImgItem>    
            )}
        </ImgBox>
    </div>
  )
}


const ImgBox = styled.div`
    width: 100vw;
    margin: 10px 0;
    background: rgb(240,240,240);
    overflow-x: auto;
    display: -webkit-box;
    -webkit-overflow-scrolling:touch;
        &::-webkit-scrollbar{
            display: none;
        }
`
const ImgItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const mapState = (state)=>(
    {TabbarIsTrue: state.TabbarIsTrue}
)
const mapDispatch = {
    dispatch(r){return {type:'TabbarIsTrue',value:r}}
}

export default connect(mapState,mapDispatch)(Detail)