import React from 'react';
import Image from 'next/image';

const TrustSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Partners Section --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">
              The trusted market leader in talent transformation through education
            </h2>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-md font-bold transition-all">
              Start Learning Now
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-0 border-l border-t border-slate-100">
            {/* Логонуудын placeholder (Gardenbook, Penbook гэх мэт) */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border-r border-b border-slate-100 p-8 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <div className="w-12 h-12 bg-slate-200 rounded mb-2" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Success Stories (Slider Style) --- */}
        <div className="bg-blue-50/50 rounded-3xl p-12 relative overflow-hidden mb-32">
          {/* Чимэглэл цэгүүд */}
          <div className="absolute top-10 left-10 text-emerald-300 opacity-40">
            <div className="grid grid-cols-5 gap-2">
              {[...Array(25)].map((_, i) => <div key={i} className="w-1 h-1 bg-current rounded-full" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="bg-white p-10 rounded-2xl shadow-xl shadow-blue-100/50 max-w-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Success Stories</h3>
              <p className="text-slate-500 italic leading-relaxed mb-6">
                "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness."
              </p>
              <p className="font-bold text-slate-900">James Smith</p>
              
              {/* Pagination Dots */}
              <div className="flex gap-2 mt-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="w-2 h-2 rounded-full bg-slate-200" />
                <div className="w-2 h-2 rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="relative flex justify-center">
              {/* Зурагны арын дугуй зураас */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dashed border-slate-300 rounded-full" />
              <div className="relative w-64 h-64 rounded-full border-8 border-white overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-slate-300" /> {/* <Image src="/user.jpg" fill /> */}
              </div>
              {/* Улаан гурвалжин чимэглэл */}
              <div className="absolute top-1/2 left-10 w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-red-500 border-b-[10px] border-b-transparent" />
            </div>
          </div>
        </div>

        {/* --- Latest News Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 relative inline-block">
            Latest News
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-full" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "How to Avoid the Biggest College Admission Mistakes",
              img: "bg-orange-100",
              date: "OCTOBER 23, 2024"
            },
            {
              title: "How Digital Platforms Are Shaping Business Schools",
              img: "bg-slate-100",
              date: "OCTOBER 23, 2024"
            },
            {
              title: "Why Business Students Need Tech Skills for the Future",
              img: "bg-green-100",
              date: "OCTOBER 23, 2024"
            }
          ].map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className={`relative h-60 w-full rounded-2xl mb-6 overflow-hidden ${post.img}`}>
                {/* <Image src={post.img} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
              </div>
              <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                <span>LEARNING</span>
                <div className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{post.date}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-500 transition-colors">
                {post.title}
              </h4>
              <button className="text-emerald-500 font-bold text-xs border-b-2 border-emerald-500 pb-1 uppercase tracking-wider">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;