import { useState } from 'react';

export default function useFilterStays(stays) {
  const [filters, setFilters] = useState({
    city: null,
    guests: null
  });

  const filteredStays = stays.filter(stay => {
    const cityMatch = !filters.city || stay.city === filters.city;
    const guestsMatch = !filters.guests || stay.maxGuests >= filters.guests;
    return cityMatch && guestsMatch;
  });

  // Return actualizado (sin FilterUI)
  return { filteredStays, filters, setFilters };
}