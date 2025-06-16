
import React, { useState } from 'react';
import { X, Info, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-0">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 w-full h-full md:max-w-6xl md:max-h-[95vh] md:rounded-3xl flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Header minimalista */}
        <div className="relative flex items-center justify-between p-4 md:p-6 bg-white/80 backdrop-blur-sm border-b border-peru-yellow/20">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="text-2xl">{story.coverImage}</div>
            <h2 className="text-xl md:text-2xl font-title text-peru-blue truncate">{story.title}</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="p-2 rounded-full hover:bg-peru-green/10 text-peru-green transition-colors duration-300"
            >
              <Info className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-peru-red/10 text-peru-red transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Panel de información deslizable */}
        {showInfo && (
          <div className="bg-white/95 backdrop-blur-sm border-b border-peru-green/20 p-4 md:p-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><span className="font-bold text-peru-blue">Autor:</span> <span className="text-gray-700">{story.author}</span></div>
              <div><span className="font-bold text-peru-blue">Región:</span> <span className="text-gray-700">{story.region}</span></div>
              <div className="md:col-span-2"><span className="font-bold text-peru-blue">Enseñanza:</span> <span className="text-gray-700">{story.moralLesson}</span></div>
              <div className="md:col-span-2"><span className="font-bold text-peru-blue">Contexto Cultural:</span> <span className="text-gray-700">{story.culturalContext}</span></div>
            </div>
          </div>
        )}

        {/* Contenido principal - Layout libro abierto */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Página visual */}
          <div className="flex-1 bg-gradient-to-br from-peru-yellow/10 to-peru-blue/5 flex items-center justify-center p-6 md:p-8">
            <div className="text-center max-w-md">
              <div className="text-7xl md:text-8xl mb-6 transition-transform duration-500 hover:scale-105">
                {currentStoryPage.image}
              </div>
              <p className="text-base md:text-lg font-comic text-peru-blue/80 font-medium">
                {currentStoryPage.imageAlt}
              </p>
            </div>
          </div>

          {/* Página de texto */}
          <div className="flex-1 bg-white flex items-center justify-center p-6 md:p-8">
            <div className="max-w-md text-center">
              <p className="text-lg md:text-xl font-comic text-gray-800 leading-relaxed">
                {currentStoryPage.text}
              </p>
            </div>
          </div>
        </div>

        {/* Navegación integrada en el footer */}
        <div className="bg-white/90 backdrop-blur-sm border-t border-peru-yellow/20 p-4 md:p-6">
          <div className="flex items-center justify-between">
            {/* Botón anterior */}
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="flex items-center gap-2 px-6 py-3 bg-peru-blue hover:bg-peru-blue/80 text-white rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Anterior</span>
            </button>

            {/* Indicadores de página */}
            <div className="flex items-center gap-2">
              {story.pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-peru-red scale-125 shadow-lg'
                      : 'bg-peru-yellow/50 hover:bg-peru-yellow hover:scale-110'
                  }`}
                />
              ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={nextPage}
              disabled={currentPage === story.pages.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-peru-blue hover:bg-peru-blue/80 text-white rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Contador de página */}
          <div className="text-center mt-3">
            <span className="text-peru-blue font-comic text-sm">
              Página {currentPage + 1} de {story.pages.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;
