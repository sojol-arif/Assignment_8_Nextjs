'use client'
import React from 'react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';

export default function ProfilePage() {
    // Sample profile data matching Screenshot_1.png

    const { data: session, isPending } = authClient.useSession();
    console.log(session?.user, 'session user from my profile page');
    const userM = session?.user;

    /* REact Hokk Authentication */
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleUpdateUser = async (formData) => {
        try {
            console.log(formData, 'data from update User');
            await authClient.updateUser({
                image: formData.image,
                name: formData.name,
            })
        } catch (error) {
            console.error('Failed to update user profile:', error);
            alert('Something went wrong. Please try again.');
        }
    }




    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {userM ?
                <div>
                    <div className="bg-[#023E23] text-white pt-12 pb-12 px-6 md:px-12 lg:px-24 w-full">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            {/* User Information */}
                            <div className="flex-1 space-y-3">
                                <h1 className="text-5xl font-serif font-semibold tracking-wide">
                                    Update Profile
                                </h1>

                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center items-center p-4 my-10">
                        <div className="w-full max-w-2xl bg-white border border-[#c1c8c2] rounded-2xl shadow-[0px_4px_20px_rgba(27,67,50,0.06)] p-8 md:p-10">

                            {/* Header Section */}
                            <div className="mb-8">
                                <p className=" text-sm md:text-base">
                                    Modify your personal details below. These changes will be reflected across your account.
                                </p>
                            </div>

                            {/* Form Section */}
                            <form className="space-y-6" onSubmit={handleSubmit(handleUpdateUser)}>

                                {/* Full Name Input */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fullName" className="text-gray-700 font-medium text-sm md:text-base">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        defaultValue={userM?.name}
                                        className="w-full px-4 py-3 bg-[#F4F4F4] text-gray-800 border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-gray-300 transition-colors text-base"
                                        placeholder="Enter your full name"
                                        required
                                        {...register("name", { required: "Name field is required" })}
                                    />
                                </div>

                                {/* Photo URL Input */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="photoUrl" className="text-gray-700 font-medium text-sm md:text-base">
                                        Photo URL
                                    </label>
                                    <input
                                        type="url"
                                        id="photoUrl"
                                        name="photoUrl"
                                        defaultValue={userM?.image}
                                        className="w-full px-4 py-3 bg-[#F4F4F4] text-gray-800 border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-gray-300 transition-colors text-base"
                                        placeholder="https://example.com/image.jpg"
                                        required
                                        {...register("image", { required: "photoUrl field is required" })}
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-[#022c1c] hover:bg-[#033a25] text-white font-medium py-4 px-6 rounded-xl shadow-[0px_4px_20px_rgba(27,67,50,0.06)] active:scale-[0.99] transition-all duration-150 mt-8"
                                >
                                    <span>Update Information</span>
                                    {/* Minimalist Floppy Disk / Save Icon */}
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                                        ></path>
                                    </svg>
                                </button>
                            </form>

                            <hr className="my-6 border-[#c1c8c2]" />

                            {/* Footer Security Note */}
                            <div className="flex items-center justify-center gap-2 text-xs md:text-sm ">
                                {/* Shield Icon */}
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    ></path>
                                </svg>
                                <span>Your data is encrypted and handled according to our privacy policy.</span>
                            </div>

                        </div>
                    </div>
                </div>
                :
                <div className='flex h-[84vh] items-center justify-center'>
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
            }
        </div>
    );
}