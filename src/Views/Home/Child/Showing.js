import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Image from '../../Share/Image'




function Showing(props) {

  const {list} = props

  const imgRwd = {
    media: 'min-width: 768px',
    css: {width: '200px;',height: '220px;',margin: 'auto'},
    media2: 'min-width: 1000px',
    css2: {width: '200px;',height: '260px;',margin: 'auto'},
  }

  const click = (r)=>{
    props.history.push(`/detail/${r.filmId}`)
  }

  return (
    <div>
      
      {list.map(item=>
        <Box key={item.filmId} bg='white'>
          <div>
            <Image url={item.poster} w='100px' h='120px' media={imgRwd}
              click={()=>click(item)}/>
          </div>
          <Desc onClick={()=>click(item)}>
            <h5>{item.name}</h5>
            <h6>評分: {item.grade? item.grade: '尚未評分'}</h6>
            <p>{item.nation} | {item.runtime}分</p>
            <button>詳情</button>
          </Desc>
          <div>
            <Button>購買</Button>
          </div>
        </Box>
      )}

    </div>
  )
}

const Box = styled.div`
  width: 100%;
  background: rgba(240,240,240,0.4);
  padding: 10px 10px;
  margin: 5px auto;
  display: flex;
  align-items: center;
    > div{
      flex: 0.3;
        +div{
          flex: 0.55;
            +div{
              flex: 0.15;
            }
        }
    }
`
const Desc = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
    h5{
      width: 160px;
      font-size: 16px;
      overflow : hidden;
      text-overflow : ellipsis;
      white-space : nowrap;
      @media screen and (min-width: 768px) {
        width: 300px;
      }
    }
    h6{
      font-size: 14px;
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


export default withRouter(Showing)