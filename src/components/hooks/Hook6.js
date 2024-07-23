import React from 'react'
import { useState } from 'react'

export default function Hook6() {
    const [student, setStudent] = useState({name: "", age: 0})
  return (
    <div>
      <h1>Em tên là {student.name}, em năm nay {student.age} tuổi</h1>
      <form>
        <input value={student.name} onChange={(e) => setStudent({...student, name: e.target.value})} placeholder='Nhập tên' type="text" /><br />
        <input value={student.age} onChange={(e) => setStudent({...student, age: e.target.value})} placeholder='Nhập tuổi' type="number"/>
      </form>
    </div>
  )
}
