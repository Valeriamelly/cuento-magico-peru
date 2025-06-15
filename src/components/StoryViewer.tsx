
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, X, Book, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Story } from '@/data/stories';

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ story, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const nextPage = () => {
    if (currentPage < story.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentStoryPage = story.pages[currentPage];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-peru-yellow/10 to-peru-orange/10 rounded-3xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-peru-yellow/30">
          <div className="flex items-center gap-3">
            <Book className="h-6 w-6 text-peru-blue" />
            <h2 className="text-2xl font-title text-peru-blue">{story.title}</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowInfo(!showInfo)}
              className="border-peru-green text-peru-green hover:bg-peru-green hover:text-white"
            >
              <Info className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="border-peru-red text-peru-red hover:bg-peru-red hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Info Panel */}
        {showInfo && (
          <Card className="m-6 border-peru-green/50 bg-peru-green/5">
            <CardHeader>
              <CardTitle className="text-peru-green font-title">Información Cultural</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-comic font-bold text-peru-blue">Región: </span>
                <span className="font-comic text-gray-700">{story.region}</span>
              </div>
              <div>
                <span className="font-comic font-bold text-peru-blue">Enseñanza: </span>
                <span className="font-comic text-gray-700">{story.moralLesson}</span>
              </div>
              <div>
                <span className="font-comic font-bold text-peru-blue">Contexto Cultural: </span>
                <span className="font-comic text-gray-700">{story.culturalContext}</span>
              </div>
              <div>
                <span className="font-comic font-bold text-peru-blue">Edad Recomendada: </span>
                <span className="font-comic text-gray-700">{story.ageRange}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Image Section */}
          <div className="flex-1 p-6">
            <div className="h-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={currentStoryPage.image}
                alt={currentStoryPage.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            <div className="bg-white/90 rounded-2xl p-8 shadow-lg">
              <p className="text-2xl font-comic text-gray-800 leading-relaxed text-center">
                {currentStoryPage.text}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between p-6 border-t border-peru-yellow/30">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-peru-blue hover:bg-peru-blue/80 text-white font-comic px-6 py-3 rounded-full disabled:opacity-50"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Anterior
          </Button>

          <div className="flex items-center gap-2">
            {story.pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage
                    ? 'bg-peru-red'
                    : 'bg-peru-yellow/50 hover:bg-peru-yellow'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === story.pages.length - 1}
            className="bg-peru-blue hover:bg-peru-blue/80 text-white font-comic px-6 py-3 rounded-full disabled:opacity-50"
          >
            Siguiente
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        {/* Page Counter */}
        <div className="text-center pb-4">
          <span className="text-peru-blue font-comic text-sm">
            Página {currentPage + 1} de {story.pages.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;
