import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import './errMsg.css'
export default function ValidateFormLogin() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('required').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'please enter valid email'),
            password: Yup.string().required('required').matches(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/, 'at least 6 characters')

        }),
        onSubmit: ((value) => {
            console.log(value)
            alert('Login successfully!!!')
        })
    })
    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="">Email</label>
                <input type="text" name="email" id="" onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && (
                    <p className='errMsg'>{formik.errors.email}</p>
                )}
                <label htmlFor="">Password</label>
                <input type="text" name="password" id="" onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && (
                    <p className='errMsg'>{formik.errors.password}</p>
                )}
                <button>submit</button>
            </form>
        </div>
    )
}
