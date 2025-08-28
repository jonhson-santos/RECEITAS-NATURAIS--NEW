import React, { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.gallery-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('animate-fade-in');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
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
    const nextSection = document.getElementById('beneficios');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ingredients = [
    {
      name: "Gengibre",
      properties: "Anti-inflamatório, digestivo",
      image: "https://image.tuasaude.com/media/article/mv/wk/beneficios-do-gengibre_12938.jpg"
    },
    {
      name: "Canela",
      properties: "Regula açúcar, antioxidante",
      image: "https://laboro.edu.br/wp-content/uploads/0806-1200x675-1.webp"
    },
    {
      name: "Alho",
      properties: "Imunidade, cardiovascular",
      image: "https://joov.com.br/images/alho-saiba-quais-sao-os-seu-beneficios-para-a-sua-saude-image.jpg"
    },
    {
      name: "Mel",
      properties: "Antibacteriano, calmante",
      image: "https://flordejambu.com/wp-content/uploads/2024/01/mel_de_abelha_amazonia.jpg"
    },
    {
      name: "Cúrcuma",
      properties: "Anti-inflamatório, antioxidante",
      image: "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2023/07/31131513/GettyImages-1487799742.jpg"
    },
    {
      name: "Camomila",
      properties: "Calmante, digestiva",
      image: "https://www.petz.com.br/blog/wp-content/uploads/2021/11/como-plantar-camomila-1-1280x720.jpg"
    },
    {
      name: "Limão",
      properties: "Alcalinizante, vitamina C",
      image: "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/12/03165738/beneficios-do-limao.jpg"
    },
    {
      name: "Hortelã",
      properties: "Digestiva, refrescante",
      image: "https://totalpass.com/wp-content/uploads/2025/04/cha-de-hortela.jpg"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-natural-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-3 md:mb-4 leading-tight">
            Ingredientes <span className="text-natural-600">Simples</span>, Resultados <span className="text-natural-600">Extraordinários</span>
          </h2>
          <p className="text-base md:text-lg text-natural-700 max-w-2xl mx-auto px-2">
            Conheça alguns dos ingredientes poderosos que você já tem em casa e que são utilizados em nossas receitas naturais
          </p>
        </div>

        <div 
          ref={galleryRef} 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
        >
          {ingredients.map((ingredient, index) => (
            <div 
              key={index} 
              className="gallery-item group relative rounded-lg md:rounded-xl overflow-hidden shadow-sm md:shadow-md opacity-0 transition-all duration-500 bg-white"
            >
              <div className="h-32 sm:h-40 md:h-48 lg:h-56 relative overflow-hidden">
                <img 
                  src={ingredient.image} 
                  alt={ingredient.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="text-center p-3 w-full">
                    <h3 className="text-white font-bold text-sm md:text-base mb-1">{ingredient.name}</h3>
                    <p className="text-white/90 text-xs md:text-sm leading-tight">{ingredient.properties}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#oferta" 
              onClick={handleScrollToOffers}
              className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
            >
              Acesse Todas as Receitas Agora
            </a>
            
            <a 
              href="#beneficios" 
              onClick={handleScrollToNext}
              className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              <ArrowDown size={16} className="inline mr-2" />
              Saber Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;