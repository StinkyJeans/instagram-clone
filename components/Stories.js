import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';


export default function Stories() {
    const [storyUsers, setStoryUsers] = useState([])
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


        // const storyUsers = faker.array(20,(i)=>({
        //     username: ({locale:"en"}),
        //     img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random * 70)}`,
        //     id: i,
            
        // }));
        setStoryUsers(storyUsers)
        console.log(storyUsers)
    },[]);
  return (
    <div>
        {storyUsers.map(user=>(
            <Story key={user.id} username={user.username} img={user.img}/>
        ))}
    </div>
  )
}
