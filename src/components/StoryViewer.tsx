
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
    <div className="fixed inset-0 bg-slate-900/95 flex items-center justify-center z-50 p-0">
      <div className="bg-gradient-to-br from-slate-50 to-indigo-50 w-full h-full md:max-w-6xl md:max-h-[95vh] md:rounded-2xl flex flex-col shadow-2xl overflow-hidden relative border border-slate-200">
        
        {/* Header moderno */}
        <div className="relative flex items-center justify-between p-4 md:p-6 bg-white/90 backdrop-blur-sm border-b border-slate-200">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="text-2xl">{story.coverImage}</div>
            <h2 className="text-xl md:text-2xl font-title text-slate-800 truncate">{story.title}</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="p-2 rounded-full hover:bg-emerald-100 text-emerald-600 transition-colors duration-300"
            >
              <Info className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-rose-100 text-rose-600 transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Panel de información moderno */}
        {showInfo && (
          <div className="bg-white/95 backdrop-blur-sm border-b border-slate-200 p-4 md:p-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><span className="font-bold text-indigo-700">Autor:</span> <span className="text-slate-600">{story.author}</span></div>
              <div><span className="font-bold text-indigo-700">Región:</span> <span className="text-slate-600">{story.region}</span></div>
              <div className="md:col-span-2"><span className="font-bold text-indigo-700">Enseñanza:</span> <span className="text-slate-600">{story.moralLesson}</span></div>
              <div className="md:col-span-2"><span className="font-bold text-indigo-700">Contexto Cultural:</span> <span className="text-slate-600">{story.culturalContext}</span></div>
            </div>
          </div>
        )}

        {/* Contenido principal - Layout libro abierto */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Página visual */}
          <div className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-6 md:p-8">
            <div className="text-center max-w-md">
              <div className="text-7xl md:text-8xl mb-6 transition-transform duration-300">
                {currentStoryPage.image}
              </div>
              <p className="text-base md:text-lg font-comic text-slate-600 font-medium">
                {currentStoryPage.imageAlt}
              </p>
            </div>
          </div>

          {/* Página de texto */}
          <div className="flex-1 bg-white flex items-center justify-center p-6 md:p-8">
            <div className="max-w-md text-center">
              <p className="text-lg md:text-xl font-comic text-slate-700 leading-relaxed">
                {currentStoryPage.text}
              </p>
            </div>
          </div>
        </div>

        {/* Navegación moderna */}
        <div className="bg-white/90 backdrop-blur-sm border-t border-slate-200 p-4 md:p-6">
          <div className="flex items-center justify-between">
            {/* Botón anterior */}
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100 shadow-lg"
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
                      ? 'bg-rose-500 scale-125 shadow-lg'
                      : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
                  }`}
                />
              ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={nextPage}
              disabled={currentPage === story.pages.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100 shadow-lg"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Contador de página */}
          <div className="text-center mt-3">
            <span className="text-indigo-600 font-comic text-sm">
              Página {currentPage + 1} de {story.pages.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;
