import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchModal from './components/SearchModal';
import StayCard from './components/StayCard';
import staysData from '../public/stays.json';
import useFilterStays from './hooks/useFilterStays';

export default function App() {
  const [stays, setStays] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Hook actualizado (sin FilterUI)
  const { filteredStays, filters, setFilters } = useFilterStays(stays);

  useEffect(() => {
    setStays(staysData);
  }, []);

  const staysCounterText =
    filteredStays.length === 0 ? 'No results' :
      filteredStays.length > 12 ? '12+ stays' :
        `${filteredStays.length} ${filteredStays.length === 1 ? 'stay' : 'stays'}`;

  const handleApplyFilters = (newFilters) => {
    setFilters({
      city: newFilters.city,
      guests: newFilters.guests
    });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header 
        onOpenModal={() => setIsModalOpen(true)}
        currentFilters={filters} 
      />
      <SearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApplyFilters={handleApplyFilters}
        currentFilters={filters}
      />
      
      {/* Se eliminó la línea <FilterUI /> */}

      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Stays in Finland</h1>
          <p className="text-gray-500">{staysCounterText}</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStays.map((stay, index) => (
            <StayCard key={`stay-${index}`} stay={stay} />
          ))}
        </ul>
      </main>
    </div>
  );
}