import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function ValidateFormDangKy() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required').matches(/^[a-zA-Z]{2,}$/, 'at least 2 characters'),
            email: Yup.string().required('required').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'please enter valid email'),
            password: Yup.string().required('required').matches(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/, 'at least 6 characters'),
            confirmPassword: Yup.string().required('required').oneOf([Yup.ref('password'), null], 'password must be matched')
        }),
        onSubmit: (value) => {
            alert('Add contact successfully!!!')
            console.log(value)
        }
    })

    console.log(formik.errors)
    return (
        <div>
            <h1>Sign up</h1>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="">Username</label>
                <input type="text" name="username" id=""
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {formik.errors.username && (
                    <p className='errMsg'>{formik.errors.username}</p>
                )}
                <label htmlFor="">Email</label>
                <input type="text" name="email" id=""
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && (
                    <p className='errMsg'>{formik.errors.email}</p>
                )}
                <label htmlFor="">Password</label>
                <input type="text" name="password" id=""
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && (
                    <p className='errMsg'>{formik.errors.password}</p>
                )}
                <label htmlFor="">Confirm password</label>
                <input type="text" name="confirmPassword" id=""
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword && (
                    <p className='errMsg'>{formik.errors.confirmPassword}</p>
                )}
                <button>submit</button>
            </form>
        </div>
    )
}
