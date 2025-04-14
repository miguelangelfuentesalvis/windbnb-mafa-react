import { useState, useEffect, useRef } from 'react';

export default function SearchModal({ isOpen, onClose, currentFilters, onApplyFilters }) {
  // Estado inicial con valores por defecto (nunca null/undefined)
  const [localFilters, setLocalFilters] = useState({
    city: currentFilters.city || "", // Aseguramos string vacío si es null
    adults: currentFilters.guests > 0 ? Math.max(1, currentFilters.guests) : 0,
    children: 0
  });

  const [showLocationList, setShowLocationList] = useState(false);
  const [showGuestsSelector, setShowGuestsSelector] = useState(false);
  const cities = ["Helsinki", "Turku", "Vaasa", "Oulu"];
  const modalRef = useRef(null);

  // Sincronización con valores por defecto
  useEffect(() => {
    if (isOpen) {
      setLocalFilters(prev => ({
        ...prev,
        city: currentFilters.city || "" // Siempre string
      }));
    }
  }, [currentFilters.city, isOpen]);

  // Cerrar modal al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleGuestChange = (type, operation) => {
    setLocalFilters(prev => ({
      ...prev,
      [type]: operation === 'increase' 
        ? prev[type] + 1 
        : Math.max(0, prev[type] - 1)
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      city: localFilters.city,
      guests: localFilters.adults + localFilters.children
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 z-50">
      <div ref={modalRef} className="p-4 bg-white h-[80vh] w-full shadow-md top-0">
        <p className="p-4">Edit your search</p>

        <button
          onClick={onClose}
          className="text-black text-2xl absolute top-4 right-4 cursor-pointer sm:hidden lg:hidden xl:hidden"
        >
          ×
        </button>

        <div className="p-6 lg:top-0 xl:top-0 flex flex-col sm:flex-row justify-between h-[70vh]">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {/* Input de ubicación (corregido) */}
            <div className="flex-1 relative">
              <div
                className="flex flex-col h-16 shadow-md bg-white border border-gray-100 rounded-2xl p-4 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowLocationList(!showLocationList);
                  setShowGuestsSelector(false);
                }}
              >
                <p className="text-sm">LOCATION</p>
                <input
                  id="input-location"
                  type="text"
                  className="outline-none"
                  placeholder="Add location"
                  value={localFilters.city} // Ahora siempre string (nunca null)
                  readOnly
                />
              </div>

              {showLocationList && (
                <ul 
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  {cities.map(city => (
                    <li
                      key={city}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLocalFilters({ ...localFilters, city });
                        setShowLocationList(false);
                      }}
                    >
                      {city}, Finland
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Input de huéspedes (ya estaba correcto) */}
            <div className="flex-1 relative">
              <div
                className="flex flex-col h-16 shadow-md bg-white border border-gray-100 rounded-2xl p-4 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGuestsSelector(!showGuestsSelector);
                  setShowLocationList(false);
                }}
              >
                <p className="text-sm">GUESTS</p>
                <input
                  id="input-guests"
                  type="text"
                  className="outline-none"
                  placeholder="Add guests"
                  value={
                    localFilters.adults + localFilters.children > 0
                      ? `${localFilters.adults + localFilters.children} guest${
                          localFilters.adults + localFilters.children !== 1 ? 's' : ''
                        }`
                      : ""
                  }
                  readOnly
                />
              </div>

              {showGuestsSelector && (
                <div
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mb-4" id="buttons-guests">
                    <p className="text-sm font-medium mb-2">Adults</p>
                    <div className="flex items-center gap-4">
                      <button
                        className="bg-gray-200 border border-gray-500 rounded w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                        onClick={() => handleGuestChange('adults', 'decrease')}
                      >
                        -
                      </button>
                      <span className="min-w-[20px] text-center font-bold">
                        {localFilters.adults}
                      </span>
                      <button
                        className="bg-gray-200 border border-gray-500 rounded w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                        onClick={() => handleGuestChange('adults', 'increase')}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div id="buttons-guests-children">
                    <p className="text-sm font-medium mb-2">Children</p>
                    <div className="flex items-center gap-4">
                      <button
                        className="bg-gray-200 border border-gray-500 rounded w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                        onClick={() => handleGuestChange('children', 'decrease')}
                      >
                        -
                      </button>
                      <span className="min-w-[20px] text-center font-bold">
                        {localFilters.children}
                      </span>
                      <button
                        className="bg-gray-200 border border-gray-500 rounded w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                        onClick={() => handleGuestChange('children', 'increase')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full p-1 flex rounded-2xl items-center justify-center sm:justify-end sm:items-end mt-1 sm:mt-0 sm:ml-4 lg:w-36 lg:h-16 md:w-36 md:h-16">
            <button
              onClick={() => {
                setShowLocationList(false);
                setShowGuestsSelector(false);
                handleApplyFilters();
              }}
              className="bg-[#eb5757] text-white shadow-md rounded-2xl h-16 w-40 sm:w-32 md:w-32 lg:w-36 gap-2 flex items-center justify-center hover:bg-[#e04a4a] transition-colors text-2xl md:h-12 lg:h-14"
            >
              <img src="search.svg" alt="Search" className="w-6 h-6 text-white" />
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}