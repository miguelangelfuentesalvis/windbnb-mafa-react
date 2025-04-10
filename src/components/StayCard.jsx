import React from 'react'

export default function StayCard() {
  return (
    <ul id="filters-stays" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/*  <!-- Las stays se cargarán aquí --> */}
    <li className="flex flex-col rounded-lg">
            <figure className="w-full h-60">
                <img src="photo-prueba.jpeg" alt="${item.title}" className="w-full h-full object-cover rounded-4xl"/>
            </figure>
            <div className="flex justify-between items-center w-full text-gray-400 p-2">
                <div>
                    <p>
                        {/* ${item.superHost ? 
                            '<span className="border border-gray-950 rounded-2xl px-2.5 py-2 text-sm font-bold text-gray-700">SUPERHOST</span>' 
                            : ''} */}
                      {/*   <span>${item.type}${item.beds ? ` · ${item.beds} beds` : ''}</span> */}
                    </p>
                </div>
                <div className="flex items-center gap-1.5">
                    <img className="size-5 text-[#eb5757]" src='star.svg'>
                    {/* <img className="size-6 font-bold text-white" src='star.svg'></img> */}
                    </img>
                   {/*  <span>${item.rating}</span> */}
                </div>
            </div>
            {/* <h2 className="font-bold text-gray-700 p-2">${item.title}</h2> */}
        </li>
    
 </ul>
  )
}
