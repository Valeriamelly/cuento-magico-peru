
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
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {/* Filtro por Autor */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-peru-blue text-peru-blue hover:bg-peru-blue hover:text-white font-comic"
          >
            <User className="h-4 w-4 mr-2" />
            {selectedAuthor || 'Todos los Autores'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
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
            className="border-peru-green text-peru-green hover:bg-peru-green hover:text-white font-comic"
          >
            <MapPin className="h-4 w-4 mr-2" />
            {selectedRegion || 'Todas las Regiones'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
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
          className="border-peru-red text-peru-red hover:bg-peru-red hover:text-white font-comic"
        >
          <Filter className="h-4 w-4 mr-2" />
          Limpiar Filtros
        </Button>
      )}
    </div>
  );
};

export default FilterBar;
