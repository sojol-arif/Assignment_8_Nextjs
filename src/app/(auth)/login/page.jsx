'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import { authClient } from '@/lib/auth-client';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLogin = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: '/',
        });

        console.log(res, error);

        if (error) {
            alert(error.message);
        }
        if (res) {
            alert('Sign In Successfull')
        }
    }

    console.log(errors);

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        });
    }

    return (
        <div className='contianer_qurban section-space-xs min-h-[80vh] bg-secondary/5'>
            <div className='flex justify-center items-center'>
                <div className='p-10 rounded-xl bg-white shadow-xl max-w-[400px] w-full'>
                    <h2 className='font-bold text-3xl text-center'>Login your account</h2>
                    <form className='space-y-1' onSubmit={handleSubmit(handleLogin)}>
                        <fieldset className='fieldset'>
                            <legend className='fieldset-legend pb-[6px]'>What is you name?</legend>
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

                        <button className='btn bg-primary text-white w-full mt-1'>Login</button>
                    </form>
                    <p className='mt-4'>Don't have account? <Link href={'/register'} className='text-blue-500'>Register</Link></p>
                    <button className='btn bg-secondary text-white w-full mt-2' onClick={handleGoogleLogin}>Log in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;