import React,{useState} from 'react'
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useGeneralContext } from '../container/Context'
import Sidebar from './Sidebar'

export const Menu=()=>{
  const { openSubmenu, closeSubmenu, } = useGeneralContext()
  const display = (e)=>{
    const page = e.target.textContent
    const currentLocation = e.target.getBoundingClientRect()
    console.log(currentLocation)
    const center = (currentLocation.left + currentLocation.right) / 2
    console.log(center)
    const bottom = currentLocation.bottom - 3
    openSubmenu(page, {center, bottom})
  }
  return(
    <ul className='sm:flex gap-12 justify-center items-center '>
    <li>
      <button className='px-8' onMouseOver={display}>products</button>
    </li>
    <li>
      <button className='px-8' onMouseOver={display}>developers</button>
    </li>
    <li>
      <button className='px-8' onMouseOver={display}>company</button>
    </li>
  </ul>
  )
  
}
const Navbar = () => {
  const [menuToggle,setMenuToggle] = useState(false)
  
  return (
    <nav className=' sm:mx-auto text-white flex sm:justify-center w-full justify-between  lg:w-4/6 gap-12 py-8 '>
      <h3 className='font-bold text-3xl'>Stripe</h3>
      <div className='h-full flex  gap-16 w-full justify-center items-center hidden sm:block'>
        <Menu />
        
      </div>
      <button className='bg-black sm:block hidden text-white px-4 rounded-lg py-2 w-[100px] capitalize'>Sign in</button>
      
{menuToggle && (
        
        <div className='sm:hidden block absolute right-0 text-center px-8 bg-gray-500 top-0  w-full h-full text-black'>
          <div className='p-12 relative  bg-white w-full h-full'>
         <AiOutlineClose  size={30} onClick={()=> setMenuToggle(false)} className='absolute right-10'/>
          <Sidebar/>
          </div>
        </div>
        
      )}
      
      

<div className='sm:hidden block'>
        {!menuToggle 
? <AiOutlineMenu  size={27} onClick={()=> setMenuToggle(true)}/>
 : ''
}
      </div>
    </nav>
  )
}

export default Navbar