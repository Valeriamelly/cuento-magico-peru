
import React from 'react';
import { Clock, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Story } from '@/data/stories';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onClick }) => {
  return (
    <Card 
      className="cursor-pointer group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg h-full flex flex-col"
      onClick={onClick}
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10"></div>
      
      {/* Header con emoji y badges */}
      <div className="relative bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-50 p-6 text-center">
        {/* Emoji principal */}
        <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
          {story.coverImage}
        </div>
        
        {/* Badges flotantes */}
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {story.region}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="inline-block bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {story.ageRange}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
        {/* Título */}
        <h3 className="text-xl font-title text-slate-800 leading-tight group-hover:text-indigo-700 transition-colors duration-300">
          {story.title}
        </h3>
        
        {/* Autor */}
        <div className="flex items-center gap-2 text-emerald-600">
          <User className="h-4 w-4 shrink-0" />
          <span className="text-sm font-comic font-semibold truncate">{story.author}</span>
        </div>
        
        {/* Resumen */}
        <p className="text-slate-600 text-sm font-comic leading-relaxed line-clamp-3 flex-1">
          {story.summary}
        </p>
        
        {/* Footer con información */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-1 text-violet-600">
            <Clock className="h-3 w-3" />
            <span className="text-xs font-comic">{story.ageRange}</span>
          </div>
          
          <div className="text-xs font-comic text-amber-600 font-semibold">
            {story.pages.length} páginas
          </div>
        </div>

        {/* Indicador de hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
          <div className="bg-amber-400 text-slate-800 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            ¡Leer ahora!
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
