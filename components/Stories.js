import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';
import { useSession } from 'next-auth/react';


export default function Stories() {
    const [storyUsers, setStoryUsers] = useState([])
    const {data: session} = useSession();
    useEffect(() => {
        const randomName = faker.person.fullName();

        const storyUsers = [];

        for (let inc = 0; inc < 20; inc++) {
            storyUsers.push({
                username: faker.internet.userName().toLowerCase(),
                img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
                id: inc,
            })
        }
         setStoryUsers(storyUsers)
      
    },[]);
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none'>
        {session && (
            <Story img={session.user.image} username={session.user.username} isUser="true"/>
        )}
        {storyUsers.map(user=>(
            <Story key={user.id} username={user.username} img={user.img}/>
        ))}
    </div>
  )
}
