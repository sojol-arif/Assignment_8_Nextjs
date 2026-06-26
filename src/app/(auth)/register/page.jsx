'use client'
import React from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import { authClient } from '@/lib/auth-client';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const [isShowPassword, setIsShowPassword] = useState(false);

    let handleRegisterFunc = async (data) => {
        console.log(data);
        const { email, name, photo, password } = data;
        console.log(name, photo);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: '/'
        });

        console.log(res, 'res', error);

        if (error) {
            alert(error.message);
        }
        if (res) {
            alert('Signup Successfull')
        }
    }

    console.log(errors);

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className='contianer_qurban section-space-xs min-h-[80vh] bg-secondary/5'>
            <div className='flex justify-center items-center'>
                <div className='p-10 rounded-xl bg-white shadow-xl max-w-[400px] w-full'>
                    <h2 className='font-bold text-3xl text-center'>Register your account</h2>
                    <form className='space-y-1' onSubmit={handleSubmit(handleRegisterFunc)}>
                        <fieldset className='fieldset'>
                            <legend className='fieldset-legend pb-[6px]'>What is you name?</legend>
                            <input type='text' className='input' placeholder='Type here name..' {...register("name", { required: "Name field is required" })} />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='fieldset-legend pb-[6px]'>Photo?</legend>
                            <input type='text' className='input' placeholder='Type here photo url..' {...register("photo", { required: "Photo field is required" })} />
                            {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='fieldset-legend pb-[6px]'>What is you email?</legend>
                            <input type='email' className='input' placeholder='Type here email..' {...register("email", { required: "Email field is required" })} />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='fieldset-legend pb-[6px]'>What is you password?</legend>
                            <div className='relative'>
                                <input type={isShowPassword ? 'text' : 'password'} className='input' placeholder='Type here password' {...register("password", { required: "Password field is required" })} />
                                <span className='absolute right-2 top-2 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                                    {!isShowPassword ?
                                        <FaEye className='text-[20px] w-[20px]' /> :
                                        <FaEyeSlash className='text-[20px] w-[20px]'></FaEyeSlash>
                                    }
                                </span>
                            </div>
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </fieldset>

                        <button className='btn bg-primary text-white w-full mt-1'>Register</button>
                    </form>
                    <p className='mt-4'>Already have an account? <Link href={'/login'} className='text-blue-500'>Login</Link></p>
                    <button className='btn bg-secondary text-white w-full mt-2' onClick={handleGoogleLogin}>Log in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;