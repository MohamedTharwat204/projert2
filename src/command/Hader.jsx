import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"

export default function Hader() {
    //   const navigate = useNavigate();
    const value = (values) => {
        console.log(values)
        // `${window.location.origin}/Shop`
      window.open('/Shop', '_blank');
    
        
        // newWindow.document.close()
    }
    const schema = Yup.object(
        {
            uesrName: Yup.string().required().min(4),
            uesrEmail: Yup.string().required().email(),
            uesrPassword: Yup.string().required().min(6),
        }
    )




    return (
        <div>
           
            <header className='flex bg-emerald-900 justify-between p-5 shadow text-black '>
                <h1 className='text-3xl'>Loge Mo</h1>

            </header>
            <div className='w-full h-dvh bg-blue-900 flex items-center justify-center'>
                <div className='w-1/4 h-auto bg-blue-300 shadow shadow-black rounded-2xl'>
                    <Formik validationSchema={schema} onSubmit={value} initialValues={{ uesrName: '', uesrEmail: '', uesrPassword: '' }}>
                        <Form className=' flex flex-col  items-center  gap-5 pb-4'>
                            <h1 className='text-black  font-bold fill-stone-800 text-3xl pt-2'>Walcam user</h1>
                            <Field name="uesrName" type="text" className='input' placeholder='Enter is Name' required ></Field>
                            <ErrorMessage component={'p'} name='uesrName' className=' text-cyan-700' ></ErrorMessage>

                            <Field name="uesrEmail" type="email" className='input' placeholder='Enter is Email' required ></Field>
                            <ErrorMessage component={'p'} name='uesrEmail' className=' text-cyan-700' ></ErrorMessage>

                            <Field name="uesrPassword" type="password" className='input' placeholder='Enter is password' required ></Field>
                            <ErrorMessage component={'p'} name='uesrPassword' className=' text-cyan-700' ></ErrorMessage>
                            <button type="submit" className='btn btn-primary'>Logn in</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

