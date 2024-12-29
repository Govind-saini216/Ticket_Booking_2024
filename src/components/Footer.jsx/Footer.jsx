import React from 'react';
import logoimg from '../../assets/img/logo-2.webp'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className='w-screen h-auto pb-10 bg-slate-900'>
                <div className='w-screen h-auto flex items-center justify-center'>
                    <div className='w-[250px]'>
                        <img src={logoimg} alt='logo.webp' />
                    </div>
                </div>

                <div className=' w-screen h-auto gap-10 grid sm:grid-cols-2 md:grid-cols-4 text-center mt-8'>
                    <div className='text-white '>
                        <div>
                            <Link  className='focus:bg-orange-600 px-2  rounded-sm'  to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm'  to='/about'>About</Link>
                        </div>
                        <div>
                            <Link  className='focus:bg-orange-600 px-2  rounded-sm' to='/gallery'>Gallery</Link>
                        </div>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm'  to='/safaribooking'>Booking</Link>
                        </div>
                        <div>
                            <Link  className='focus:bg-orange-600 px-2  rounded-sm' to='/contact'>Contact</Link>
                        </div>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm'  to='/services'>Services</Link>
                        </div>

                    </div>

                    <div className='text-white'>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm' to='/how_to_reach'>How To Reach</Link>
                        </div>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm' to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm' to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm' to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm' to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm' to='/'>Home</Link>
                        </div>
                      

                    </div>

                    <div className='text-white '>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm' to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className='focus:bg-orange-600 px-2  rounded-sm' to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className="focus:bg-orange-600 px-2  rounded-sm" to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className="focus:bg-orange-600 px-2  rounded-sm" to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className="focus:bg-orange-600 px-2  rounded-sm" to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className="focus:bg-orange-600 px-2  rounded-sm" to='/'>Home</Link>
                        </div>
                    

                    </div>

                    <div className='text-white'>
                        <div>
                            <Link className="focus:bg-orange-600 px-2  rounded-sm" to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className="focus:bg-orange-600 px-2  rounded-sm" to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className="focus:bg-orange-600 px-2  rounded-sm" to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className="focus:bg-orange-600 px-2  rounded-sm" to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className="focus:bg-orange-600 px-2  rounded-sm" to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className="focus:bg-orange-600 px-2  rounded-sm" to='/'>Home</Link>
                        </div>
                  

                    </div>

                </div>
                <div className='text-white text-center pt-5'>
                    <h1>2024@CopyRight Claim Ranthambhore Rajasthan</h1>
                </div>
            </div>
        </>
    )
}
