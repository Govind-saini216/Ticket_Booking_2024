import React from "react";
import { Link } from "react-router-dom";
import Wave from 'react-wavify';
import { IoIosBus } from "react-icons/io";
import { GiMidnightClaw, GiLighthouse } from "react-icons/gi";
import { FaFortAwesome } from "react-icons/fa";


const WaveAnimation = () => {

  const Ranthambhoredata = [
    {
      image: <IoIosBus/>,
      heading:"Gypsy or Canter Safari",
      redirect:'/Gypsy_Canter',
      pergraph:"A scheduled journey to observe tigers in Ranthambore while taking in the sights of unique wildlife and birds."
    },
    {
      image: <GiMidnightClaw/>,
      heading:"Rare Birds Watching",
      redirect:'/birds_watching',
      pergraph:"Discover a location teeming with the most extraordinary birds that will surely captivate your eyes."
    },
    {
      image: <GiLighthouse/>,
      heading:"Devotional Hiking",
      redirect:'/devotional_hiking',
      pergraph:"Devotional Hiking up to the Ranthambore Fort for Ganesh temple while feeling the legendary story of Ranthambore."
    },
    {
      image: <FaFortAwesome/>,
      heading: "Explore Heritage With Nature",
      redirect:'/explore_heritage',
      pergraph:"Discover the rich heritage of Ranthambore by visiting the historic Jogi Mahal. Immerse yourself in nature at Malik and Surwal Lake, as well as Padam Talab."
    }
  ]

  return (
    <>
    <div className="w-screen h-auto relative py-2 ">
        <Wave className="absolute  bottom-0 left-0" fill='#1e8449'
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 10,
            amplitude: 20,
            speed: 0.7,
            points: 3,
          }}
        />

        <div className="w-screen h-auto">
          <h1 className="text-center sm:text-2xl md:text-4xl font-Merriweatherblack font-semibold">Tourist Activities at Ranthambhore</h1>
        
        <div className=" flex items-center justify-center px-2 flex-wrap gap-4 py-10 " >
          {
              Ranthambhoredata.map((ranthambhore,i)=>(
                <div key={i} className="w-[300px] h-[400px] z-[100] rounded-md border-2 flex items-center justify-center border-black">
                <div className="text-justify space-y-5 p-3">
                <div className="flex items-center justify-center">
                  {/* <img className="w-[100px] rounded-full " src={ranthambhore.image} />
                   */}
                      <p className="text-7xl">{ranthambhore.image}</p>
                </div>
                  <h1 className="text-lg font-semibold">{ranthambhore.heading}</h1>
                  <p className="pb-5">{ranthambhore.pergraph}</p>
                  <Link to={ranthambhore.redirect} className="border border-black px-5 p-2 rounded-sm active:bg-violet-600 active:text-black"  >Read More</Link>
                </div>
                </div>
              ))
          }
        </div>

        </div>
    </div>
    </>
  );
};

export default WaveAnimation;
