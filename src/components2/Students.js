import React, { useState } from 'react'
import { Container, ListGroup } from 'reactstrap'
import Add from './Add'
import Student from './Student'
import Footer from './Footer'

export default function Students() {
    const [list, setList] = useState([
        {
            id: 1,
            name: "Lê Mèo",
            checked: true
        },
        {
            id: 2,
            name: "Lê Thỏ",
            checked: true
        },
        {
            id: 3,
            name: "Lê Nai",
            checked: false
        },
        {
            id: 4,
            name: "Lê Hổ",
            checked: false
        }
    ])

    const [flag, setFlag] = useState("")

    const deleteById = (id) => {
        setList(list.filter(stu => stu.id !== id))
    }

    const reCheck = (id) => {
        setList(list.map(stud => stud.id === id ? { ...stud, checked: !stud.checked } : stud))
    };

    const addANewStudent = (name) => {
        setList([...list, { id: 5, name: name, checked: false }])
    }

    const filterStudents = (flag) => {
        if (flag === "check") {
            return list.filter(student => student.checked)
        }
        else if (flag === "no check") {
            return list.filter(student => !student.checked)
        }
        else if (flag === "delete all") {
            setFlag(""); // Reset the flag state to an empty string
            setList(list.map(student => ({
                ...student, checked: false
            })));
            return [];
        }
        else {
            return list
        }
    }
    return (
        <div>
            <Container className='w-50'>
                <h1 className='pt-5 pb-3 text-center'>Student list</h1>
                <Add addANewStudent={addANewStudent} />
                <ListGroup>
                    {
                        filterStudents(flag).map((stud, index) => (
                            index % 2 === 0 ?
                                <Student addANewStudent={addANewStudent} deleteById={deleteById} key={index} reCheck={reCheck} student={stud} />
                                :
                                <Student addANewStudent={addANewStudent} deleteById={deleteById} key={index} reCheck={reCheck} student={stud} />
                        ))
                    }
                </ListGroup>
                <br />
                <Footer setFlag={setFlag} />
            </Container>
        </div>
    )
}
