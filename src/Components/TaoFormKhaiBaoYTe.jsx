import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function TaoFormKhaiBaoYTe() {
    const formik = useFormik({
        initialValues: {
            name: '',
            identify: '',
            birth: '',
            nationality: '',
            province: '',
            district: '',
            ward: '',
            address: '',
            phonenumber: '',
            email: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('required'),
            identify: Yup.string().required('required'),
            birth: Yup.string().required('required'),
            nationality: Yup.string().required('required'),
            province: Yup.string().required('required'),
            district: Yup.string().required('required'),
            ward: Yup.string().required('required'),
            address: Yup.string().required('required'),
            phonenumber: Yup.string().required('required'),
            email: Yup.string().required('required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, 'Invalid email address'),
        }),
        onSubmit: values => {
            console.log(values)
            alert('send successfully!')
        }
    })
    console.log(formik.errors)
    return (
        <div>
            <h1>Tờ khai y tế</h1>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="">Họ tên</label>
                <input type="text" name="name" id=""
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name && (
                    <p className='errMsg'>{formik.errors.name}</p>
                )}
                <label htmlFor="">Số hộ chiếu</label>
                <input type="text" name="identify" id=""
                    onChange={formik.handleChange}
                    value={formik.values.identify}
                />
                {formik.errors.identify && (
                    <p className='errMsg'>{formik.errors.identify}</p>
                )}
                <label htmlFor="">Năm sinh</label>
                <input type="text" name="birth" id=""
                    onChange={formik.handleChange}
                    value={formik.values.birth}
                />
                {formik.errors.birth && (
                    <p className='errMsg'>{formik.errors.birth}</p>
                )}
                <br />
                <span>Giới tính: </span>
                <input type="radio" name="gender" id="" /> Nam
                <input type="radio" name="gender" id="" /> Nu
                <label htmlFor="">Quốc tịch</label>
                <input type="text" name="nationality" id=""
                    onChange={formik.handleChange}
                    value={formik.values.nationality}
                />
                {formik.errors.nationality && (
                    <p className='errMsg'>{formik.errors.nationality}</p>
                )}
                <label htmlFor="">Công ty làm việc</label>
                <input type="text" name="workingplace" id="" />
                <label htmlFor="">Bộ phận làm việc</label>
                <input type="text" name="wrokingpart" id="" /><br />
                <span>Có thẻ bảo hiểm y tế </span>
                <input type="checkbox" name="" id="" /><br /><br />
                <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                <label htmlFor="">Tỉnh thành</label>
                <input type="text" name="province" id=""
                    onChange={formik.handleChange}
                    value={formik.values.province}
                />
                {formik.errors.province && (
                    <p className='errMsg'>{formik.errors.province}</p>
                )}
                <label htmlFor="">Quận huyện</label>
                <input type="text" name="district" id=""
                    onChange={formik.handleChange}
                    value={formik.values.district}
                />
                {formik.errors.district && (
                    <p className='errMsg'>{formik.errors.district}</p>
                )}
                <label htmlFor="">Phường, xã</label>
                <input type="text" name="ward" id=""
                    onChange={formik.handleChange}
                    value={formik.values.ward}
                />
                {formik.errors.ward && (
                    <p className='errMsg'>{formik.errors.ward}</p>
                )}
                <label htmlFor="">Số nhà</label>
                <input type="text" name="address" id=""
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />
                {formik.errors.address && (
                    <p className='errMsg'>{formik.errors.address}</p>
                )}
                <label htmlFor="">Điện thoại</label>
                <input type="text" name="phonenumber" id=""
                    onChange={formik.handleChange}
                    value={formik.values.phonenumber}
                />
                {formik.errors.phonenumber && (
                    <p className='errMsg'>{formik.errors.phonenumber}</p>
                )}
                <label htmlFor="">Email</label>
                <input type="text" name="email" id=""
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && (
                    <p className='errMsg'>{formik.errors.email}</p>
                )}
                <h4>Trong vòng 14 ngày qua, Anh/chị có đến quốc gia nào?</h4>
                <textarea name="" id="" cols="30" rows="3"></textarea>
                <h4>Trong vòng 14 ngày qua, Anh/chị có thấy dấu hiệu nào sau?</h4>
                <input type="checkbox" name="" id="" /> Sốt <br />
                <input type="checkbox" name="" id="" /> Ho <br />
                <input type="checkbox" name="" id="" /> Khó thở <br />
                <input type="checkbox" name="" id="" /> Viêm phổi <br />
                <input type="checkbox" name="" id="" /> Đau họng <br />
                <input type="checkbox" name="" id="" /> Mệt mỏi

                <h4>Trong vòng 14 ngày qua, Anh/chị có tiếp xúc với?</h4>
                <input type="checkbox" name="" id="" />
                Người bệnh hoặc nghi ngờ mắc covid-19<br />
                <input type="checkbox" name="" id="" />
                Người từ nước có mắc covid-19<br />
                <input type="checkbox" name="" id="" />
                Người có biểu hiện sốt,ho,khó thở,..<br />
                <button>submit</button>
            </form>
        </div>
    )
}
