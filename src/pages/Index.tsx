
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
    <div className="min-h-screen bg-gradient-to-br from-peru-yellow/20 via-peru-orange/10 to-peru-pink/20">
      {/* Header */}
      <header className="bg-gradient-to-r from-peru-red to-peru-blue text-white py-8 px-4 shadow-lg">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Book className="h-12 w-12 animate-bounce-gentle" />
            <h1 className="text-4xl md:text-6xl font-title">
              Cuentos del Perú
            </h1>
            <Heart className="h-12 w-12 animate-bounce-gentle text-peru-yellow" />
          </div>
          <p className="text-xl md:text-2xl font-comic opacity-90">
            Descubre las historias tradicionales de nuestra tierra
          </p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-title text-peru-blue mb-4">
              Explora Nuestra Biblioteca
            </h2>
            <p className="text-lg font-comic text-gray-700 max-w-2xl mx-auto mb-6">
              Busca por título, autor o región. Usa los filtros para encontrar exactamente lo que necesitas para tu clase.
            </p>
          </div>
          
          <div className="space-y-6">
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
          
          <div className="text-center mt-6">
            <p className="text-peru-blue font-comic text-lg">
              <span className="font-bold">{filteredStories.length}</span> cuentos encontrados
              {selectedAuthor && <span className="text-peru-green"> • Autor: {selectedAuthor}</span>}
              {selectedRegion && <span className="text-peru-purple"> • Región: {selectedRegion}</span>}
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onClick={() => handleStorySelect(story)}
              />
            ))}
          </div>
          
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
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
                className="bg-peru-blue hover:bg-peru-blue/80 text-white font-comic px-6 py-3 rounded-full transition-colors"
              >
                Ver todos los cuentos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Educational Info */}
      <section className="py-12 px-4 bg-gradient-to-r from-peru-green/10 to-peru-blue/10">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-title text-peru-blue mb-4">
              Literatura Peruana para Educadores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-white/80 p-6 rounded-2xl shadow-lg">
              <Globe className="h-12 w-12 text-peru-green mx-auto mb-4" />
              <h3 className="text-xl font-title text-peru-blue mb-2">
                Diversidad Cultural
              </h3>
              <p className="font-comic text-gray-700">
                Cuentos de las tres regiones del Perú: Costa, Sierra y Selva
              </p>
            </div>
            
            <div className="text-center bg-white/80 p-6 rounded-2xl shadow-lg">
              <Star className="h-12 w-12 text-peru-orange mx-auto mb-4" />
              <h3 className="text-xl font-title text-peru-blue mb-2">
                Autores Reconocidos
              </h3>
              <p className="font-comic text-gray-700">
                Desde César Vallejo hasta tradiciones orales ancestrales
              </p>
            </div>
            
            <div className="text-center bg-white/80 p-6 rounded-2xl shadow-lg">
              <Book className="h-12 w-12 text-peru-purple mx-auto mb-4" />
              <h3 className="text-xl font-title text-peru-blue mb-2">
                Recurso Educativo
              </h3>
              <p className="font-comic text-gray-700">
                Herramienta perfecta para profesores y estudiantes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-peru-blue text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="font-comic text-lg">
            Preservando nuestras tradiciones para las futuras generaciones 🇵🇪
          </p>
          <p className="font-comic text-sm opacity-75 mt-2">
            Una herramienta educativa para conocer la rica literatura peruana
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
