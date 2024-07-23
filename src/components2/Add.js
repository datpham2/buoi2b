import React, { useState } from 'react'
import { Input } from 'reactstrap'

export default function Add(props) {
    const {addANewStudent} = props
    const [name, setName] = useState("")
  return (
    <div>
        <Input autoComplete="off" autoFocus type="text" onChange={(e) => setName(e.target.value)} onKeyDown={(e) =>{
            if (e.key === "Enter") {
                addANewStudent(name);
                setName("")
            }
        }} value={name} /><br />
    </div>
  )
}
