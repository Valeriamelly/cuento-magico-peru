
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
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white rounded-2xl md:rounded-3xl w-full h-full md:max-w-6xl md:max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header optimizado para móvil */}
        <div className="flex items-center justify-between p-3 md:p-6 border-b border-gray-200 bg-peru-yellow/10 rounded-t-2xl md:rounded-t-3xl shrink-0">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <Book className="h-5 w-5 md:h-6 md:w-6 text-peru-blue shrink-0" />
            <h2 className="text-lg md:text-2xl font-title text-peru-blue truncate">{story.title}</h2>
          </div>
          
          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowInfo(!showInfo)}
              className="border-peru-green text-peru-green hover:bg-peru-green hover:text-white h-8 w-8 md:h-auto md:w-auto p-1 md:p-2"
            >
              <Info className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="border-peru-red text-peru-red hover:bg-peru-red hover:text-white h-8 w-8 md:h-auto md:w-auto p-1 md:p-2"
            >
              <X className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>

        {/* Info Panel optimizado para móvil */}
        {showInfo && (
          <Card className="m-3 md:m-6 border-peru-green/50 bg-white shadow-lg shrink-0">
            <CardHeader className="bg-peru-green/10 rounded-t-lg p-3 md:p-6">
              <CardTitle className="text-peru-green font-title text-base md:text-lg">Información Cultural</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 md:space-y-3 bg-white p-3 md:p-6">
              <div className="text-sm md:text-base">
                <span className="font-comic font-bold text-peru-blue">Autor: </span>
                <span className="font-comic text-gray-700">{story.author}</span>
              </div>
              <div className="text-sm md:text-base">
                <span className="font-comic font-bold text-peru-blue">Región: </span>
                <span className="font-comic text-gray-700">{story.region}</span>
              </div>
              <div className="text-sm md:text-base">
                <span className="font-comic font-bold text-peru-blue">Enseñanza: </span>
                <span className="font-comic text-gray-700">{story.moralLesson}</span>
              </div>
              <div className="text-sm md:text-base">
                <span className="font-comic font-bold text-peru-blue">Contexto Cultural: </span>
                <span className="font-comic text-gray-700">{story.culturalContext}</span>
              </div>
              <div className="text-sm md:text-base">
                <span className="font-comic font-bold text-peru-blue">Edad Recomendada: </span>
                <span className="font-comic text-gray-700">{story.ageRange}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content - Layout adaptativo */}
        <div className="flex-1 flex flex-col md:flex-row bg-gray-50 overflow-hidden">
          {/* Image Section - Ahora con iconos vectoriales */}
          <div className="flex-1 p-3 md:p-6 order-1 md:order-1">
            <div className="h-48 md:h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-peru-yellow/20 via-white to-peru-blue/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl md:text-9xl mb-4 animate-bounce">
                  {currentStoryPage.image}
                </div>
                <p className="text-sm md:text-base font-comic text-peru-blue font-semibold px-4">
                  {currentStoryPage.imageAlt}
                </p>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 p-3 md:p-6 flex flex-col justify-center order-2 md:order-2">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-peru-yellow/20">
              <p className="text-base md:text-xl font-comic text-gray-800 leading-relaxed text-center">
                {currentStoryPage.text}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation optimizado para móvil */}
        <div className="flex items-center justify-between p-3 md:p-6 border-t border-gray-200 bg-white rounded-b-2xl md:rounded-b-3xl shrink-0">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-peru-blue hover:bg-peru-blue/80 text-white font-comic px-3 py-2 md:px-6 md:py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
            <span className="hidden sm:inline">Anterior</span>
            <span className="sm:hidden">Ant</span>
          </Button>

          <div className="flex items-center gap-1 md:gap-2 mx-2">
            {story.pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 ${
                  index === currentPage
                    ? 'bg-peru-red scale-110 md:scale-125'
                    : 'bg-peru-yellow/50 hover:bg-peru-yellow hover:scale-105 md:hover:scale-110'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === story.pages.length - 1}
            className="bg-peru-blue hover:bg-peru-blue/80 text-white font-comic px-3 py-2 md:px-6 md:py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <span className="sm:hidden">Sig</span>
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" />
          </Button>
        </div>

        {/* Page Counter */}
        <div className="text-center pb-2 md:pb-4 bg-white">
          <span className="text-peru-blue font-comic text-xs md:text-sm font-bold">
            Página {currentPage + 1} de {story.pages.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;
