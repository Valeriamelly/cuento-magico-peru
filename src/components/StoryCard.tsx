
import React from 'react';
import { Book, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Story } from '@/data/stories';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onClick }) => {
  return (
    <Card 
      className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-peru-yellow/20 to-peru-orange/20 border-2 border-peru-yellow/50 rounded-3xl overflow-hidden animate-fade-in"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={story.coverImage}
          alt={story.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-2 left-2 bg-peru-red text-white px-3 py-1 rounded-full text-sm font-comic font-bold">
          {story.region}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-title text-peru-blue mb-2 line-clamp-2">
          {story.title}
        </h3>
        
        <div className="flex items-center gap-2 text-peru-green mb-3">
          <Book className="h-4 w-4" />
          <span className="text-sm font-comic font-semibold">{story.author}</span>
        </div>
        
        <p className="text-gray-700 text-sm font-comic mb-4 line-clamp-3">
          {story.summary}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-peru-purple">
            <Clock className="h-4 w-4" />
            <span className="text-xs font-comic font-semibold">{story.ageRange}</span>
          </div>
          
          <div className="flex items-center gap-1 text-peru-pink">
            <MapPin className="h-4 w-4" />
            <span className="text-xs font-comic font-semibold">{story.pages.length} páginas</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
