
import React from 'react';
import { Book, Clock, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Story } from '@/data/stories';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onClick }) => {
  return (
    <Card 
      className="cursor-pointer transform transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:shadow-xl md:hover:shadow-2xl hover:shadow-peru-yellow/30 md:hover:shadow-peru-yellow/50 bg-gradient-to-br from-white via-peru-yellow/5 to-peru-orange/10 border-2 border-peru-yellow/40 rounded-2xl md:rounded-3xl overflow-hidden animate-fade-in group relative touch-manipulation"
      onClick={onClick}
    >
      {/* Efecto brillante en hover - solo en desktop */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      {/* Elementos decorativos - reducidos en móvil */}
      <div className="absolute top-1 left-1 md:top-2 md:left-2 text-xs opacity-40 md:opacity-50 animate-pulse">✨</div>
      <div className="absolute top-2 right-6 md:top-3 md:right-8 text-xs opacity-30 md:opacity-40 animate-bounce" style={{animationDelay: '0.5s'}}>🌟</div>
      
      <div className="relative h-32 md:h-44 overflow-hidden bg-gradient-to-br from-peru-blue/10 to-peru-purple/10 flex items-center justify-center">
        {/* Icono vectorial grande como portada */}
        <div className="text-6xl md:text-8xl animate-bounce group-hover:scale-110 transition-transform duration-500">
          {story.coverImage}
        </div>
        
        {/* Badges optimizados para móvil */}
        <div className="absolute bottom-1 left-1 md:bottom-2 md:left-2 bg-peru-red text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-comic font-bold transform transition-all duration-300 group-hover:scale-105 md:group-hover:scale-110 group-hover:bg-peru-red/90 shadow-lg">
          {story.region}
        </div>
        <div className="absolute top-1 right-1 md:top-2 md:right-2 bg-peru-blue text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-comic font-bold transform transition-all duration-300 group-hover:scale-105 md:group-hover:scale-110 group-hover:bg-peru-blue/90 shadow-lg">
          {story.ageRange}
        </div>
      </div>
      
      <CardContent className="p-3 md:p-5 relative">
        <h3 className="text-base md:text-lg font-title text-peru-blue mb-2 md:mb-3 line-clamp-2 leading-tight group-hover:text-peru-purple transition-colors duration-300">
          {story.title}
        </h3>
        
        <div className="flex items-center gap-2 text-peru-green mb-2 md:mb-3 bg-peru-green/10 p-2 rounded-lg md:rounded-xl border border-peru-green/20 transform transition-all duration-300 group-hover:bg-peru-green/20 md:group-hover:scale-105">
          <User className="h-3 w-3 md:h-4 md:w-4 animate-pulse shrink-0" />
          <span className="text-xs md:text-sm font-comic font-bold truncate">{story.author}</span>
        </div>
        
        <p className="text-gray-700 text-xs md:text-sm font-comic mb-3 md:mb-4 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
          {story.summary}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-peru-purple bg-peru-purple/10 px-2 py-1 rounded-lg transform transition-all duration-300 group-hover:bg-peru-purple/20 md:group-hover:scale-105">
            <Clock className="h-3 w-3 animate-pulse shrink-0" />
            <span className="text-xs font-comic font-semibold">{story.ageRange}</span>
          </div>
          
          <div className="flex items-center gap-1 text-peru-pink bg-peru-pink/10 px-2 py-1 rounded-lg transform transition-all duration-300 group-hover:bg-peru-pink/20 md:group-hover:scale-105">
            <Book className="h-3 w-3 animate-bounce shrink-0" />
            <span className="text-xs font-comic font-semibold">{story.pages.length} pág</span>
          </div>
        </div>

        {/* Indicador de interactividad - solo desktop */}
        <div className="hidden md:block absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
          <div className="bg-peru-yellow text-peru-blue px-2 py-1 rounded-full text-xs font-comic font-bold animate-pulse">
            ¡Toca para leer!
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
