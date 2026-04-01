import Image from 'next/image';

const FeatureCards = () => {
  const cards = [
    {
      label: "Learn together with",
      title: "Expert Teacher",
      description: "If you've been researching exactly what skill you want",
      buttonText: "View All Courses",
      bgColor: "bg-green-50",
      btnColor: "bg-emerald-500",
      // Placeholders for the overlapping image effect
      imgLarge: "/images/students-removebg-preview.png", 
      imgSmall: "/images/students-removebg-preview.png"
    },
    {
      label: "Get the skills",
      title: "For Individuals",
      description: "If you've been researching exactly what skill you want",
      buttonText: "Find Your Course",
      bgColor: "bg-blue-50",
      btnColor: "bg-emerald-500",
      imgLarge: "/images/students-removebg-preview.png",
      imgSmall: "/images/students-removebg-preview.png"
    }
  ];

  return (
    <section className="py-20 px-10 bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`${card.bgColor} rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden`}
          >
            {/* Text Content */}
            <div className="flex-1 z-10">
              <p className="text-emerald-500 font-medium text-sm mb-2">{card.label}</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-500 mb-6 max-w-[200px]">{card.description}</p>
              <button className={`${card.btnColor} text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity`}>
                {card.buttonText}
              </button>
            </div>

            {/* Image Composition */}
            <div className="flex-1 relative w-full h-[250px]">
              {/* Circular dashed decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 border-2 border-dashed border-slate-300 rounded-full" />
              
              {/* Large Image (Lower) */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white p-2 rounded-xl rotate-6 shadow-lg overflow-hidden">
                <div className="w-full h-full bg-slate-200 rounded-lg" /> 
                 <Image src={card.imgLarge} fill className="object-cover" alt={card.title} /> 
              </div>

              {/* Small Image (Upper) */}
              <div className="absolute top-0 right-20 w-24 h-24 bg-white p-1 rounded-full shadow-md overflow-hidden z-20">
                <div className="w-full h-full bg-slate-300 rounded-full" />
                <Image src={card.imgSmall} fill className="object-cover" alt="User" />
              </div>
              
              {/* Decorative Triangle */}
              <div className="absolute top-10 right-0 text-slate-300 transform rotate-12">
                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 0L40 40H0L20 0Z" stroke="currentColor" strokeWidth="1"/></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;