'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { BiSolidBug } from "react-icons/bi";
import classnames from 'classnames'

const NavBar = () => {
    const currentPath = usePathname()

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/">
        <BiSolidBug />

        </Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <Link 
                key={link.href} 
                className={classnames({
                    'text-zinc-500': link.href === currentPath,
                    'text-zinc-300': link.href !== currentPath,
                    'hover:text-zinc-600 transition-colors': true
                })} 
                href={link.href}>{link.label}
            </Link>)}
        </ul>
    </nav>
  )
}

export default NavBar