import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Gallery() {

  const imageData = [
    {
      id:1,
      image:"src/assets/img/1.webp"
    },
    {
      id:2,
      image:"src/assets/img/4.webp"
    },
    {
      id:3,
      image:"src/assets/img/5.webp"
    },
    {
      id:4,
      image:"src/assets/img/6.webp"
    },
    {
      id:5,
      image:"src/assets/img/7.webp"
    },
    {
      id:6,
      image:"src/assets/img/9.webp"
    },
    {
      id:7,
      image:"src/assets/img/blackbuck-265876.webp"
    },
    {
      id:8,
      image:"src/assets/img/FB_IMG.jpeg"
    },
    {
      id:9,
      image:"src/assets/img/fish-974680.webp"
    },
    {
      id:10,
      image:"src/assets/img/IMG_7900.webp"
    },
    {
      id:11,
      image:"src/assets/img/IMG_7901.webp"
    },
    {
      id:12,
      image:"src/assets/img/IMG_7902.webp"
    },
    {
      id:13,
      image:"src/assets/img/IMG_7903.webp"
    },
    {
      id:14,
      image:"src/assets/img/IMG_7904.webp"
    },
    {
      id:16,
      image:"src/assets/img/IMG_7905.webp"
    },
    {
      id:17,
      image:"src/assets/img/IMG_7907.webp"
    },
    {
      image:"src/assets/img/IMG_7908.webp"
    },
    {
      image:"src/assets/img/rbs2.webp"
    },
    {
      image:"src/assets/img/s1.webp"
    },
    {
      image:"src/assets/img/s2.webp"
    },
    {
      image:"src/assets/img/slide3.webp"
    },
    {
      image:"src/assets/img/tgr.webp"
    },
    {
      image:"src/assets/img/tiger.webp"
    },
    {
      image:"src/assets/img/Tigerface.webp"
    },
    {
      image:"src/assets/img/tigerface2.webp"
    },
    {
      image:"src/assets/img/tigerface3.webp"
    },
    {
      image:"src/assets/img/tigerface4.webp"
    },
    {
      image:"src/assets/img/tiger-safari-game-drive-ranthambore-india-1600x900.webp"
    },
    {
      image:"src/assets/img/Untitled design (1).webp"
    },
    {
      image:"src/assets/img/Untitled design (2).jpg"
    },
    {
      image:"src/assets/img/Untitled design (3).webp"
    },
    {
      image:"src/assets/img/Untitled design.jpg"
    },

    {
      image:"src/assets/img/watertiger_19.webp"
    },
    {
      image:"src/assets/img/journey/64.jpg"
    },
    {
      image:"src/assets/img/journey/ae.jpg"
    },
    {
      image:"src/assets/img/journey/amareshwar-mahadev.webp"
    },
    {
      image:"src/assets/img/journey/barwada+mata+ji.webp"
    },
    {
      image:"src/assets/img/journey/chatri.webp"
    },
    {
      image:"src/assets/img/journey/gadhe.jpg"
    },
    {
      image:"src/assets/img/journey/hammir+fort.webp"
    },
    {
      image:"src/assets/img/journey/jogi-mahal+(1).webp"
    },
    {
      image:"src/assets/img/journey/khandar+fort.webp"
    },
    {
      image:"src/assets/img/journey/padam-talab.webp"
    },
    {
      image:"src/assets/img/journey/rajiv+gandhi.webp"
    },
    {
      image:"src/assets/img/journey/the-main-gate-to-temple.webp"
    },
    {
      image:"src/assets/img/journey/trinetr.webp"
    },
    
  ]

  return (
    <div className='bg-white pt-5'>
         <h1 className='text-center text-5xl pt-7 font-Merriweatherblack text-violet-700 font-extrabold'>Gallery</h1>
      <div className='w-screen h-auto py-10 flex items-center justify-center'>
        <div className='w-[95%] flex-wrap flex items-center justify-center gap-5 p-5 rounded-md'>
               {
            imageData.map((data,i)=>(
              <div key={i} className='w-[210px]  h-[210px] hover:scale-105 duration-700 cursor-pointer ease-in-out'>
                <LazyLoadImage className='w-full h-full object-cover rounded-md '
                  alt="AllGalleryimage.webp"
                  effect="blur"
                  delayTime={300}
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src={data.image} 
                   />
        
              </div>
            ))
               }
           </div>
      </div>
    </div>
  )
}
