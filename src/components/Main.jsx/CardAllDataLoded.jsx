import React from 'react';
import CountUp from 'react-countup';
// import RegisterForm from './RegisterForm';


export default function CardAllDataLoded() {

    const DataLoding = [
        {
            id: 1,
            image: 'src/assets/img/1.webp',
            peragraph: 'Total visitor',
            totalData: 10000
        },
        {
            id: 2,
            image: 'src/assets/img/1.webp',
            peragraph: 'Total Tiger',
            totalData: 80
        },
        {
            id: 3,
            image: 'src/assets/img/1.webp',
            peragraph: 'Total Birds',
            totalData: 320
        },
        {
            id: 3,
            image: 'src/assets/img/1.webp',
            peragraph: 'Total Bear',
            totalData: 100
        },
        {
            id: 4,
            image: 'src/assets/img/1.webp',
            peragraph: 'Visitor Satisfaction',
            totalData: 9999
        },
   

    ]
    
    return (
        <>
            <div className='w-screen h-auto py-10 gap-y-10 bg-violet-100 sm:gap-3 md:gap-7 flex-wrap flex items-center justify-center'>
                {
                    DataLoding.map((data, i) => (
                        <div key={i} className='flex items-center justify-center w-[170px] h-[160px] bg-white rounded-md shadow-2xl'>
                            <div>
                                <p className='text-center mt-3 font-serif font-semibold text-2xl text-violet-700'>{data.peragraph} </p>
                                <h1 className='text-center mt-3 font-serif font-semibold text-2xl'>{<CountUp duration={10}
                                    end={data.totalData} />} +</h1>
                            </div>
                        </div>
                    ))
                }

            </div>
  {/* <RegisterForm/> */}
        </>
    )
}
