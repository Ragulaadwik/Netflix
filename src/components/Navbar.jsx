import React, { useEffect, useState } from 'react'
import NetFlixLogo from '../assets/netflix-logo-Nav.png'
import AccountNav from '../assets/accountNav.jpg'

const Navbar = () => {

    const[show,setShow] = useState(false)

    const scrollHandler=()=>{
        if(window.scrollY > 200){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
      window.addEventListener('scroll',scrollHandler);
      return () => window.removeEventListener('scroll',scrollHandler);
    },[])


  return (
    <section className={` fixed w-full  ${show && 'bg-black ' }  `}>
      <div className='flex justify-between'>
        <img className='h-[50px] p-3' src={NetFlixLogo}/>

        <img  className='h-[50px] p-3' src={AccountNav}/>
      </div>
    </section>
  )
}

export default Navbar
