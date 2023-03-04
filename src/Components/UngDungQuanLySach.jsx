import { useFormik } from 'formik'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import * as Yup from 'yup'

export default function Crud2() {
    const list = [
        {
            id: 1,
            title: 'book1',
            number: 5
        },
        {
            id: 2,
            title: 'book2',
            number: 3
        }
    ]

    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return (
        <div>
            <AddList setList={setList} />
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            lists.map((current) => (
                                updateState === current.id ? <EditList current={current} lists={lists} setList={setList} /> :
                                    <tr>
                                        <td>{current.title}</td>
                                        <td>{current.number}</td>
                                        <td>
                                            <button onClick={() => handleEdit(current.id)}>edit</button>
                                            <button onClick={() => handleDelete(current.id)}>delete</button>
                                        </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </form>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }

    function handleDelete(id) {
        const newlist = lists.filter(item => item.id !== id)
        setList(newlist)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const title = e.target.title.value
        const number = e.target.number.value
        const newlist = lists.map(li => (
            li.id === updateState ? { ...li, title: title, number: number } : li
        ))
        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({ current, lists, setList }) {
    const handleInputTitle = (e) => {
        const value = e.target.value
        const newlist = lists.map(li => (
            li.id === current.id ? { ...li, title: value } : li
        ))
        setList(newlist)
    }
    const handleInputNumber = (e) => {
        const value = e.target.value
        const newlist = lists.map(li => (
            li.id === current.id ? { ...li, number: value } : li
        ))
        setList(newlist)
    }
    return (
        <div>
            <tr>
                <td><input type="text" onChange={handleInputTitle} name='title' value={current.title} /></td>
                <td><input type="text" onChange={handleInputNumber} name='number' value={current.number} /></td>
                <td><button>update</button></td>
            </tr>


        </div>
    )
}

function AddList({ setList }) {
    const formik = useFormik({
        initialValues: {
            title: '',
            number: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('required'),
            number: Yup.string().required('required')
        }),
        onSubmit: value => {
            // console.log(value)
            alert('updated successfully!!')
        }

    })

    console.log(formik.errors)

    const titleRef = useRef()
    const numberRef = useRef()
    function handleSubmit(e) {
        e.preventDefault()
        const title = e.target.title.value
        const number = e.target.number.value
        const newlist = {
            id: 3,
            title,
            number
        }

        setList(prevList => {
            return prevList.concat(newlist)
        })

        titleRef.current.value = ''
        numberRef.current.value = ''
    }
    return (
        <form onSubmit={formik.handleSubmit} >
            <label htmlFor="">Tiêu đề</label>
            <input type="text" name="title" id="" ref={titleRef}
                onChange={formik.handleChange}
            />
            {formik.errors.title && (
                <p className='errMsg'>{formik.errors.title}</p>
            )}
            <label htmlFor="">Số lượng</label>
            <input type="text" name="number" id="" ref={numberRef}
                onChange={formik.handleChange}
            />
            {formik.errors.number && (
                <p className='errMsg'>{formik.errors.number}</p>
            )}
            <button>Submit</button>
        </form>
    )
}
