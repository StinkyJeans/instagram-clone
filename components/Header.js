import Image from 'next/image'
import React from 'react'
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30'> 
        
            <div className='flex justify-between items-center  max-w-6xl ml-5 mx-4 xl:mx-auto'>
                 {/* Left */}

                <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'
                  layout='fill'
                  className='object-contain'
                 />
                </div>
                <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                    <Image
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png'
                    layout='fill'
                    className='object-contain'
                />
          
                </div>
                {/* Middle */}


            <div className='relative mt-1'>
                <div className='absolute top-2 left-2'>
                        <SearchIcon className='h-5 text-gray-500 cursor-pointer'/>
                </div>
                <input type='text' placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'/>
            </div>

                {/* Right */}

            <div className='flex space-x-4 items-center'>
                <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
                <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
                <img 
                src='https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/335144975_519088560298176_6784039890760073985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEZrrlFHKxw958pNVfGk6T9G60DywaXw6wbrQPLBpfDrIJoBwMgpM8G_GZnRzZzTnb2ilGV_H4h32rdWfLdYQih&_nc_ohc=QgMF_Lj0Ex8AX88nuyw&_nc_oc=AQm58tnSJwmSmxIdGrRhrG0dmMfvy7XEsAip7K4Gi6lJ3yePocDx8RE_1BM8Og439T4&_nc_ht=scontent.fdvo1-1.fna&oh=00_AfCmT6fBNtfVTq8L6Tf2v_jRWes7zl62m6IRdN8Xqj8kBw&oe=6540E481' 
                alt='user-image' 
                className='h-10 rounded-full cursor-pointer'/>

            </div>
        </div>
  
    </div>

    
  )
}
