import React, { useState } from 'react'
import { Button, Popup, SearchBar } from 'antd-mobile'
import { MoreOutline } from 'antd-mobile-icons'
import { withRouter } from 'react-router-dom'



function PopupApp(props) {

    const [sidebar, setSidebar] = useState(false)


    const jumpTo = (r) =>{
        props.history.push(r)
    }

  return (
    <div>
        <MoreOutline fontSize={44} color='gray' onClick={()=>setSidebar(true)}
            />

        <Popup position='left' bodyStyle={{ width: '60vw' }} visible={sidebar}
            onMaskClick={()=>setSidebar(false)}>

            <div style={{display:'flex',flexDirection:'column'}}>

                <SearchBar placeholder='Search...' 
                    style={{background:'rgb(240,240,240)',height:'40px'}}/>

                <Button size='large' onClick={()=>jumpTo('/home')}>Home</Button>
                <Button size='large' onClick={()=>jumpTo('/mall')}>購物商城</Button>
                <Button size='large' onClick={()=>jumpTo('/about')}>關於我們</Button>
                
                
            </div>

        </Popup>    
    </div>
  )
}


export default withRouter(PopupApp)