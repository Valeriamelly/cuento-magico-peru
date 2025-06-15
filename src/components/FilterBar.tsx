
import React from 'react';
import { Filter, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { authors, regions } from '@/data/stories';

interface FilterBarProps {
  selectedAuthor: string;
  selectedRegion: string;
  onAuthorChange: (author: string) => void;
  onRegionChange: (region: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedAuthor,
  selectedRegion,
  onAuthorChange,
  onRegionChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center items-center">
      {/* Filtro por Autor */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-peru-blue text-peru-blue hover:bg-peru-blue hover:text-white font-comic text-xs md:text-sm w-full sm:w-auto h-10 md:h-auto px-3 md:px-4"
          >
            <User className="h-3 w-3 md:h-4 md:w-4 mr-2 shrink-0" />
            <span className="truncate">
              {selectedAuthor || 'Todos los Autores'}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 max-h-60 overflow-y-auto">
          <DropdownMenuLabel className="font-comic">Seleccionar Autor</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => onAuthorChange('')}
            className="font-comic"
          >
            Todos los Autores
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {authors.map((author) => (
            <DropdownMenuItem
              key={author}
              onClick={() => onAuthorChange(author)}
              className="font-comic"
            >
              {author}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Filtro por Región */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-peru-green text-peru-green hover:bg-peru-green hover:text-white font-comic text-xs md:text-sm w-full sm:w-auto h-10 md:h-auto px-3 md:px-4"
          >
            <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-2 shrink-0" />
            <span className="truncate">
              {selectedRegion || 'Todas las Regiones'}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 max-h-60 overflow-y-auto">
          <DropdownMenuLabel className="font-comic">Seleccionar Región</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => onRegionChange('')}
            className="font-comic"
          >
            Todas las Regiones
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {regions.map((region) => (
            <DropdownMenuItem
              key={region}
              onClick={() => onRegionChange(region)}
              className="font-comic"
            >
              {region}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Botón para limpiar filtros */}
      {(selectedAuthor || selectedRegion) && (
        <Button
          variant="outline"
          onClick={() => {
            onAuthorChange('');
            onRegionChange('');
          }}
          className="border-peru-red text-peru-red hover:bg-peru-red hover:text-white font-comic text-xs md:text-sm w-full sm:w-auto h-10 md:h-auto px-3 md:px-4"
        >
          <Filter className="h-3 w-3 md:h-4 md:w-4 mr-2 shrink-0" />
          Limpiar Filtros
        </Button>
      )}
    </div>
  );
};

export default FilterBar;
