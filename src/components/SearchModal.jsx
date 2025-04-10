import React from 'react'

export default function SearchModal() {
  return (
    <div id="modal" className="p-4 bg-white h-[80vh] w-full fixed shadow-md top-0 hidden">

    <p className="p-4">Edit your search</p>

    <label id="cerra-modal"
        className="text-black text-2xl absolute top-4 right-4 cursor-pointer sm:hidden lg:hidden xl:hidden">X</label>
    <div id="contenedor-modal" className="p-6 lg:top-0 xl:top-0 flex flex-col sm:flex-row justify-between h-[70vh]">

       {/*  <!-- Grupo inputs --> */}

        <div className="flex flex-col sm:flex-row ">

           {/*  <!-- Ubicación --> */}

            <div className="flex-1 relative">
                <div className="flex flex-col h-16 shadow-md bg-white border border-gray-100 rounded-2xl p-4">
                    <p className="text-sm">LOCATION</p>
                    <input id="input-location" type="text" className="outline-none" placeholder="Add location"/>
                </div>

                <ul id="ul-location"
                    className="hidden absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <li className="p-3 hover:bg-gray-100 cursor-pointer">Helsinki, Finland</li>
                    <li className="p-3 hover:bg-gray-100 cursor-pointer">Turku, Finland</li>
                    <li className="p-3 hover:bg-gray-100 cursor-pointer">Vaasa, Finland</li>
                    <li className="p-3 hover:bg-gray-100 cursor-pointer">Oulu, Finland</li>
                </ul>
            </div>


         {/*    <!-- Huéspedes --> */}

            <div className="flex-1 relative">

                <div className="flex flex-col h-16 shadow-md bg-white border border-gray-100 rounded-2xl p-4">
                    <p className="text-sm">GUESTS</p>
                    <input id="input-guests" type="text" className="outline-none" placeholder="Add guests" readonly/>
                </div>

                <div className="hidden absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4"
                    id="guests-selector">
                    <div className="mb-4" id="buttons-guests">
                        <p className="text-sm font-medium mb-2">Adults</p>
                        <div className="flex items-center gap-4">
                            <button
                                className="bg-gray-200 border border-gray-500 rounded w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                                value="-">-</button>
                            <span id="display-adults" className="min-w-[20px] text-center font-bold">0</span>
                            <button
                                className="bg-gray-200 border border-gray-500 rounded w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                                value="+">+</button>
                        </div>
                    </div>

                    <div id="buttons-guests-children">
                        <p className="text-sm font-medium mb-2">Children</p>
                        <div className="flex items-center gap-4">
                            <button
                                className="bg-gray-200 border border-gray-500 rounded w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                                value="-">-</button>
                            <span id="display-children" className="min-w-[20px] text-center font-bold">0</span>
                            <button
                                className="bg-gray-200 border border-gray-500 rounded w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                                value="+">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


       {/*  <!-- Botón Search --> */}

        <div className="w-full md:shadow-md p-2 flex rounded-2xl items-center justify-center sm:justify-end sm:items-end mt-4 sm:mt-0 sm:ml-4 lg:w-60 lg:flex md:flex">
            <button id="search-btn"
                className="bg-[#eb5757] text-white rounded-3xl h-16 w-40 sm:w-32 md:w-32 lg:w-32 gap-2 flex items-center justify-center hover:bg-[#e04a4a] transition-colors text-2xl md:h-12 lg:h-12">
                <img className="size-6 font-bold text-white" src='search.svg'></img>
                search
            </button>
        </div>
    </div>
</div>

  )
}
