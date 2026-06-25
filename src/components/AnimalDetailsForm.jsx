"use client"

import React from 'react';
import Link from 'next/link';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useForm, SubmitHandler } from "react-hook-form"
import { toast, ToastContainer } from 'react-toastify';

const AnimalDetailsForm = () => {
    {/* From React Hook Form */ }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegisterFunc = () => {
        // Handle your API booking submissions here
        toast("Your Animal is Booked!");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleRegisterFunc)}>
                <div className='flex flex-col gap-2'>
                    {/* Full Name */}
                    <div className="form-control w-full">
                        <label className="label pt-0 pb-2">
                            <span className="text-[12px] text-white/80">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all outline-none"
                            {...register("name", { required: "Name field is required" })}
                        />
                        {errors.name && <p className='text-red-500 text-[12px] mt-1'>{errors.name.message}</p>}
                    </div>

                    {/* Email Address */}
                    <div className="form-control w-full">
                        <label className="label pt-0 pb-2">
                            <span className="text-[12px] text-white/80">Email Address</span>
                        </label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all outline-none"
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p className='text-red-500 text-[12px] mt-1'>{errors.email.message}</p>}
                    </div>

                    {/* Phone & Date Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone */}
                        <div className="form-control w-full">
                            <label className="label pt-0 pb-2">
                                <span className="text-[12px] text-white/80">Phone</span>
                            </label>
                            <input
                                type="text"
                                placeholder="+880..."
                                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all outline-none"
                                {...register("phone", { required: "Phone field is required" })}
                            />
                            {errors.phone && <p className='text-red-500 text-[12px] mt-1'>{errors.phone.message}</p>}
                        </div>

                        {/* Preferred Date */}
                        <div className="form-control w-full">
                            <label className="label pt-0 pb-2">
                                <span className="text-[12px] text-white/80">Preferred Date</span>
                            </label>
                            <input
                                type="date"
                                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all outline-none"
                                {...register("date", { required: "Date field is required" })}
                            />
                            {errors.date && <p className='text-red-500 text-[12px] mt-1'>{errors.date.message}</p>}
                        </div>
                    </div>

                    {/* Login Notice Box */}
                    <div className="flex items-start gap-3 bg-[#032419] border border-emerald-950 p-4 rounded-xl text-[12px] leading-relaxed text-gray-300">
                        <AiOutlineInfoCircle className="text-orange-400 text-xl shrink-0 mt-0.5" />
                        <p>
                            Please{' '}
                            <Link href="/login" className="text-orange-400 underline hover:text-orange-300 font-medium">
                                login
                            </Link>{' '}
                            to book this animal and access priority scheduling.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="btn w-full bg-[#964B24] hover:bg-[#823f1d] border-none text-white font-semibold tracking-wide text-[16px] h-12 rounded-xl normal-case shadow-md"
                        >
                            Place Booking Request
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AnimalDetailsForm;