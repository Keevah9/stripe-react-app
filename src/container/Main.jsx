import React from 'react'
import logo from '../assets/phone.svg'
import { useGeneralContext } from '../container/Context'
const Main = () => {
  const {closeSubmenu} = useGeneralContext()
  return (
    <section className='mx-auto text-black sm:flex justify-between w-full h-full lg:w-4/6 gap-16 py-4 sm:mt-28 items-end ' onMouseOver={closeSubmenu}>
      <div className='text-center sm:text-left sm:w-2/4 mt-8i sm:mt-0 '>
        <h1 className=' sm:text-left w-full font-bold text-5xl md:text-7xl sm:text-6xl'>
          PAYMENTS <span className=' sm:text-left sm:block'>infrastructure </span>
          <span className=' block'>for the internet</span>
          
        </h1>
        <p className='pt-8'>Millions of companies of all sizes-from startups to Fortune 500s-use Stripe's software and APIs to accpet payments, send payouts, and manage their businesses online</p>
        <button className='mx-auto block  sm:mx-0 my-8 bg-black text-white rounded px-4 py-2'> Start now</button>
      </div>
      
        <div className=' h-[45rem] justify-center w-full sm:w-2/6  flex'>
        <img 
          src={logo}
          alt='stripe phone'
          className='w-full'
        />
      </div>
    </section>
  )
}

export default Main