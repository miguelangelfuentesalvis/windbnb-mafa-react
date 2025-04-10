

export default function Header() {
   

  return (
    <header className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
       <img className="h-4" src='logo.svg'></img>
      <nav className="flex justify-center mt-4 md:mt-0">
        <div 
         
          className="flex border border-gray-300 rounded-xl shadow-sm cursor-pointer"
        >
          <div className="px-4 py-3 border-r">
            <p className="text-sm text-gray-400">Add location</p>
          </div>
          <div className="px-4 py-3 border-r">
            <p className="text-sm text-gray-400">Add guests</p>
          </div>
          <div className="px-4 py-3 flex items-center">
          <img className="size-5 text-[#EB5757]" src='search.svg'></img>
          </div>
        </div>
      </nav>
    </header>
  );
}