import React from 'react'
import NavSocials from './NavSocials'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full flex justify-center items-center font-light text-gray-200 bg-mainblue/20 text-[9px] md:text-xs pb-3 pt-2'>
        <Link 
          className='absolute left-[50px] w-[20px]'
          href={'/'}>
          
          <Image
            src='/assets/m.png' height={100} width={100} alt='MORENSKI' 
            className='w-full'
          />
        </Link>
        
        <p>&copy; 2024 - BR0SKI. All rights reserved.</p>

        <div className='absolute right-[50px]'>
          <NavSocials 
            color="text-gray-200/80"
            size="small"
            />
        </div>
    </div>
  )
}

export default Footer