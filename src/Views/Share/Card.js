import React from 'react'



export default function Card(props) {

    const css = {
        card: {
            width: '100%',
            height: '80px',
            margin: props.margin? props.margin: '40px auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        },
        cardItem: {
            width: '90%',
            background: 'rgb(240,240,240)',
            padding: '30px',
            fontSize: '18px',
            letterSpacing: '2px',
        }
    }

  return (

    <div style={css.card}>
        <h6 style={css.cardItem}>{props.children}</h6>
    </div>
  )
}
