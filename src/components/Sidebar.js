import React from 'react'
import sublinks from '../data'
const Sidebar = () => {

  return (
    <div className='text-left py-8 capitalize  h-full'>
      {sublinks.map((item,index)=>{
        const {links, page} =item
        return (
          <nav key={index} className="py-8 ">
            <h4 className="text-3xl font-bold py-8 ">{page}</h4>
            <div className="flex gap-12 w-5/6 flex-wrap justify-between">
              {links.map((link, index) => {
                const { label, url, icon } = link;
                return (
                  <a key={index} href={url} className='inline flex items-center gap-4'>
                    {icon} {label}
                  </a>
                );
              })}
            </div>
          </nav>
        );
      })}
    </div>
  )
}

export default Sidebar