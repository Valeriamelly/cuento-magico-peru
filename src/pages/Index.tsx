
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
    <div className="min-h-screen bg-gradient-to-br from-peru-yellow/30 via-peru-orange/20 to-peru-pink/30 relative overflow-hidden">
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-10 left-10 animate-bounce text-4xl opacity-30">🌟</div>
      <div className="absolute top-20 right-20 animate-pulse text-3xl opacity-40">📚</div>
      <div className="absolute bottom-20 left-16 animate-bounce text-2xl opacity-35" style={{animationDelay: '1s'}}>🎨</div>
      <div className="absolute bottom-32 right-32 animate-pulse text-3xl opacity-30" style={{animationDelay: '0.5s'}}>🏔️</div>

      {/* Header compacto */}
      <header className="bg-gradient-to-r from-peru-red to-peru-blue text-white py-4 px-4 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-white/10 animate-pulse"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Book className="h-8 w-8 animate-bounce text-peru-yellow" />
            <h1 className="text-3xl md:text-4xl font-title animate-fade-in">
              Cuentos del Perú
            </h1>
            <Heart className="h-8 w-8 animate-pulse text-peru-yellow" />
          </div>
          <p className="text-lg font-comic opacity-90 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Descubre las historias tradicionales de nuestra tierra
          </p>
        </div>
      </header>

      {/* Sección de búsqueda y filtros compacta */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-title text-peru-blue mb-2 animate-fade-in">
              Explora Nuestra Biblioteca
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <FilterBar
                selectedAuthor={selectedAuthor}
                selectedRegion={selectedRegion}
                onAuthorChange={setSelectedAuthor}
                onRegionChange={setSelectedRegion}
              />
            </div>
          </div>
          
          <div className="text-center mt-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-peru-blue font-comic text-lg">
              <span className="font-bold animate-pulse">{filteredStories.length}</span> cuentos encontrados
              {selectedAuthor && <span className="text-peru-green"> • {selectedAuthor}</span>}
              {selectedRegion && <span className="text-peru-purple"> • {selectedRegion}</span>}
            </p>
          </div>
        </div>
      </section>

      {/* Grid de historias - más espacio */}
      <section className="py-4 px-4 flex-1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
            <div className="text-center py-8 animate-fade-in">
              <div className="text-6xl mb-4 animate-bounce">📚</div>
              <h3 className="text-2xl font-title text-peru-blue mb-2">
                No se encontraron cuentos
              </h3>
              <p className="text-lg font-comic text-gray-600 mb-4">
                Intenta con otros filtros o términos de búsqueda
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedAuthor('');
                  setSelectedRegion('');
                }}
                className="bg-peru-blue hover:bg-peru-blue/80 text-white font-comic px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse"
              >
                Ver todos los cuentos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Sección educativa compacta */}
      <section className="py-6 px-4 bg-gradient-to-r from-peru-green/20 to-peru-blue/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-white animate-pulse"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-title text-peru-blue mb-2 animate-fade-in">
              Literatura Peruana para Educadores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center bg-white/90 p-4 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in backdrop-blur-sm">
              <Globe className="h-10 w-10 text-peru-green mx-auto mb-3 animate-pulse" />
              <h3 className="text-lg font-title text-peru-blue mb-2">
                Diversidad Cultural
              </h3>
              <p className="font-comic text-gray-700 text-sm">
                Cuentos de las tres regiones del Perú
              </p>
            </div>
            
            <div className="text-center bg-white/90 p-4 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in backdrop-blur-sm" style={{animationDelay: '0.2s'}}>
              <Star className="h-10 w-10 text-peru-orange mx-auto mb-3 animate-bounce" />
              <h3 className="text-lg font-title text-peru-blue mb-2">
                Autores Reconocidos
              </h3>
              <p className="font-comic text-gray-700 text-sm">
                Desde César Vallejo hasta tradiciones ancestrales
              </p>
            </div>
            
            <div className="text-center bg-white/90 p-4 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in backdrop-blur-sm" style={{animationDelay: '0.4s'}}>
              <Book className="h-10 w-10 text-peru-purple mx-auto mb-3 animate-pulse" />
              <h3 className="text-lg font-title text-peru-blue mb-2">
                Recurso Educativo
              </h3>
              <p className="font-comic text-gray-700 text-sm">
                Herramienta perfecta para profesores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer compacto */}
      <footer className="bg-peru-blue text-white py-4 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-peru-blue via-peru-purple to-peru-blue animate-pulse opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <p className="font-comic text-base animate-fade-in">
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
