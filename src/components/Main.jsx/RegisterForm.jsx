import React from 'react';

export default function RegisterForm() {

    return (
        <>
            <div className='mainbodyimg font-Merriweatherblack w-screen h-auto  '>
                {/* form div is start */}
            <div className=' flex items-center backdrop-blur-md justify-center py-20'>
                <form className='bg-bg-pattern' action='https://api.web3forms.com/submit' method="POST" >
                    <input type="hidden" name="access_key" value="f590477f-5561-4aa6-9fe4-1821c66ea8bc" />
                        <div className="text-center w-screen flex items-center justify-center  h-auto p-5">
                        <div className='bg-white border pl-16 border-terhrycolor p-10 rounded-md'>
                            <h1 className='text-4xl text-violet-600  text-center py-3 font-bold'>Safari Booking Form</h1>
                            {/* <!----------------------- item1 start-----------------------------> */}
                            <div className="md:space-y-6">
                                <div>
                                    <label className="mr-3 text-base" htmlFor="name">Name:</label>
                                    <input onChange={(e) => setname(e.target.value)} className="inptbordermake mb-3 px-3 w-[250px] text-bgblack h-8 rounded-md  mr-10" placeholder='name' type="text" id="name" name="name" required />

                                    <label className="mr-3 text-base" htmlFor="email">Email:</label>
                                    <input onChange={(e) => setemail(e.target.value)} className="inptbordermake mb-3 px-3 w-[250px] text-bgblack h-8 rounded-md mr-10" placeholder='Email' type="email" id="email" name="email" required />
                                </div>
                                <div>
                                    <label className="mr-3 text-base" htmlFor="mobile">Mobile:</label>
                                    <input onChange={(e) => setphone(e.target.value)} className="inptbordermake mb-3 px-3 w-[250px] text-bgblack h-8 rounded-md mr-10" placeholder='Number' type="phone" id="phone" name="phone" required />

                                    <label className="mr-4 text-base" htmlFor="date">Date:</label>
                                    <input onChange={(e) => setdate(e.target.value)} className="inptbordermake mb-3 px-3 w-[250px] h-8 bg-white text-bgblack rounded-md mr-10" type="date" id="date" name="date" required />

                                </div>
                            </div>
                            {/* <!----------------------- item2 Start -----------------------------> */}
                            <div >
                                <div className=" md:space-y-6">
                                    <label className="mr-5  text-base" htmlFor="pax">Pax:</label>
                                    <input onChange={(e) => setpax(e.target.value)} className="inptbordermake mb-3 px-3 w-[250px] text-bgblack h-8 rounded-md mr-10" placeholder='Total Member' type="number" id="mobile" name="pax" required />

                                    <label className="mr-3 text-base" htmlFor="vehicle">Vehicle</label>
                                    <select onChange={(e) => setvehicle(e.target.value)} className="inptbordermake mb-3 px-3 w-[250px] text-bgblack bg-white h-8 rounded-md mr-10" id="vehicle" name="vehicle" required>
                                        <option value=""  >Select</option>
                                        <option value="Gypsy" name="Gypsy">Gypsy</option>
                                        <option value="Canter" name="Canter">Canter</option>
                                    </select>
                                </div>
                                <div className=" md:space-y-6" >
                                    <label className="md:mr-5 text-base" htmlFor="Safari Type">Safari-Type </label>
                                    <select onChange={(e) => setSafariType(e.target.value)} className=" inptbordermake mb-3 bg-white text-bgblack px-3 w-[250px] h-8 rounded-md mr-12 md:mr-10" id="SafariType" name="SafariType" required>
                                        <option value="">Select</option>
                                        <option value="Morning Safari">Morning Safari</option>
                                        <option value="Eveing Safari">Eveing Safari</option>
                                    </select>
                                </div>

                                <div>
                                    <br />
                                    <input type="submit" value="Send" className="w-40 h-10 rounded-md text-white font-bold text-lg cursor-pointer active:bg-gray-800 bg-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
             </div>
        </>
    )
}
