'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from '@/components/shared/NavLink';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  console.log(session?.user, 'session user');
  const userM = session?.user;

  return (
    <div className='shadow-sm sticky top-0 bg-base-100 z-99'>
      <div className="navbar container_qurban py-2 px-5 md:px-10 ">
        <div className="navbar-start">
          <Link href={'/'} className='heading-font font-black text-[24px]'>QurbaniHat</Link>
          <ul className="menu menu-horizontal px-1 ml-6 items-center flex flex-row gap-4">
            <li>
              <NavLink href={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink href={'/animal'}>All Animal</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 flex flex-row items-center gap-4">
            {isPending? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : userM ?
              (
                <>
                  <li className='flex gap-1 flex-wrap items-center flex-row'>
                    <span>{userM?.name}</span>
                    <NavLink href={'/myprofile'} className="hover:bg-transparent">
                      <Image
                      src={userM?.image}
                      alt={userM?.name}
                      width={40}
                      height={40}
                      className='rounded-full'
                      />
                    </NavLink>
                  </li>
                  <li>
                    <button  className='btn bg-primary rounded-[50px] px-4 py-1 text-primary-content' onClick={async ()=>await authClient.signOut()}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink href={'/login'}>Login</NavLink>
                  </li>
                  <li>
                    <NavLink href={'/register'} className={'btn bg-primary rounded-[50px] px-5 text-primary-content'}>Register</NavLink>
                  </li>
                </>
              )}
          </ul>
        </div>
      </div>
    </div>

  )
};

export default Navbar;