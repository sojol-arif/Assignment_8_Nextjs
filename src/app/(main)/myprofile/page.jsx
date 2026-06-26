'use client'
import React from 'react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function ProfilePage() {
    // Sample profile data matching Screenshot_1.png

    const { data: session, isPending } = authClient.useSession();
    console.log(session?.user, 'session user from my profile page');
    const userM = session?.user;

    return (
        <div className="min-h-screen bg-gray-50">
            {userM ?
                <div className='flex flex-col justify-center items-center'>
                    {/* 1. Header Banner - Deep Forest Green */}
                    <div className="bg-[#023E23] text-white pt-12 pb-24 px-6 md:px-12 lg:px-24 w-full">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">

                            {/* Avatar Container with Verification Badge */}
                            <div className="relative">
                                <div className="w-36 h-36 rounded-full border-4 border-[#c1c8c2] overflow-hidden shadow-lg relative bg-gray-200">
                                    <Image
                                        src={userM?.image}
                                        alt={userM?.name}
                                        fill
                                        priority
                                        className="object-cover"
                                        unoptimized // Used for external unsplash placeholder links

                                    />
                                </div>
                                {/* Golden verification badge */}
                                <div className="absolute bottom-2 right-1 bg-[#E1B16A] text-[#023E23] p-1.5 rounded-full border-2 border-[#c1c8c2] shadow-[0px_4px_20px_rgba(27,67,50,0.06)] flex items-center justify-center">
                                    {/* <ShieldCheck className="w-4 h-4 fill-current" /> */}
                                </div>
                            </div>

                            {/* User Information */}
                            <div className="flex-1 space-y-3">
                                <h1 className="text-4xl font-serif font-semibold tracking-wide">
                                    {userM?.name}
                                </h1>
                                <p className="text-emerald-100 opacity-90 text-md tracking-medium">
                                    {userM?.email}
                                </p>

                                {/* Update Profile Button */}
                                <Link href={'/updateprofile'} className="inline-flex items-center gap-2 bg-[#8B4513] hover:bg-[#72380f] text-white px-5 py-2.5 rounded-md font-medium text-sm transition shadow-[0px_4px_20px_rgba(27,67,50,0.06)] mt-1">
                                    {/* <Pencil className="w-4 h-4" /> */}
                                    Update Profile
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* 2. Overlapping Account Details Card */}
                    <div className="max-w-3xl mx-auto px-4 pt-15 pb-15">
                        <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(27,67,50,0.06)] border border-[#c1c8c2] overflow-hidden">

                            {/* Card Header */}
                            <div className="flex justify-between items-center px-6 py-5 border-b border-[#c1c8c2]">
                                <h2 className="text-2xl font-serif font-bold text-[#023E23]">
                                    Account Details
                                </h2>
                                {/* <UserCheck className="w-5 h-5 text-gray-700" /> */}
                            </div>

                            {/* Details Rows */}
                            <div className="divide-y divide-gray-100 px-6">

                                {/* Full Name Row */}
                                <div className="py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                    <span className="text-xs font-bold tracking-wider  uppercase">
                                        Full Name
                                    </span>
                                    <span className="text-gray-900 font-mediumtext-[14px]">
                                        {userM?.name}
                                    </span>
                                </div>

                                {/* Email Address Row */}
                                <div className="py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                    <span className="text-xs font-bold tracking-wider  uppercase">
                                        Email Address
                                    </span>
                                    <span className="text-gray-900 font-medium text-[14px]">
                                        {userM?.email}
                                    </span>
                                </div>

                                {/* Image Url Row */}
                                <div className="py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                    <span className="text-xs font-bold tracking-wider  uppercase">
                                        Image Url
                                    </span>
                                    <span className="text-gray-900 font-medium text-[14px]">
                                        {userM?.image}
                                    </span>
                                </div>

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