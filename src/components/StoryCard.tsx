
import React from 'react';
import { Book, MapPin, Clock, User, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Story } from '@/data/stories';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onClick }) => {
  return (
    <Card 
      className="cursor-pointer transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-peru-yellow/50 bg-gradient-to-br from-white via-peru-yellow/10 to-peru-orange/20 border-3 border-peru-yellow/60 rounded-3xl overflow-hidden animate-fade-in group relative"
      onClick={onClick}
    >
      {/* Efecto brillante en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-2 left-2 text-xs opacity-50 animate-pulse">✨</div>
      <div className="absolute top-3 right-8 text-xs opacity-40 animate-bounce" style={{animationDelay: '0.5s'}}>🌟</div>
      
      <div className="relative h-44 overflow-hidden">
        <img
          src={story.coverImage}
          alt={story.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50" />
        
        {/* Badges animados */}
        <div className="absolute bottom-2 left-2 bg-peru-red text-white px-3 py-1 rounded-full text-sm font-comic font-bold transform transition-all duration-300 group-hover:scale-110 group-hover:bg-peru-red/90 shadow-lg">
          {story.region}
        </div>
        <div className="absolute top-2 right-2 bg-peru-blue text-white px-3 py-1 rounded-full text-xs font-comic font-bold transform transition-all duration-300 group-hover:scale-110 group-hover:bg-peru-blue/90 shadow-lg">
          {story.ageRange}
        </div>

        {/* Icono de brillo en hover */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125">
          <Sparkles className="h-8 w-8 text-white animate-pulse" />
        </div>
      </div>
      
      <CardContent className="p-5 relative">
        <h3 className="text-lg font-title text-peru-blue mb-3 line-clamp-2 leading-tight group-hover:text-peru-purple transition-colors duration-300">
          {story.title}
        </h3>
        
        <div className="flex items-center gap-2 text-peru-green mb-3 bg-peru-green/15 p-2 rounded-xl border border-peru-green/30 transform transition-all duration-300 group-hover:bg-peru-green/25 group-hover:scale-105">
          <User className="h-4 w-4 animate-pulse" />
          <span className="text-sm font-comic font-bold">{story.author}</span>
        </div>
        
        <p className="text-gray-700 text-sm font-comic mb-4 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
          {story.summary}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-peru-purple bg-peru-purple/10 px-2 py-1 rounded-lg transform transition-all duration-300 group-hover:bg-peru-purple/20 group-hover:scale-105">
            <Clock className="h-3 w-3 animate-pulse" />
            <span className="text-xs font-comic font-semibold">{story.ageRange}</span>
          </div>
          
          <div className="flex items-center gap-1 text-peru-pink bg-peru-pink/10 px-2 py-1 rounded-lg transform transition-all duration-300 group-hover:bg-peru-pink/20 group-hover:scale-105">
            <Book className="h-3 w-3 animate-bounce" />
            <span className="text-xs font-comic font-semibold">{story.pages.length} páginas</span>
          </div>
        </div>

        {/* Indicador de interactividad */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
          <div className="bg-peru-yellow text-peru-blue px-2 py-1 rounded-full text-xs font-comic font-bold animate-pulse">
            ¡Toca para leer!
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
