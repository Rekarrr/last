import React, {lazy } from 'react'


const Home = lazy(() => import('./Components/Home'))
const About = lazy(() => import('./Components/About'))
const Skills = lazy(() => import('./Components/Skills'))
const Contact = lazy(() => import('./Components/Contact'))
const Education = lazy(() => import('./Components/Education'))
const Nav = lazy(() => import('./Components/Nav'))
const Footer = lazy(() => import('./Components/Footer'))



const App = () => {
  return (
    <div>
      {/* <Nav/> */}
      <section> <Nav/> </section>

<br />
<br />

    {/*  <Home/> */}
      <section id="Home"> <Home/>
      <div className='blue__gradient'></div>
      <div className='pink__gradient'></div>
       </section>


      {/* <About/> */}
      <section id='About' className=' sm:items-center w-full h-[158vh] sm:h-[145vh] md:h-[92vh] dark:bg-gray-700'> <About/>
      <div className='blue__gradient2'></div>
      <div className='pink__gradient2'></div>
       </section> 


      {/* <Skills/> */}
      <section id='Skills' className=' sm:items-center w-full h-[198vh] sm:h-[130vh] md:h-[120vh] lg:h-[100vh]  dark:bg-gray-800'> <Skills/>
      <div className='blue__gradient3'></div>
      <div className='pink__gradient3'></div>
       </section>  


      {/* <Education/> */}
      <section  className='pt-10 sm:items-center w-full h-[165vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh]  2xl:h-[80vh] dark:bg-gray-700'> <Education/> 
      <div className='blue__gradient4'></div>
      <div className='pink__gradient4'></div>
      </section> 

      {/* <Contact/> */}
      <section id='Contact'> <Contact/>
      <div className='blue__gradient5'></div>
      <div className='pink__gradient5'></div>
      </section> 


      {/* <Footer/> */}
      <section className=' sm:items-center w-full h-[152vh] sm:h-[145vh] md:h-[112vh] lg:h-[66vh]   bg-indigo-600 '> <Footer/> </section> 





      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}
    </div>
  )
}

export default App
