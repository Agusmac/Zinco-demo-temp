import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
    useEffect(() => {
        AOS.init();
    }, [])

    // which image is displayed
    const [img1, setImg1] = useState(0)
    const [img2, setImg2] = useState(1)
    const [img3, setImg3] = useState(2)

    // which p is displayed
    const [p1Large, setp1Large] = useState(false)
    const [p2Large, setp2Large] = useState(false)
    const [p3Large, setp3Large] = useState(false)


    const array = ['Steel.png', 'Steel2.png', 'Steel3.png']//change
    const array2 = []//fill
    const array3 = []//fill

    // this a horrible way of doing it but im not sure 
    // about the content of the paragraphs so i can just guess
    const p1 = <div className='space-y-5'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros.</p> <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros. </p> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros. </p> </div>
    const p2 = <div className='space-y-5'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros.</p> <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros. </p> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros. </p> </div>
    const p3 = <div className='space-y-5'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros.</p> <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros. </p> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros. </p> </div>


    return (
        <div  id='projects' className='mb-48 xl:mb-56 px-[7.3vw]'>
            <div data-aos="fade-up" className='flex justify-center items-center gap-5 mb-16'>
                <div className='hidden sm:inline-block h-[2px] w-full bg-[#3e3391]'></div>

                <h2 className='sm:whitespace-nowrap text-center text-[5.5vw] sm:text-[3.5vw]  2xl:text-[56px] leading-[1.16] font-black font-archivo'>
                    PROYECTOS DESTACADOS
                </h2>
                <div className='hidden sm:inline-block h-[2px] w-full bg-[#3e3391]'></div>

            </div>

            <div data-aos="fade-up" className='flex gap-11 flex-col xl:flex-row'>

                <div className="flex-1 max-w-2xl mx-auto">
                    <div className='h-[347px] w-full  mb-5 relative overflow-hidden'>
                        <Image src={'/' + array[img1]} className='absolute object-cover grayscale' alt='Steel2' quality={100} fill={true} />
                    </div>
                    <div className='flex gap-[10px] justify-center mb-12'>
                        <div onClick={() => setImg1(0)} className={`h-[10px] w-[79px] ${img1 == 0 ? 'bg-white' : 'bg-[#707070]'}  cursor-pointer`}></div>
                        <div onClick={() => setImg1(1)} className={`h-[10px] w-[79px] ${img1 == 1 ? 'bg-white' : 'bg-[#707070]'}  cursor-pointer`}></div>
                        <div onClick={() => setImg1(2)} className={`h-[10px] w-[79px] ${img1 == 2 ? 'bg-white' : 'bg-[#707070]'}  cursor-pointer`}></div>
                    </div>
                    <p className='font-archivo font-black text-lg mb-6'>10/07/2023</p>
                    <div className='w-[85px] bg-[#575757] h-[1px] mb-9'></div>
                    <div className='font-rubik font-normal text-base lg:text-xl mb-5'>{p1Large ? p1 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros.'}</div>
                    <div onClick={() => setp1Large(!p1Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p1Large ? '-' : '+'}</p></div>

                </div>


                <div className="flex-1 max-w-2xl mx-auto">
                    <div className='h-[347px] w-full  mb-6 relative overflow-hidden'>
                        <Image src={'/' + array[img2]} className='absolute object-cover grayscale' alt='Steel2' quality={100} fill={true} />
                    </div>
                    <div className='flex gap-[10px] justify-center mb-12'>
                        <div onClick={() => setImg2(0)} className={`h-[10px] w-[79px] ${img2 == 0 ? 'bg-white' : 'bg-[#707070]'}  cursor-pointer`}></div>
                        <div onClick={() => setImg2(1)} className={`h-[10px] w-[79px] ${img2 == 1 ? 'bg-white' : 'bg-[#707070]'}  cursor-pointer`}></div>
                        <div onClick={() => setImg2(2)} className={`h-[10px] w-[79px] ${img2 == 2 ? 'bg-white' : 'bg-[#707070]'}  cursor-pointer`}></div>
                    </div>
                    <p className='font-archivo font-black text-lg mb-6'>10/07/2023</p>
                    <div className='w-[85px] bg-[#575757] h-[1px] mb-9'></div>
                    <div className='font-rubik font-normal text-base lg:text-xl mb-5'>{p2Large ? p2 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros.'}</div>
                    <div onClick={() => setp2Large(!p2Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p2Large ? '-' : '+'}</p></div>

                </div>
                <div className="flex-1 max-w-2xl mx-auto">
                    <div className='h-[347px] w-full  mb-6 relative overflow-hidden'>
                        <Image src={'/' + array[img3]} className='absolute object-cover grayscale' alt='Steel2' quality={100} fill={true} />
                    </div>
                    <div className='flex gap-[10px] justify-center mb-12'>
                        <div onClick={() => setImg3(0)} className={`h-[10px] w-[79px] ${img3 == 0 ? 'bg-white' : 'bg-[#707070]'}  cursor-pointer`}></div>
                        <div onClick={() => setImg3(1)} className={`h-[10px] w-[79px] ${img3 == 1 ? 'bg-white' : 'bg-[#707070]'}  cursor-pointer`}></div>
                        <div onClick={() => setImg3(2)} className={`h-[10px] w-[79px] ${img3 == 2 ? 'bg-white' : 'bg-[#707070]'}  cursor-pointer`}></div>
                    </div>
                    <p className='font-archivo font-black text-lg mb-6'>10/07/2023</p>
                    <div className='w-[85px] bg-[#575757] h-[1px] mb-9'></div>
              
                    <div className='font-rubik font-normal text-base lg:text-xl mb-5'>{p3Large ? p3 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac eros lacinia suscipit. Sed sed tortor eu eros.'}</div>
                    <div onClick={() => setp3Large(!p3Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p3Large ? '-' : '+'}</p></div>

                </div>
            </div>
        </div>
    )
}
