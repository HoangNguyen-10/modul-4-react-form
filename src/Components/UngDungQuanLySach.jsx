import React, { useState } from 'react'
import { booklist } from './booklist'
export default function UngDungQuanLySach() {
    const [booklists, setBooklist] = useState(booklist)
    const [user, setUser] = useState({
        id: '',
        title: '',
        number: ''
    })

    const [isEditing, setIsEditing] = useState(false)

    const handleChange = e => {
        const userCopy = { ...user }
        userCopy[e.target.name] = e.target.value
        setUser(userCopy)
        // console.log(user)
    }

    const handleAdd = () => {
        const newlist = [...booklists]
        newlist.push(user)
        setBooklist(newlist)
        setUser({ id: '', title: '', number: '' })

    }

    const handleDelete = item => {
        const booklistCopy = [...booklists]
        const newlist = booklistCopy.filter(data => data.id !== item.id)
        setBooklist(newlist)
    }

    const handleEdit = item => {
        setUser(item)
        setIsEditing(true)
    }

    const handleUpdate = () => {
        const booklistCopy = [...booklists]
        const newlist = booklistCopy.map(item => {
            if (item.id === user.id) {
                return { ...item, id: user.id, title: user.title, number: user.number }
            }
            return item
        })
        setBooklist(newlist)
        setUser({ id: '', title: '', number: '' })
        setIsEditing(false)
    }


    const handleCancel = () => {
        setIsEditing(false)
    }




    return (
        <div>
            <div className="input-field">
                <h1>Library</h1>
                <label htmlFor="">ID</label>
                <input type="text" name="id" id="" value={user.id} onChange={e => handleChange(e)} />
                <label htmlFor="">Tiêu đề</label>
                <input type="text" name="title" id="" value={user.title} onChange={e => handleChange(e)} />
                <label htmlFor="">Số lượng</label>
                <input type="text" name="number" id="" value={user.number} onChange={e => handleChange(e)} /><br />
                {isEditing ? <><button onClick={handleUpdate}>Update</button><button onClick={handleCancel}>Cancel</button></> : <button onClick={handleAdd}>Submit</button>}

            </div>

            <div className="table-field">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>NUMBER</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booklists.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.number}</td>
                                <td>
                                    <button onClick={() => handleEdit(item)}>edit</button>
                                    <button onClick={() => handleDelete(item)}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

