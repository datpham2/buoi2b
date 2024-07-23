import React from 'react'
import { Button } from 'reactstrap'

export default function Footer(props) {
    const {setFlag} = props
  return (
    <div className='my3 pt-6'>
        <Button className='btn-success mx-1' onClick={() => {
            setFlag("check")
            console.log('check')
        }}>filter check</Button>
        <Button className='btn-success mx-1' onClick={() => setFlag("no check")}>filter no check</Button>
        <Button className='btn-success mx-1' onClick={() => setFlag("clear filter")}>clear filter</Button>
        <Button className='btn-success mx-1' onClick={() => setFlag("delete all")}>delete all</Button>
    </div>
  )
}
