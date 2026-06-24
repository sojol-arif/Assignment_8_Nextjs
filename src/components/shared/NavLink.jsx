'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href, children, className}) => {
    const pathname = usePathname();

    const isActiveLink = href === pathname;

    return <Link href={href} className={`rounded-[0] p-0 ${isActiveLink? 'border-b border-blak-500': ""} ${className}`}>{children}</Link>
};

export default NavLink;