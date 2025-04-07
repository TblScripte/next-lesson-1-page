import React from 'react'
import img1 from '@/shared/IMAGE.png'
import img2 from '@/shared/IMAGE (1).png'
import img3 from '@/shared/IMAGE (2).png'
import img4 from '@/shared/IMAGE (3).png'
import img5 from '@/shared/IMAGE (4).png'
import img6 from '@/shared/IMAGE (5).png'
import img7 from '@/shared/Frame.png'
import img8 from '@/shared/IMAGE (6).png'
import img9 from '@/shared/IMAGE (7).png'
import img10 from '@/shared/IMAGE (8).png'
import img11 from '@/shared/IMAGE (9).png'
import img12 from '@/shared/IMAGE (10).png'
import img13 from '@/shared/IMAGE (11).png'
import img14 from '@/shared/Frame (1).png'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
const Home = () => {
	return (
		<>
			<div
				className='w-full h-[800px] bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: `url(${img1.src})` }}
			>
				<div className='w-[85%] text-white flex justify-between pt-[40px] m-auto'>
					<h1>
            <Link href={"/"}>Collections</Link>
            Collections</h1>
					<h1>
            <Link href={"products"}>Products</Link>
            </h1>
					<h1>
            <Link href={"inspiration"}>Inspiration</Link>
            </h1>
					<h1>
            <Link href={"about"}>Aboutus</Link>
            </h1>
					<h1>
            Find a dealer</h1>
				</div>
				<div className='w-[85%] text-white flex justify-around m-auto mt-[7rem]'>
					<h1 className='text-[6rem]'>Lasting</h1>
					<h1 className='text-[6rem]'>memories</h1>
				</div>
			</div>
			<div />
			<div className='w-[90%] flex justify-between m-auto mt-[60px]'>
				<div>
					<h1 className='font-bold text-[4rem]'>
						Making <br /> tables <br /> heroes
					</h1>
					<p className='text-[25px] mt-[50px]'>
						Chairs, cabinets, but especially tables by Joli are <br />
						durable products, designed to last and to be used <br />
						intensively.
					</p>
					<div className='flex mt-[30px] items-center gap-[20px]'>
						<button className='p-[10px_30px] rounded-[40px] border-black border bg-none text-black'>
							About us
						</button>
						<h1>Collections</h1>
					</div>
				</div>
				<div className='w-[40%]'>
					<Image src={img2} alt='' className='ml-[50%]' />
					<div className='flex items-center mt-[30px] justify-between'>
						<Image src={img3} className='pb-[30px]' alt='' />
						<Image src={img4} alt='' />
					</div>
				</div>
			</div>
			<div className='bg-[#E5E2DE] h-[130vh]'>
				<div className='w-[90%] m-auto justify-between flex items-center'>
					<div className=' pt-[5rem]'>
						<h1 className='text-[5rem] font-normal'>
							Our <br /> collections
						</h1>
						<div className='flex text-[20px]  gap-[30px] mt-[10px]'>
							<h1>Central</h1>
							<h1>Olivo</h1>
							<h1>Morisot</h1>
							<h1>Curve</h1>
							<h1>Wire</h1>
							<h1>Marguerite</h1>
							<h1>Fizz</h1>
							<h1>Rafael</h1>
						</div>
						<h1 className='text-[20px] mt-[20px]'>Chagall</h1>
						<Image src={img5} className='mt-[40px]' alt='' />
						<p className='flex items-center'>
							ready to become the centerpiece of your home{' '}
							<Image src={img7} alt='' className='ml-[13rem] mt-[30px]' />{' '}
						</p>
					</div>
					<div>
						<Image src={img6} alt='' />
						<h1 className='mt-[30px]'>
							Believe us, this will be a real eye-catcher
						</h1>
					</div>
				</div>
				<div className='flex ml-[90%] items-center mb-[100px]'>
					<Image src={img7} alt='' />
					<h1 className='ml-[10px] mr-[10px]'>1 / 9</h1>
					<Image src={img7} alt='' />
				</div>
			</div>
			<div className='bg-white   flex flex-wrap items-center justify-between'>
				<div className='w-[50%] ml-[100px]'>
					<h1 className='text-[6rem] font-normal mb-[30px]'>
						Find a <br /> dealer
					</h1>
					<p className='text-[30px]'>
						We work together with dealers in 19 <br />
						countries, all over the world. Find out which <br />
						one is closest to you.
					</p>
					<input
						type='text'
						placeholder='Your location'
						className='border-gray-500 border p-[20px_40px] rounded-xl mt-[40px] mb-[30px]'
					/>
					<button className='bg-transparent block border p-[10px_30px] rounded-full'>
						Search
					</button>
				</div>
				<div>
					<Image src={img8} alt='' />
				</div>
			</div>
			<div className='bg-[#20201F] flex items-center justify-between'>
				<Image src={img9} alt='' className='ml-[100px]' />
				<div>
					<h1 className='text-white text-[4rem] text-center '>
						Terrace <br />
						Ceremonies & Meetings
					</h1>
					<button className='bg-transparent border ml-[40%] mt-[10px] p-[10px_30px] rounded-full border-white text-white'>
						Inspire me
					</button>
				</div>
				<div className='w-[40%]'>
					<Image src={img10} alt='' className='ml-[180px]' />
					<Image src={img11} alt='' className='mt-[30px]' />
				</div>
			</div>
			<div className='flex flex-col items-center'>
				<div>
					<h1 className='text-[5rem] text-center mt-[300px]'>
						Joli manages to offer designs <br />
						that are both <br />
						timelessly modern <br />
						and trendy
					</h1>
					<button className='bg-transparent border ml-[40%] mt-[10px] p-[10px_30px] rounded-full '>
						About us
					</button>
				</div>
			</div>
      <div className='bg-[#F7F7F7] flex flex-wrap mt-[50px] items-center justify-between'>
          <div>
            <Image src={img12} alt=''/>
          </div>
          <div className='w-[50%] ml-[100px]'>
            <h1 className='text-[6rem] font-normal mb-[30px]'>become  a <br /> dealer</h1>
            <p className='text-[30px]'>Do you want to become a Joli retailer? Please <br />
            submit the following form and we will <br />
              contact you!</p>
            
            <button className='bg-transparent block border p-[10px_30px] rounded-full'>Search</button>
          </div>
        </div>
        <Image alt='' src={img13}/>
        <div className="min-h-screen flex flex-col font-sans">
      <Head>
        <title>Joli</title>
        <meta name="description" content="Request our 2022 catalogue" />
        <link href={"/products"} rel="icon"  />
      </Head>
      <div className="bg-[#E5E2DE] flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-light tracking-wider mb-4">Request our 2022 catalogue.</h1>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="email address *"
              className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none"
            />
            <button className="border border-gray-400 rounded px-6 py-2 hover:bg-gray-200 transition">
              send
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <input type="checkbox" id="privacy" className="h-4 w-4" />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              I agree with the{' '}
              <a href="#" className="underline">
                Privacy & Cookie Policy
              </a>{' '}
              of Joli
            </label>
          </div>
        </div>
      </div>

      <footer className="bg-[#20201F] text-white py-8 px-16">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <h2 className="text-2xl font-light tracking-widest">
              <Image src={img14} alt='' />
            </h2>
          </div>

          <div>
            <h3 className=" text-[1.3rem] font-semibold mb-4">collections</h3>
            <ul className="space-y-2 text-[2rem]">
              <li><a href="#" className="hover:underline">Wire</a></li>
              <li><a href="#" className="hover:underline">Curve</a></li>
              <li><a href="#" className="hover:underline">Fizz</a></li>
              <li><a href="#" className="hover:underline">Marguerite</a></li>
            </ul>
          </div>

          <div>
            <h3 className=" text-[1.3rem] font-semibold mb-4">products</h3>
            <ul className="space-y-2 text-[2rem]">
              <li><a href="#" className="hover:underline">Tables</a></li>
              <li><a href="#" className="hover:underline">Chairs</a></li>
              <li><a href="#" className="hover:underline">Cabinets</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h3 className=" text-[1.3rem] font-semibold mb-4">inspiration</h3>
            <ul className="space-y-2 text-[2rem]">
              <li><a href="#" className="hover:underline">Joli Days</a></li>
              <li><a href="#" className="hover:underline">2022</a></li>
              <li><a href="#" className="hover:underline">Terrace</a></li>
              <li><a href="#" className="hover:underline">Ceremonies & Meetings</a></li>
            </ul>
          </div>

          <div>
            <h3 className=" text-[1.3rem] font-semibold mb-4">about us</h3>
            <ul className="space-y-2 text-[2rem]">
              <li><a href="#" className="hover:underline">Materials</a></li>
              <li><a href="#" className="hover:underline">Find a dealer</a></li>
              <li><a href="#" className="hover:underline">Professionals</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
            </ul>

            <h3 className="uppercase text-sm font-semibold mt-6 mb-4">contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Industrielaan 5</li>
              <li>8520 Kortrijk</li>
              <li><a href="mailto:info@joli.be" className="hover:underline">info@joli.be</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center text-sm">
          <div className="space-x-4">
            <a href="#" className="underline">Privacy & Cookie Policy</a>
            <a href="#" className="underline">Disclaimer</a>
          </div>
          <div className="flex items-center space-x-4">
            <span>made by skin</span>
            <div className="flex space-x-2">
              <a href="#" className="text-xl">f</a>
              <a href="#" className="text-xl">in</a>
              <a href="#" className="text-xl">p</a>
            </div>
          </div>
        </div>

      </footer>
    </div>
		</>
	)
}

export default Home
