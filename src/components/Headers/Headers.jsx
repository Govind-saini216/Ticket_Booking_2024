import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignLeft } from "react-icons/fi";
import logo from '../../assets/img/logo-2.webp';


export default function Headers() {

    let [chnag, Setchange] = useState(false);

    const handler = () => {
        Setchange(!chnag)
    }


    return (
        <>
            <>
                <div className='bg-white w-screen flex flex-wrap gap-1 items-center justify-around font-Merriweatherblack bg-transparent  text-white text-lg py-1 '>

                    <div className='w-20 h-20'>
                        <Link to='/' >
                            <img className='h-full w-full' src={logo} alt='logo.png' />
                        </Link>
                    </div>

                    <div className=' text-2xl text-black md:hidden cursor-pointer'>
                        <FiAlignLeft onClick={handler} />
                    </div>

                    <div className={`text-black sm:bg-white md:bg-transparent md:flex-row md:items-center md:justify-center md:pb-5 pb-12 absolute top-[95px] left-0 gap-5 active:text-secondrycolor md:static md:w-auto sm:h-auto md:h-20 md:pl-0 md:z-auto sm:z-50 sm:w-[96.4%] sm:flex-col sm:flex sm:justify-center sm:items-center sm:p-5 transition-all duration-500 ease-in ${chnag ? 'rounded-md opacity-100' :
                        'top-[-400px]'} md:opacity-100 opacity-0`}>

                        <Link className='px-2 rounded-sm focus:bg-orange-600' onClick={handler} to='/' >Home</Link>
                        <Link className='px-2 rounded-sm focus:bg-orange-600 'onClick={handler} to='/gallery' >Gallery</Link>
                        <Link className='px-2 rounded-sm focus:bg-orange-600' onClick={handler} to='/safaribooking' >Safari booking</Link>
                        <Link className='px-2 rounded-sm focus:bg-orange-600' onClick={handler} to='/contact' >Contact</Link>
                        <Link className='px-2 rounded-sm focus:bg-orange-600' onClick={handler} to='/services' >Services</Link>
                    </div>
                </div>
            </>
        </>
    )
}


