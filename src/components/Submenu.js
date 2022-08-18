import React, {useEffect,useState, useRef} from 'react'

import { useGeneralContext } from '../container/Context'

const Submenu = () => {
  const {isSubmenuOpen, location, page:{page,links}} = useGeneralContext()

  const container = useRef(null)
   const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);
  return (
    <aside
      className={`${isSubmenuOpen} ? 'p-12 w-fit  bg-white absolute z-30 top-[6rem]  left-[45%] rounded shadow-xl translate-x-[-50%]' : '' `}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`'grid gap-[1rem]' ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
}

export default Submenu