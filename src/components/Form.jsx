'use client'
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import useUserStore from '@/store/UserStore'

const Form = () => {

    const addUser = useUserStore((state) => state.addUser)


    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        addUser({
            id: Math.ceil(Math.random() * 1000000),
            userInfo: data
        })
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[93%] md:w-[65%] p-6  my-6 shadow-xl   mx-auto rounded-lg'>
                <div className='flex flex-col md:flex-row justify-between gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" {...register("name", { required: true })} placeholder="Enter User Name" className="bg-[#E8F0FE] input w-full  " />
                        {errors.name?.type === 'required' && <p role="alert" className='text-red-700 mt-1'>Name is required</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email"
                            {...register("email",
                                {
                                    required: true,
                                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                                }
                            )}
                            placeholder="Enter User Email" className="bg-[#E8F0FE] input w-full  " />
                        {errors.email?.type === 'required' && <p role="alert" className='text-red-700 mt-1'>Email is required</p>}
                        {errors.email?.type === 'pattern' && <p className="text-red-700 mt-1"> Please enter a valid email.</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input name="age"
                         {...register("age", 
                         {
                            required: true,
                            pattern:/^(0|[1-9]\d*)(\.\d+)?$/
                          }
                         )}
                          placeholder="Enter User Age" className="bg-[#E8F0FE] input w-full  " />
                        {errors.age?.type === 'required' && <p role="alert" className='text-red-700 mt-1'>Age is required</p>}
                        {errors.age?.type === 'pattern' && <p className="text-red-700 mt-1"> Please enter a valid Number</p>}
                    </div>
                </div>

                <div className='mt-4 flex justify-end '>
                    <button className='my_button ' type="submit" variant="dark">Add</button>
                </div>

            </form>
        </>
    )
}

export default Form