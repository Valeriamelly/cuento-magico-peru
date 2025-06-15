
import React, { useState, useMemo } from 'react';
import { Book, Heart, Star, Globe } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import StoryCard from '@/components/StoryCard';
import StoryViewer from '@/components/StoryViewer';
import { stories, Story } from '@/data/stories';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const filteredStories = useMemo(() => {
    let filtered = stories;
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(story =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filtrar por autor
    if (selectedAuthor) {
      filtered = filtered.filter(story => story.author === selectedAuthor);
    }
    
    // Filtrar por región
    if (selectedRegion) {
      filtered = filtered.filter(story => story.region === selectedRegion);
    }
    
    return filtered;
  }, [searchTerm, selectedAuthor, selectedRegion]);

  const handleStorySelect = (story: Story) => {
    setSelectedStory(story);
  };

  const handleCloseViewer = () => {
    setSelectedStory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-peru-yellow/10 via-white to-peru-blue/5 relative overflow-hidden">
      {/* Elementos decorativos optimizados para móvil */}
      <div className="absolute top-4 left-4 md:top-10 md:left-10 animate-bounce text-lg md:text-3xl opacity-15 md:opacity-20">🌟</div>
      <div className="absolute top-8 right-6 md:top-20 md:right-20 animate-pulse text-sm md:text-2xl opacity-20 md:opacity-25">📚</div>
      <div className="hidden md:block absolute bottom-20 left-16 animate-bounce text-xl opacity-20" style={{animationDelay: '1s'}}>🎨</div>
      <div className="hidden md:block absolute bottom-32 right-32 animate-pulse text-2xl opacity-20" style={{animationDelay: '0.5s'}}>🏔️</div>

      {/* Header optimizado para móvil */}
      <header className="bg-peru-blue text-white py-4 md:py-6 px-4 shadow-lg">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
            <Book className="h-6 w-6 md:h-8 md:w-8 animate-bounce text-peru-yellow" />
            <h1 className="text-2xl md:text-4xl font-title animate-fade-in">
              Cuentos del Perú
            </h1>
            <Heart className="h-6 w-6 md:h-8 md:w-8 animate-pulse text-peru-yellow" />
          </div>
          <p className="text-base md:text-lg font-comic opacity-90">
            Descubre las historias tradicionales de nuestra tierra
          </p>
        </div>
      </header>

      {/* Sección de búsqueda y filtros optimizada */}
      <section className="py-4 md:py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-title text-peru-blue mb-2 md:mb-3">
              Explora Nuestra Biblioteca
            </h2>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            
            <FilterBar
              selectedAuthor={selectedAuthor}
              selectedRegion={selectedRegion}
              onAuthorChange={setSelectedAuthor}
              onRegionChange={setSelectedRegion}
            />
          </div>
          
          <div className="text-center mt-4 md:mt-6">
            <p className="text-peru-blue font-comic text-lg md:text-xl">
              <span className="font-bold text-peru-red">{filteredStories.length}</span> cuentos encontrados
              {selectedAuthor && <span className="text-peru-green block md:inline"> • {selectedAuthor}</span>}
              {selectedRegion && <span className="text-peru-purple block md:inline"> • {selectedRegion}</span>}
            </p>
          </div>
        </div>
      </section>

      {/* Grid de historias optimizado para móvil */}
      <section className="py-4 md:py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {filteredStories.map((story, index) => (
              <div 
                key={story.id}
                className="animate-fade-in"
                style={{animationDelay: `${0.1 * (index % 8)}s`}}
              >
                <StoryCard
                  story={story}
                  onClick={() => handleStorySelect(story)}
                />
              </div>
            ))}
          </div>
          
          {filteredStories.length === 0 && (
            <div className="text-center py-8 md:py-12">
              <div className="text-4xl md:text-6xl mb-4 md:mb-6 animate-bounce">📚</div>
              <h3 className="text-2xl md:text-3xl font-title text-peru-blue mb-3 md:mb-4">
                No se encontraron cuentos
              </h3>
              <p className="text-lg md:text-xl font-comic text-gray-600 mb-4 md:mb-6 px-4">
                Intenta con otros filtros o términos de búsqueda
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedAuthor('');
                  setSelectedRegion('');
                }}
                className="bg-peru-blue hover:bg-peru-blue/80 text-white font-comic px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 text-base md:text-lg"
              >
                Ver todos los cuentos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer simplificado */}
      <footer className="bg-peru-blue text-white py-4 md:py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="font-comic text-base md:text-lg">
            Preservando nuestras tradiciones para las futuras generaciones 🇵🇪
          </p>
        </div>
      </footer>

      {/* Story Viewer Modal */}
      {selectedStory && (
        <StoryViewer
          story={selectedStory}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
};

export default Index;
