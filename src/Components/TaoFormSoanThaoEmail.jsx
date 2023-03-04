import { useFormik } from 'formik'
import React from 'react'
import './form_soan_thao.css'
import * as Yup from 'yup'
export default function TaoFormSoanThaoEmail() {
    const formik = useFormik({
        initialValues: {
            email: '',
            title: '',
            message: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('required').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid email address'),
            title: Yup.string().required('required'),
            message: Yup.string().required('required')
        }),
        onSubmit: values => {
            alert('Send successfully!')
        }
    })
    console.log(formik.errors)
    return (
        <div>
            <h1>Mail form</h1>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="">To</label>
                <input type="text" name="email" id=""
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && (
                    <p className='errMsg'>{formik.errors.email}</p>
                )}
                <label htmlFor="">Title</label>
                <input type="text" name="title" id=""
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.errors.title && (
                    <p className='errMsg'>{formik.errors.title}</p>
                )}
                <label htmlFor="">Message</label>
                <textarea name="message" id="" cols="30" rows="10"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                ></textarea>
                {formik.errors.message && (
                    <p className='errMsg'>{formik.errors.message}</p>
                )}
                <br />
                <input type="file" name="" id="" />
                <br /><br />
                <button>submit</button>
            </form>
        </div>
    )
}
