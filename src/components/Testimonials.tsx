import React, { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    testimonialRefs.current.forEach((testimonial) => {
      if (testimonial) observer.observe(testimonial);
    });

    return () => {
      testimonialRefs.current.forEach((testimonial) => {
        if (testimonial) observer.unobserve(testimonial);
      });
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
    const nextSection = document.getElementById('produto');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="depoimentos" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-3 md:mb-4 leading-tight">
            Depoimentos Reais de <span className="text-natural-600">Transformação</span>
          </h2>
          <p className="text-base md:text-lg text-natural-700 max-w-2xl mx-auto px-2">
            Depoimentos reais de pessoas que recuperaram sua saúde com nossas receitas naturais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div 
            ref={el => testimonialRefs.current[0] = el}
            className="opacity-0 transition-opacity duration-700 rounded-lg md:rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://ervasmedicinaisonline.shop/wp-content/uploads/2025/06/AnyConv.com__depoimento04.webp" 
              alt="Depoimento de cliente satisfeito"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          
          <div 
            ref={el => testimonialRefs.current[1] = el}
            className="opacity-0 transition-opacity duration-700 rounded-lg md:rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://ervasmedicinaisonline.shop/wp-content/uploads/2025/06/AnyConv.com__depoimento06.webp" 
              alt="Depoimento de cliente satisfeito"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          
          <div 
            ref={el => testimonialRefs.current[2] = el}
            className="opacity-0 transition-opacity duration-700 rounded-lg md:rounded-xl overflow-hidden shadow-lg md:col-span-2 lg:col-span-1"
          >
            <img 
              src="https://ervasmedicinaisonline.shop/wp-content/uploads/2025/06/AnyConv.com__depoimento01-1.webp" 
              alt="Depoimento de cliente satisfeito"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center bg-natural-50 rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 max-w-2xl mx-auto border border-natural-100 shadow-sm md:shadow-md">
          <p className="text-base md:text-lg text-natural-800 mb-3 md:mb-4">
            Você também pode transformar sua saúde com ingredientes simples da sua cozinha
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#oferta" 
              onClick={handleScrollToOffers}
              className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
            >
              Quero Começar Minha Transformação
            </a>
            
            <a 
              href="#produto" 
              onClick={handleScrollToNext}
              className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              <ArrowDown size={16} className="inline mr-2" />
              Ver Mais Detalhes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;