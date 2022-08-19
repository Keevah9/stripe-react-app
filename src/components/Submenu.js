import React, {useEffect,useState, useRef} from 'react'
import {BiUpArrow} from 'react-icons/bi'
import { useGeneralContext } from '../container/Context'

const Submenu = () => {
  const {isSubmenuOpen, location, page:{page,links}} = useGeneralContext()

  const container = useRef(null)
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  
  }, [page, location]);
  return (
    <aside
      className={`${isSubmenuOpen} ? '    absolute top-[4rem] left-40  rounded shadow-xl mt-6 translate-x-[-50%] block : ' hidden' `}
      ref={container}
    >
      {/* <BiUpArrow className="absolute text-white  left-[50%]" /> */}
      <section className="mt-5  bg-white">
        
        <div className={`' flex py-12  px-4'`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a
                key={index}
                href={url}
                className="py-4 px-4 items-center capitalize flex gap-4"
              >
                {icon} {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
}

export default Submenu