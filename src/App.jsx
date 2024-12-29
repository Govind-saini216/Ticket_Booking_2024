import React, { Suspense } from 'react';
import Headers from './components/Headers/Headers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SafariBooking from './components/Headers/pages/SafariBooking';
import Contact from './components/Headers/pages/contact';
import LodingEffect from './components/Loding Animation/LodingEffect';
import Gallery from './components/Main.jsx/Gallery';
import Services from './components/Headers/pages/Services';
import Footer from './components/Footer.jsx/Footer';
import Error_page from './components/Error_page';
import Gypsy_Canter from './components/Main.jsx/Tourist_Activity/Gypsy_Canter';
import Birds_Watching from './components/Main.jsx/Tourist_Activity/Birds_Watching';
import Devotional_Hiking from './components/Main.jsx/Tourist_Activity/Devotional_Hiking';
import Explore_Heritage from './components/Main.jsx/Tourist_Activity/Explore_Heritage';
import How_To_Reach from './components/Main.jsx/How to reach/How_To_Reach';
import By_Road from './components/Main.jsx/How to reach/By_Road';
import By_Train from './components/Main.jsx/How to reach/By_Train';
import By_Air from './components/Main.jsx/How to reach/By_Air';
const Home = React.lazy(() => import('./components/Headers/pages/Home'));


export default function App() {
  return (
    <Suspense fallback={<LodingEffect />} >
      <div className='mx-auto' >
        <BrowserRouter>
          <Headers />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/safaribooking' element={<SafariBooking />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/gypsy_canter' element={<Gypsy_Canter />} />
            <Route path='/birds_watching' element={<Birds_Watching />} />
            <Route path='/devotional_hiking' element={<Devotional_Hiking />} />
            <Route path='/explore_heritage' element={<Explore_Heritage />} />
            <Route path='/how_to_reach' element={<How_To_Reach />} />
            <Route path='/how_to_reach/by_road' element={<By_Road/>} />
            <Route path='/how_to_reach/by_Train' element={<By_Train/>} />
            <Route path='/how_to_reach/by_Air' element={<By_Air/>} />

            <Route path='*' element={<Error_page />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Suspense>
  )
}
