import React, { useRef, useEffect } from 'react';
import { Brain, Microscope, BookOpen, ArrowDown, Leaf, Heart, Shield } from 'lucide-react';

const KnowledgeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.knowledge-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('animate-fade-in');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('ciencia');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="conhecimento" className="py-16 md:py-24 bg-gradient-to-b from-white to-natural-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="knowledge-item opacity-0 transition-all duration-700">
            <div className="bg-gradient-to-r from-natural-600 to-earth-600 rounded-2xl p-6 md:p-8 text-white text-center">
              <BookOpen className="mx-auto mb-4 text-white" size={48} />
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                O Que Você Vai Descobrir em Nosso Guia Completo
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Mais de 3.000 receitas naturais testadas e aprovadas, organizadas por condição de saúde, 
                com instruções detalhadas de preparo, dosagem e tempo de tratamento.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold mb-2">Diabetes & Glicemia</h4>
                  <p className="text-sm text-white/80">Controle natural do açúcar no sangue</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold mb-2">Ansiedade & Estresse</h4>
                  <p className="text-sm text-white/80">Acalme sua mente naturalmente</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold mb-2">Insônia & Sono</h4>
                  <p className="text-sm text-white/80">Durma profundamente sem remédios</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold mb-2">Dores & Inflamação</h4>
                  <p className="text-sm text-white/80">Alívio natural e duradouro</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold mb-2">Digestão & Intestino</h4>
                  <p className="text-sm text-white/80">Saúde digestiva completa</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold mb-2">Imunidade & Energia</h4>
                  <p className="text-sm text-white/80">Fortaleça suas defesas naturais</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#ciencia" 
              onClick={handleScrollToNext}
              className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-lg"
            >
              <ArrowDown size={18} className="inline mr-2" />
              Ver Mais Detalhes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;