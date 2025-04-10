import React from 'react'
import Header from './components/Header'
import SearchModal from './components/SearchModal'
import StayCard from './components/StayCard'

export default function App() {
  return (
    <body className="flex flex-col min-h-screen">
      {/*  <!-- Header --> */}
      <Header />

      {/* <!-- Modal --> */}

      <SearchModal />

      {/* <!-- Contenido con habitaciones --> */}
      <main className="flex-1 p-6 ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Stays in Finland</h1>
          <p id="stays-counter" className="text-gray-500"><span>12+</span> stays</p>
        </div>
        <StayCard />
      </main>
    </body>
  )
}
