import { useState, useEffect } from 'react';
import { slides } from '../data/presentation';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  FileText, 
  Monitor,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export function PresentationViewer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [showThumbnails, setShowThumbnails] = useState(false);

  const slide = slides[currentSlide];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes(!showNotes);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, showNotes]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className={`flex h-screen bg-gray-100 ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Main presentation area */}
      <div className="flex-1 flex flex-col">
        {/* Top toolbar */}
        <div className="bg-white border-b px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-primary">PPT Wizard</h1>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-600">
              Слайд {currentSlide + 1} из {slides.length}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowThumbnails(!showThumbnails)}
              className={`p-2 rounded hover:bg-gray-100 ${showThumbnails ? 'bg-gray-100' : ''}`}
              title="Показать миниатюры (T)"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`p-2 rounded hover:bg-gray-100 ${showNotes ? 'bg-gray-100' : ''}`}
              title="Показать заметки (N)"
            >
              <Monitor className="w-5 h-5" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded hover:bg-gray-100"
              title="Полноэкранный режим (F)"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Thumbnails sidebar */}
          {showThumbnails && (
            <div className="w-48 bg-white border-r overflow-y-auto p-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-full p-1 mb-2 rounded text-left transition-all ${
                    idx === currentSlide 
                      ? 'ring-2 ring-primary' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className={`aspect-video bg-white border rounded ${
                    idx === currentSlide ? 'border-primary' : 'border-gray-200'
                  } flex items-center justify-center text-xs text-gray-400`}>
                    <span className="text-center px-1">{s.title}</span>
                  </div>
                  <p className="text-xs text-center mt-1 truncate">{idx + 1}. {s.title}</p>
                </button>
              ))}
            </div>
          )}

          {/* Slide content */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 p-4 md:p-8 overflow-auto flex items-center justify-center">
              <div 
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  slide.type === 'title' || slide.type === 'final'
                    ? 'w-full max-w-5xl aspect-video'
                    : 'w-full max-w-5xl aspect-video'
                }`}
              >
                <div className="h-full p-6 md:p-10 overflow-auto">
                  {slide.content}
                </div>
              </div>
            </div>

            {/* Navigation bar */}
            <div className="bg-white border-t px-4 py-3 flex items-center justify-between">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentSlide === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Назад</span>
              </button>

              {/* Slide indicators */}
              <div className="flex items-center gap-1">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlide
                        ? 'bg-primary w-6'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentSlide === slides.length - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                <span className="hidden sm:inline">Далее</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker notes panel */}
      {showNotes && (
        <div className="w-96 bg-white border-l flex flex-col">
          <div className="border-b px-4 py-3 flex items-center justify-between">
            <h2 className="font-semibold text-gray-800">Заметки докладчика</h2>
            <button
              onClick={() => setShowNotes(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded mb-4">
              <p className="text-sm text-amber-800 font-semibold mb-1">Слайд {currentSlide + 1}</p>
              <p className="text-sm text-amber-700">{slide.title}</p>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {slide.speakerNotes}
            </p>
          </div>
          <div className="border-t px-4 py-2 bg-gray-50">
            <p className="text-xs text-gray-500">Нажмите N чтобы скрыть панель</p>
          </div>
        </div>
      )}
    </div>
  );
}
