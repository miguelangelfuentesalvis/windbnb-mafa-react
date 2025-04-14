export default function Header({ onOpenModal, currentFilters }) {
  return (
    <header className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex justify-start md:justify-center">
        <img className="h-4" src='logo.svg' alt="Windbnb Logo" />
      </div>
      <nav className="flex justify-center mt-4 md:mt-0">
        <div 
          className="flex border border-gray-300 rounded-xl shadow-sm cursor-pointer"
          onClick={onOpenModal}
        >
          <div className="px-4 py-3 border-r">
            <p className="text-sm">
              {currentFilters.city || "Add location"}  {/* Muestra ciudad */}
            </p>
          </div>
          <div className="px-4 py-3 border-r">
            <p className="text-sm">
              {currentFilters.guests > 0 
                ? `${currentFilters.guests} guest${currentFilters.guests !== 1 ? 's' : ''}` 
                : "Add guests"  // Muestra huéspedes
              }
            </p>
          </div>
          <div className="px-4 py-3 flex items-center">
            <img className="w-5 h-5" src='search.svg' alt="Search" />
          </div>
        </div>
      </nav>
    </header>
  );
}