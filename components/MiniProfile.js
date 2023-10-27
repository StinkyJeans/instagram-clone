import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img className='h-16 rounded-full border p-[2px]' src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/335144975_519088560298176_6784039890760073985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEZrrlFHKxw958pNVfGk6T9G60DywaXw6wbrQPLBpfDrIJoBwMgpM8G_GZnRzZzTnb2ilGV_H4h32rdWfLdYQih&_nc_ohc=QgMF_Lj0Ex8AX88nuyw&_nc_oc=AQm58tnSJwmSmxIdGrRhrG0dmMfvy7XEsAip7K4Gi6lJ3yePocDx8RE_1BM8Og439T4&_nc_ht=scontent.fcgy2-1.fna&oh=00_AfBWftcL3X5trz8HQrwDxLTI4uOGQAryfUFEiGMT5KpzfA&oe=6540E481"  
        alt='user-image'/>
        <div className='flex-1 ml-4'>
            <h2 className='font-bold'>stinkyJeans</h2>
            <h3 className='text-sm text-gray-400'>Welcome to instagram-clone</h3>
        </div>
        <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  )
}
