import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../index.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Start_jorney() {
    Aos.init({
        duration: 2000
    })

    const data = [
        {
            location: "Sawai Madhopur",
            img: "src/assets/img/journey/trinetr.webp",
            heading: "Trinetr Ganesh Temple",
            Peragraph: "The Ganesh Temple in Sawai Madhopur, located within the historic Ranthambore Fort, is a revered spiritual site dedicated to Lord Ganesha.Surrounded by stunning views of the Aravalli Hills, the temple attracts devotees and tourists alike, blending religious significance with the enchanting beauty of Rajasthan's cultural and natural heritage."
        },
        {
            location: "Sawai Madhopur",
            img: "src/assets/img/journey/barwada+mata+ji.webp",
            heading: "Chauth Ka Barwara",
            Peragraph: "Chauth Ka Barwara, nestled in Sawai Madhopur, Rajasthan, is a historic town known for its iconic Chauth Mata Temple, a major pilgrimage site.Surrounded by rolling hills and lush greenery, the town showcases Rajasthan's rich cultural heritage, offering visitors a serene retreat steeped in spiritual and historical significance.",
        },
        {
            location: "Sawai Madhopur Ranthambhore Road",
            img: "src/assets/img/journey/rajiv.webp",
            heading: "The Rajiv Gandhi Regional Museum",
            Peragraph: "The Rajiv Gandhi Regional Museum of Natural History in Sawai Madhopur showcases India's rich biodiversity and environmental heritage. It features engaging exhibits on wildlife, ecosystems, and conservation, including a focus on Ranthambore's tigers. The museum serves as an educational hub, inspiring visitors to appreciate and protect nature's wonders.",
        },
        {
            location: "Sawai Madhopur Ranthambhore Road",
            img: "src/assets/img/journey/amareshwar-mahadev.webp",
            heading: "Amareshwar Mahadev Temple",
            Peragraph: "Amreshwar Mahadev Temple, located on Ranthambhore Road in Sawai Madhopur, is a serene spiritual site dedicated to Lord Shiva. Nestled amidst lush greenery and scenic landscapes, the temple is a popular destination for devotees and nature lovers, offering tranquility and a divine connection in a picturesque setting.",
        },
        {
            location: "Sawai Madhopur",
            img: "src/assets/img/journey/jogi-mahal+(1).webp",
            heading: "Jogi Mahal",
            Peragraph: "Jogi Mahal, located on the banks of Padam Talao in Ranthambore National Park, Sawai Madhopur, is a historic guesthouse once used by royals. Surrounded by lush forests, it offers breathtaking views and houses one of India’s largest banyan trees. A symbol of heritage and tranquility, it attracts nature lovers and history enthusiasts alike.",
        },
        {
            location: "Sawai Madhopur",
            img: "src/assets/img/journey/padam-talab.webp",
            heading: "Padam Talab",
            Peragraph: "Padam Talab, one of the largest lakes in Ranthambore National Park, Sawai Madhopur, is a picturesque spot known for its serene beauty. Surrounded by lush greenery and the historic Jogi Mahal, the lake is home to water lilies, crocodiles, and diverse wildlife. It offers a peaceful retreat and a chance to witness Ranthambore’s natural charm.",
        },
        {
            location: "Sawai Madhopur",
            img: "src/assets/img/journey/the-main-gate-to-temple.webp",
            heading: "Shri Mahaveer Ji Temple",
            Peragraph: "Shri Mahaveer Ji Temple, located in Sawai Madhopur, is a revered Jain pilgrimage site dedicated to Lord Mahavira.Known for its stunning architecture and peaceful ambiance, the temple attracts devotees and tourists alike.Surrounded by scenic landscapes, it features intricate carvings and a sacred idol, offering a spiritual retreat and a glimpse into Jain culture.",
        },
        {
            location: "Sawai Madhopur",
            img: "src/assets/img/journey/khandar+fort.webp",
            heading: "Khandar Fort",
            Peragraph: "Khandar Fort, located in Sawai Madhopur, Rajasthan, is a historic hilltop fort known for its strategic location and panoramic views of the surrounding landscapes. Built during the 12th century, it boasts ancient architecture, including grand gates, temples, and structures. The fort offers a glimpse into Rajasthan's rich history and is a popular spot for history enthusiasts and trekkers.",
        },


    ]

    return (
        <>
            <div className='w-screen h-auto py-10 '>
                <h1 data-aos="fade-right" className='text-center text-purple-700 pt-7 font-Merriweatherblack font-semibold text-4xl'>Start Your Jorney</h1>

                <div className='flex items-center duration-500 ease-in-out justify-around flex-wrap pt-10 gap-12'>
                    {
                        data.map((items, i) => (
                            <div key={i} className='group rounded-md relative chivo w-[300px] cursor-pointer h-[400px] border bg-white border-black' >
                                <LazyLoadImage className='w-full h-full object-cover rounded-md'
                                    alt="Start_journy.webp"
                                    effect="blur"
                                    delayTime={300}
                                    wrapperProps={{
                                        style: { transitionDelay: "1s" },
                                    }}
                                    src={items.img}
                                />
                                <div className='brightness-150 px-1 hidden space-y-2 group-hover:block text-white pt-3  text-md absolute w-full h-[400px] left-0 ease-in-out rounded-md bg-darkgreen duration-1000 top-0 ' >
                                    <h1>Destination : {items.heading}</h1>
                                    <h2>Location : {items.location}</h2>
                                    <p className='text-sm text-justify'> Description : {items.Peragraph}</p>
                                </div>
                                <h1 className='text-base pt-1 lilita-one-regular'>{i+1}. { items.heading}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


{/* <LazyLoadImage className='w-full h-full object-cover rounded-md '
    alt="AllGalleryimage.webp"
    effect="blur"
    delayTime={300}
    wrapperProps={{
        style: { transitionDelay: "1s" },
    }}
    src={data.image}
/> */}