import Image from 'next/image'
import { useEffect } from 'react'
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { userState } from '../atom/userAtom';
import { db } from '../firebase';


export default function Header() {
    const [open, setOpen] = useRecoilState(modalState);
    const [currentUser, setCurrentUser] = useRecoilState(userState);
    const router = useRouter();
    const auth = getAuth();
    useEffect(()=> {
         
        onAuthStateChanged(auth, (user) => {
            if(user) {
                const fetchUser = async () => {
                    console.log(user)
                    const docRef = doc(db, 'users', user.auth.currentUser.providerData[0].uid);
                    const docSnap = await getDoc(docRef)
                    if(docSnap.exists()) {
                        setCurrentUser(docSnap.data())
                        
                        
                    }
                }
                fetchUser()
            }
        })
    },[]);
    function onSignOut() {
        signOut(auth)
        setCurrentUser(null)
    }
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30'> 
        
            <div className='flex justify-between items-center  max-w-6xl ml-5 mx-4 xl:mx-auto'>
                 {/* Left */}

                <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'
                  layout='fill'
                  className='object-contain'
                  onClick={()=>router.push("/")}
                 />
                </div>
                <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                    <Image
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png'
                    layout='fill'
                    className='object-contain'
                    onClick={()=>router.push("/")}
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
                <HomeIcon
                onClick={()=>router.push("/")}
                 className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
                {currentUser ? (
                    <>
                    <PlusCircleIcon onClick={()=>setOpen(!open)}  className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
                    <img 
                    onClick={onSignOut} 
                    src={currentUser?.userImg} 
                    alt='user-image' 
                    className='h-10 rounded-full cursor-pointer'/>
                    </>
                ):(
                    <button onClick={()=>router.push("/auth/signin")}>Sign in</button>
                )}
                    
                
            </div>
        </div>
  
    </div>

    
  );
}
