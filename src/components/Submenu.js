import React, {useEffect, useRef} from 'react'
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
      className={`${
        isSubmenuOpen
          ? " absolute top-[4rem] left-[50%]  mt-6 translate-x-[-50%] block"
          : "hidden"
      } `}
      ref={container}
    >
      <BiUpArrow className="absolute text-white top-0 left-[50%]" size={27} />
      <section className="mt-8   shadow-xl  rounded-xl bg-white">
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