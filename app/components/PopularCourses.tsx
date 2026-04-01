import React from 'react';
import Image from 'next/image';
import { Heart, BookOpen, Monitor, Users, ClipboardList, Layers } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Therapeutic Approaches in Mental Health",
    category: "DEVELOPMENT",
    instructor: "Lucas Vaughn",
    lessons: 14,
    price: "Free",
    oldPrice: null,
    image: "/course1.jpg",
    badgeColor: "bg-emerald-500"
  },
  {
    id: 2,
    title: "Building Chatbots with OpenAI's GPT",
    category: "LANGUAGE",
    instructor: "Mark Evans",
    lessons: 17,
    price: "$29",
    oldPrice: "$50",
    image: "/course2.jpg",
    badgeColor: "bg-cyan-500"
  },
  // Бусад курсуудыг энд ижил бүтцээр нэмж болно...
];

const stats = [
  { icon: <Users size={32} />, value: "24k+", label: "Total Students Enrolled" },
  { icon: <Monitor size={32} />, value: "3M+", label: "Total Video Lessons" },
  { icon: <ClipboardList size={32} />, value: "2.5k+", label: "Daily live Classes" },
  { icon: <Layers size={32} />, value: "75+", label: "Total Exam Categories" },
];

const PopularCourses = () => {
  return (
    <section className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 relative inline-block">
              Popular Courses
              <div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-yellow-400 rounded-full" />
            </h2>
          </div>
          <button className="border border-emerald-500 text-emerald-500 px-6 py-2 rounded-md font-semibold hover:bg-emerald-50 transition-colors">
            View All Courses
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {courses.map((course) => (
            <div key={course.id} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden">
              <div className="relative h-48 w-full">
                <div className="absolute top-3 left-3 z-10">
                  <span className={`${course.badgeColor} text-[10px] text-white font-bold px-3 py-1 rounded`}>
                    {course.category}
                  </span>
                </div>
                <button className="absolute top-3 right-3 z-10 bg-white/80 p-1.5 rounded-full text-slate-600 hover:bg-white transition-colors">
                  <Heart size={16} />
                </button>
                <div className="bg-slate-200 w-full h-full" /> {/* Зураг оронд */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-300 border border-white" />
                  <span className="text-xs text-white font-medium drop-shadow-md">{course.instructor}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-slate-800 mb-4 line-clamp-2 min-h-[48px]">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-6 border-b border-slate-50 pb-4">
                  <BookOpen size={14} className="text-red-400" />
                  <span>{course.lessons} Lessons</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {course.oldPrice && <span className="text-slate-300 line-through text-sm">{course.oldPrice}</span>}
                    <span className="text-red-500 font-bold">{course.price}</span>
                  </div>
                  <button className="text-slate-600 font-bold text-sm hover:text-emerald-500 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Counter Section (Ногоон хэсэг) */}
      <div className="bg-[#1EBBA3] py-20 relative overflow-hidden">
        {/* Чимэглэл SVG - Долгион болон цэгүүд */}
        <div className="absolute top-10 left-10 opacity-20 text-white">
            <svg width="60" height="20" viewBox="0 0 60 20"><path d="M0 10 Q 15 0 30 10 T 60 10" stroke="currentColor" fill="none" strokeWidth="3"/></svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-extrabold mb-2">{stat.value}</h3>
              <p className="text-emerald-50 text-sm font-medium opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Баруун талын шар дугуй чимэглэл */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-yellow-400 rounded-full opacity-90 mix-blend-soft-light" />
      </div>
    </section>
  );
};

export default PopularCourses;