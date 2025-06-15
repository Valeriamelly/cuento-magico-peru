
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-peru-blue" />
      </div>
      <Input
        type="text"
        placeholder="Buscar cuento o autor..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 pr-4 py-3 w-full rounded-full border-2 border-peru-yellow focus:border-peru-red focus:ring-peru-red text-lg font-comic bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
      />
    </div>
  );
};

export default SearchBar;
