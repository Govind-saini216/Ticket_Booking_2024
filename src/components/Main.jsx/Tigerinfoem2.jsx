import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import images1 from '../../assets/img/raja hammir.webp'

export default function Tigerinfoem2() {
  AOS.init({
    duration: 2000
  })

  return (
    <>
    <div className='bg-white py-10'>
      <div className='flex items-center justify-center w-full'>
        <div className='text-center w-[650px] rounded-md bg-violet-800 py-2'>
          <h1 className='font-bold sm:text-2xl md:text-4xl text-white'>ABOUT OF RANTHAMBHORE FORT </h1>
          {/* <hr className='border border-black'></hr> */}
        </div>
      </div>
      <div className="w-screen grid grid-cols-1 md:grid-cols-2 justify-center items-center py-10 gap-5 ">
        <div data-aos="zoom-in-right" className=' grow-0 w-[100%] h-[500px] rounded-lg'>
          <img className='w-full h-full  rounded-lg' src={images1} />
        </div>

        <div data-aos="zoom-in-left" className='w-[100%] h-[500px] overflow-x-hidden rounded-lg bg-purple-900 brightness-150 text-white '>
          <h1 className='text-center mt-5 text-2xl font-semibold'>*IMPORTENTS OF RANTHAMBHORE FORT</h1>
          <p className='m-7 grow-0 text-justify text-base font-mono'>
            <b> <i> Ranthambhore Fort ghoomne ka samay October se March ke beech best hota hai, jab mausam suhana hota hai aur prakriti apne shikhar par hoti hai. </i></b>
            <br></br>
            <br></br>
            <b>**Ranthambhore Fort**</b> Rajasthan ke Sawai Madhopur district mein **Ranthambhore National Park** ke andar sthit ek prachin aur prasiddh kila hai. Yeh fort 10th century mein banaya gaya tha aur ab ek <b>**UNESCO World Heritage Site**</b> hai. Yeh kila Ranthambhore ke tigers ke saath saath yahaan aane wale paryatakon ke liye ek aur bada akarshan hai.
            <br></br>
            <br></br>

            Ranthambhore Fort ek pahaadi par sthit hai aur lagbhag **700 feet** ki unchai par hai. Is fort se poore National Park ka sundar drishya dekha ja sakta hai. Kila ka itihaas Rajasthan ke Chauhan rajvansh se juda hai. **Raja Hammir Dev Chauhan** ka yeh kila ek samay par Mughal aur Rajput samrajyon ke beech ke samrajya yuddhon ka ek mahatvapurn kendra tha.
            <br></br>
            <br></br>

            <b> **Fort ke Mukhya Akarshan:**</b>
            <br></br>
            <b>1. **Ganesh Mandir:** </b>
            Ranthambhore Fort ke andar sthit **Trinetra Ganesh Mandir** kaafi prasiddh hai. Yahan har saal hazaron bhakt puja karne aate hain.
            <br></br>
            <br></br>

            <b>  2. **Prachin Mahalon aur Jain Mandiron ke Avshesh:** </b>
            Kile ke andar kai prachin mahal aur Jain dharam ke mandir hain jo iske samriddh itihaas aur kalatmakta ko darshate hain.
            <br></br>
            <br></br>

            <b>     3. **Prachin Jalashay:** </b>
            Kile ke andar kai talaab aur jalashay hain, jaise Padam Talao, jo ise aur bhi adbhut banate hain.
            <br></br>
            <br></br>

            <b> **Ranthambhore Fort ka Mahatva:** </b>
            Ranthambhore Fort na sirf ek historical monument hai, balki ek dharmik aur sanskritik kendra bhi hai. Yahaan ki kala, vastu shilp, aur prachin kahaniyan is fort ko aur bhi khas banati hain. Fort ka connection Ranthambhore National Park ke tigers aur prakriti se hone ke karan yahaan ka anubhav aur bhi yaadgaar ho jata hai.
            <br></br>
            <br></br>


          </p>
        </div>

      </div>
    </div>
    </>
  )
}
