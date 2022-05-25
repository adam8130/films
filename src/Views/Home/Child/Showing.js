import React from 'react'
import styled from 'styled-components'
import UnEqualR3Card from '../../Share/UnEqualR3Card'




export default function Showing(props) {

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
      
      {props.list.map(item=>
        <UnEqualR3Card key={item.filmId} 
          left={<Img url={item.poster}/>}
          mid={infoRender(item)}
          right={<Button>購買</Button>}
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
`
const Desc = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
    h5{
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
