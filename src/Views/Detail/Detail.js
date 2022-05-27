import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Divider } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import Image from '../Share/Image'
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
                width:'35px',height:'35px',background:'rgba(40,40,40,0.5)',
                borderRadius:'50%',position:'fixed',top: '5px', left:'5px'
            },
            icon: {
                fontSize:'25px',color:'white',margin:'5px 0 0 2px'
            }
        }
        return (
            <div style={css.div}>
                <LeftOutline style={css.icon} onClick={()=>
                    props.history.goBack()}/>
            </div>
        )
    }

    // scss RWD
    
    const bannerRwd = {
        media: 'min-width: 768px',
        css: {
            width: '40vw;',
            height: '70vh;',
            margin: 'auto;'
        }
    }

    const actorRwd = {
        media: 'min-width: 768px',
        css: {
            width: '300px;',
            height: '350px;',
            margin: '20px auto;'
        }
    }

    const photoRwd = {
        media: 'min-width: 768px',
        css: {
            width: '600px;',
            height: '500px;',
            margin: '10px;',
        }
    }


  return (
    <div>
        {/* backIcon */}
        {backIcon()}

        {/* banner */}
        <Image url={list.poster} h='300px' mb='10px' media={bannerRwd}/>
        <h2>{list.name}</h2>
        <h4>{list.category}</h4>
        <p>{list.nation} | {list.runtime}分</p>
        <Divider style={{borderColor: 'gray'}}><h4>劇情簡介</h4></Divider>
        <p>{list.synopsis}</p>

        {/* actorslist */}
        <ImgBox>
            {actorslist.map((item,i)=>
                <ImgItem key={i}>
                    <Image url={item.avatarAddress} w='100px' h='120px' 
                    media={actorRwd}/>
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
                    <Image url={item} h='280px' w='400px' mt='10px' 
                    media={photoRwd}/>
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
    display: flex;
        &::-webkit-scrollbar-thumb{
            background: rgba(40,40,40,0.3);
        }
        &::-webkit-scrollbar{
            background: rgba(240,240,240);
        }
    @media screen and ( max-width: 768px){
        display: -webkit-box;
        -webkit-overflow-scrolling:touch;
            &::-webkit-scrollbar{
                display: none;
            }
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