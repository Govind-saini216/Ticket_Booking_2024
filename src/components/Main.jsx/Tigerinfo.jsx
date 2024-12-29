import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import images1 from '../../assets/img/tiger face png/facepng2.webp'

export default function Tigerinfo() {

    AOS.init({
        duration: 2000
    })
    return (
        <>
        <div className='w-screen h-[100vh]'>

        </div>


        </>
        // <div className='bg-slate-400 w-screen h-auto'>
        //     <div className='flex items-center justify-center w-screen'>
        //         <div className='text-center mt-12 w-[600px] rounded-md bg-violet-500 py-2'>
        //             <h1 className='font-bold sm:text-2xl md:text-4xl text-white'>ABOUT OF RANTHAMBHORE </h1>
        //         </div>
        //     </div>
        //     <div className=" w-screen h-auto grid grid-cols-1 md:grid-cols-2 py-10 ">
        //         <div data-aos="fade-right" className='backgroundtigerpng rounded-lg'>
        //             <img className='w-full h-full' src={images1} />
        //         </div>

        //         <div data-aos="fade-left" className='w-[90%] h-[400px] overflow-y-auto rounded-lg bg-white '>
        //             <h1 className='text-center mt-5 text-2xl font-semibold'>*IMPORTENTS</h1>
        //             <p className='m-7 grow-0 text-justify text-base font-mono'>
        //                 **Ranthambhore National Park** Rajasthan ke Sawai Madhopur district mein sthit ek prasiddh wildlife park hai, jo apne **Royal Bengal Tigers** ke liye mashhoor hai. Yeh park 1973 mein **Project Tiger** ka hissa bana aur 1980 mein ise **National Park** ka darja mila. Yeh Bharat ke wildlife conservation efforts ka ek mahatvapurn kendra hai.
        //                 <br></br>
        //                 <br></br>

        //                 Ranthambhore National Park ka kshetra lagbhag **392 square kilometers** hai, jo pahaadiyon, ghaatiyon aur ghane janglon se ghira hua hai. Yahaan ke andar ek prachin kila, **Ranthambhore Fort**, bhi hai, jo 10th century mein banaya gaya aur UNESCO World Heritage Site ka hissa hai.
        //                 <br></br>
        //                 <br></br>

        //                 Yahaan ka sabse bada akarshan **Royal Bengal Tigers** hain, jo apne prakritik environment mein asani se dekhe ja sakte hain. Iske alawa, yahaan **leopard, sambar deer, nilgai, wild boar, sloth bear** aur 300+ prajatiyon ke pakshi milte hain. **Padam Talao** aur **Rajbagh Talao** jaise sundar jheel tiger spotting ke liye kaafi prasiddh hain.

        //                 <br></br>
        //                 <br></br>
        //                 Park ko 10 safari zones mein baanta gaya hai, jahan **jeep safari** aur **canter safari** ke madhyam se wildlife dekhi ja sakti hai. **October se June** tak ka samay yahaan ghoomne ke liye sabse accha hota hai, jab tiger spotting ki sambhavnayein zyada hoti hain.
        //                 <br></br>
        //                 <br></br>

        //                 Ranthambhore ki prakritik sundarta aur wildlife yahaan aane wale har paryatak ke liye ek yaadgaar anubhav banati hai. Yeh park na sirf tigers aur wildlife ki suraksha ke liye important hai, balki eco-tourism ke liye bhi ek shreshth sthal hai. Agar aap prakriti aur wildlife ke premi hain, to Ranthambhore ek must-visit destination hai.
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}
