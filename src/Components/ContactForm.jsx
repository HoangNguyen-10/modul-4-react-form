import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './errMsg.css'

export default function ContactForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('yeu cau nhap ten'),
            email: Yup.string().required('Required').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'please enter an email address'),
            phone: Yup.string().required('Required')
        }),
        onSubmit: values => {
            alert('Add contact successfully!!!')
            console.log(values)
        }
    })

    console.log(formik.errors)


    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <h1>Contact form</h1>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id=""
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && (
                    <p className='errMsg'>{formik.errors.name}</p>
                )}
                <label htmlFor="">Email</label>
                <input type="text" name="email" id=""
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && (
                    <p className='errMsg'>{formik.errors.email}</p>
                )}
                <label htmlFor="">Phone</label>
                <input type="text" name="phone" id=""
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                {formik.errors.phone && (
                    <p className='errMsg'>{formik.errors.phone}</p>
                )}
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea><br />
                <button>submit</button>
            </form>
        </div>
    )
}
