import React from 'react'

export default function Button(props) {
  return (
    <button 
      onClick={props.click} 
      style={{padding:'10px', borderRadius: '5px', color: props.color || 'mistyrose', backgroundColor: 'black'}}
      >
      {props.title}
    </button>
  )
}
