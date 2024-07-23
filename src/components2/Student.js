import React from 'react'
import { ListGroupItem, Input, Button } from "reactstrap"
import './styles.css'

export default function Student(props) {
    const { student, deleteById, reCheck } = props

    return (
        <div>
            <ListGroupItem className={student.checked ? "bg-dark fw-lighter text-white opacity-75 student-item d-flex justify-content-between align-items-center bg-light" :
            "student-item d-flex justify-content-between align-items-center"}>
                <div className='d-flex justify-content-start w-75'>
                    <Input type="checkbox" checked={student.checked}
                        onChange={() => reCheck(student.id)}
                    />
                    <p className={student.checked ? 'text-decoration-line-through m-0 mx-3 px-3' : 'm-0 mx-3 px-3'}
                        onClick={() => reCheck(student.id)}>
                        {student.name}
                    </p>
                </div>
                <Button color="light" onClick={() => deleteById(student.id)}>X</Button>
            </ListGroupItem>
        </div>
    )
}
