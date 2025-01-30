"use client"
import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

// yahan hum import kar rahay hain lib folder say constants ko
// is constants file main ap samjho jesay react icon say icon import kartay thay wesay hi is constants file
// main hum ny icon import kiye hain phir us file ko is component yeni leftsidebar file main import kar k
// map function ki madad say is component main render kar k screen per show karwadiya line 19 say 21 dekho
//map function hai aur ab humain screen per icon show hon gy left side per 


import { navLinks } from '@/lib/constants'


const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <div className='flex flex-col gap-16 h-screen left-0 top-0 sticky p-10 bg-blue-2 shadow-xl max-lg:hidden'>
        <Image src="/logo.png" alt="logo" width={150} height={70}/>
        <div className='flex flex-col gap-12'>
            {navLinks.map((link)=> (
                <Link href={link.url} key={link.label} className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-blue-1": ""}`}>{link.icon} <p>{link.label}</p></Link>
            ))}
        </div>
        <div className='flex gap-4 items-center text-body-medium'>
            <UserButton />
        </div>
    </div>
  )
}

export default LeftSideBar