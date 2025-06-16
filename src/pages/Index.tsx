
import React, { useState, useMemo } from 'react';
import { Book, Heart, Search, Filter, MapPin, User, Sparkles, Zap } from 'lucide-react';
import StoryCard from '@/components/StoryCard';
import StoryViewer from '@/components/StoryViewer';
import { stories, Story, authors, regions } from '@/data/stories';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredStories = useMemo(() => {
    let filtered = stories;
    
    if (searchTerm) {
      filtered = filtered.filter(story =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedAuthor) {
      filtered = filtered.filter(story => story.author === selectedAuthor);
    }
    
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

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedAuthor('');
    setSelectedRegion('');
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section con diseño creativo */}
      <div className="relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl animate-pulse">🏔️</div>
          <div className="absolute top-20 right-20 text-4xl animate-pulse" style={{animationDelay: '1s'}}>🎭</div>
          <div className="absolute bottom-20 left-16 text-5xl animate-pulse" style={{animationDelay: '2s'}}>🦜</div>
          <div className="absolute bottom-32 right-32 text-3xl animate-pulse" style={{animationDelay: '0.5s'}}>🌺</div>
        </div>

        <div className="relative px-4 py-8 md:py-16">
          {/* Header principal */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <Book className="h-8 w-8 text-peru-blue" />
              <h1 className="text-3xl md:text-5xl font-title text-peru-blue">
                Cuentos del Perú
              </h1>
              <Heart className="h-8 w-8 text-peru-red" />
            </div>
            <p className="text-lg md:text-xl font-comic text-peru-blue/80 max-w-2xl mx-auto">
              Sumérgete en las historias mágicas de nuestra tierra ancestral
            </p>
          </div>

          {/* Barra de búsqueda integrada */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-peru-yellow/30">
              {/* Búsqueda principal */}
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-peru-blue/60" />
                <input
                  type="text"
                  placeholder="Busca tu cuento favorito..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-peru-blue/5 border-2 border-transparent focus:border-peru-yellow rounded-2xl text-lg font-comic outline-none transition-all duration-300 placeholder:text-peru-blue/50"
                />
              </div>

              {/* Filtros compactos */}
              <div className="flex flex-wrap gap-3 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {/* Filtro de autor */}
                  <select
                    value={selectedAuthor}
                    onChange={(e) => setSelectedAuthor(e.target.value)}
                    className="px-4 py-2 bg-peru-green/10 border border-peru-green/30 rounded-full text-sm font-comic text-peru-green focus:outline-none focus:ring-2 focus:ring-peru-green/50"
                  >
                    <option value="">Todos los autores</option>
                    {authors.map(author => (
                      <option key={author} value={author}>{author}</option>
                    ))}
                  </select>

                  {/* Filtro de región */}
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="px-4 py-2 bg-peru-purple/10 border border-peru-purple/30 rounded-full text-sm font-comic text-peru-purple focus:outline-none focus:ring-2 focus:ring-peru-purple/50"
                  >
                    <option value="">Todas las regiones</option>
                    {regions.map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>

                {/* Contador y limpiar */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-peru-yellow/20 rounded-full">
                    <Sparkles className="h-4 w-4 text-peru-orange" />
                    <span className="text-sm font-comic font-bold text-peru-blue">
                      {filteredStories.length} cuentos
                    </span>
                  </div>
                  
                  {(selectedAuthor || selectedRegion || searchTerm) && (
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 bg-peru-red/10 text-peru-red rounded-full text-sm font-comic hover:bg-peru-red hover:text-white transition-all duration-300"
                    >
                      Limpiar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de historias con diseño masonry */}
      <div className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          {filteredStories.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredStories.map((story, index) => (
                <div 
                  key={story.id}
                  className="break-inside-avoid animate-fade-in"
                  style={{animationDelay: `${0.1 * (index % 8)}s`}}
                >
                  <StoryCard
                    story={story}
                    onClick={() => handleStorySelect(story)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-title text-peru-blue mb-4">
                No encontramos cuentos
              </h3>
              <p className="text-xl font-comic text-gray-600 mb-8 max-w-md mx-auto">
                Intenta con otros términos de búsqueda o explora todas nuestras historias
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 bg-peru-blue hover:bg-peru-blue/80 text-white font-comic px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Zap className="h-5 w-5" />
                Ver todos los cuentos
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer minimalista */}
      <footer className="bg-peru-blue/5 border-t border-peru-blue/10 py-6">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="font-comic text-peru-blue/80">
            Preservando nuestras tradiciones ancestrales 🇵🇪 ✨
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
