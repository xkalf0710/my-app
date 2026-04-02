import Image from 'next/image';
const Japanese = () => {
    return (
        <section className="relative bg-white pt-16 pb-32 px-6 overflow-hidden">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
                
                {/* Зүүн тал: Текст хэсэг */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-yellow-500 text-xl">✨</span>
                    <p className="text-slate-600 font-medium">
                      Learn From 20,000+ Quality Courses
                    </p>
                  </div>
        
                  <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                    Best to <br />
                    Platform <br />
                    <span className="relative inline-block">
                      Empower Skills
                      {/* Гар доорх шар зураас (Highlight) */}
                      <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400/60 -z-10 rounded-full" />
                    </span>
                  </h1>
        
                  <button className="bg-[#22C55E] hover:bg-emerald-600 text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-lg shadow-emerald-200">
                    Start Learning Now
                  </button>
        
                  <p className="mt-6 text-slate-400">
                    <span className="text-emerald-500 font-medium">Start Your Education Journey</span>, For a Better Future
                  </p>
                </div>
        
                {/* Баруун тал: Зураг болон Хөвж буй картууд */}
                <div className="relative flex justify-center">
                  {/* Арын шар долгионтой дугуй (Decorative circles) */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-orange-50 rounded-full -z-0 opacity-50 blur-3xl" />
                  
                  <div className="relative z-10">
                    {/* Үндсэн зураг (Placeholder) */}
                    <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[550px]">
                      <Image
                        src="/images/students-removebg-preview.png" // Өөрийн зургийн замыг энд хийнэ
                        alt="Student studying"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
        
                    {/* Хөвж буй "100K+" карт */}
                    <div className="absolute top-1/3 -left-16 bg-white p-6 rounded-2xl shadow-2xl border border-slate-50 text-center animate-bounce-slow">
                      <div className="flex -space-x-3 justify-center mb-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                        ))}
                        <div className="w-10 h-10 rounded-full bg-orange-400 text-white text-[10px] flex items-center justify-center font-bold">2K+</div>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-800">100K+</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Total Enrolled Students</p>
                    </div>
                  </div>
                  
                  {/* Чимэглэлүүд (Dots/Zigzag) */}
                  <div className="absolute top-10 right-10 text-slate-300 opacity-50">
                     {/* Энд нэмэлт SVG чимэглэлүүд хийж болно */}
                  </div>
                </div>
              </div>
        
              {/* Доод талын цагаан долгион (Curved Bottom) */}
              <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[100px]">
                  <path 
                    d="M0 120V60C240 20 480 20 720 60C960 100 1200 100 1440 60V120H0Z" 
                    fill="#F8FAFC" // Энэ өнгө CategorySection-ий background-тай таарч байх ёстой
                  />
                </svg>
              </div>
            </section>
    );
}

export default Japanese;