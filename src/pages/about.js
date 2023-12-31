import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/About/Hero'
import SmoothScroll from '../../components/Helpers/SmoothScroll'
import Discover from '../../components/About/Discover'
import Trajectory from '../../components/About/Trajectory'
// import Tools from '../../components/Tools'
import HomeTools from '../../components/Home/HomeTools'



export default function About({ setOpen }) {

  SmoothScroll()
  return (
    <>
      <Head>
        <title>Sobre Zinco</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-white relative'>
        <Navbar setOpen={setOpen} header />
        <Hero />
        <Discover />
        <Trajectory />
        <div id='certifications'>
        <HomeTools />
        </div>
        {/* <div className='mx-auto text-center text-xs'>Segun trello iria un carousel igual que el de home asi que dejo este de referencia</div> */}

        <div className='mb-16 sm:mb-32 md:mb-56'></div>
        <Footer />
      </div>
    </>
  )
}
