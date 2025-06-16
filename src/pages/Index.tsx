
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section con diseño moderno educativo */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-4xl">📚</div>
          <div className="absolute top-20 right-20 text-3xl">🎭</div>
          <div className="absolute bottom-20 left-16 text-4xl">🌟</div>
          <div className="absolute bottom-32 right-32 text-3xl">✨</div>
        </div>

        <div className="relative px-4 py-12 md:py-20">
          {/* Header principal */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-6 px-8 py-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl">
              <Book className="h-8 w-8 text-indigo-600" />
              <h1 className="text-3xl md:text-5xl font-title text-indigo-800">
                Cuentos del Perú
              </h1>
              <Heart className="h-8 w-8 text-rose-500" />
            </div>
            <p className="text-lg md:text-xl font-comic text-white/90 max-w-2xl mx-auto">
              Descubre las historias mágicas de nuestra tierra ancestral
            </p>
          </div>

          {/* Barra de búsqueda moderna */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/30">
              {/* Búsqueda principal */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Busca tu cuento favorito..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 rounded-xl text-lg font-comic outline-none transition-all duration-300 placeholder:text-slate-400"
                />
              </div>

              {/* Filtros modernos */}
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {/* Filtro de autor */}
                  <select
                    value={selectedAuthor}
                    onChange={(e) => setSelectedAuthor(e.target.value)}
                    className="px-4 py-2 bg-emerald-50 border-2 border-emerald-200 rounded-lg text-sm font-comic text-emerald-700 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
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
                    className="px-4 py-2 bg-violet-50 border-2 border-violet-200 rounded-lg text-sm font-comic text-violet-700 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  >
                    <option value="">Todas las regiones</option>
                    {regions.map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>

                {/* Contador y limpiar */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-amber-100 border border-amber-200 rounded-lg">
                    <Sparkles className="h-4 w-4 text-amber-600" />
                    <span className="text-sm font-comic font-bold text-amber-800">
                      {filteredStories.length} cuentos
                    </span>
                  </div>
                  
                  {(selectedAuthor || selectedRegion || searchTerm) && (
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 bg-rose-100 text-rose-700 border border-rose-200 rounded-lg text-sm font-comic hover:bg-rose-200 transition-all duration-300"
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

      {/* Grid de historias mejorado */}
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          ) : (
            <div className="text-center py-16">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-title text-slate-700 mb-4">
                No encontramos cuentos
              </h3>
              <p className="text-xl font-comic text-slate-600 mb-8 max-w-md mx-auto">
                Intenta con otros términos de búsqueda o explora todas nuestras historias
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-comic px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Zap className="h-5 w-5" />
                Ver todos los cuentos
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer moderno */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="font-comic text-slate-300">
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
