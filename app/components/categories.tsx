const categories = [
  { name: 'Web & Mobile Developer', icon: '⏳', color: 'bg-purple-50' },
  { name: 'Full-Stack Developer', icon: '💡', color: 'bg-red-50' },
  { name: 'Mobile Development', icon: '🧪', color: 'bg-cyan-50' },
  { name: 'Data Science & Artificial Intelligence', icon: '🎓', color: 'bg-orange-50' },
  { name: 'Game Development', icon: '🐞', color: 'bg-orange-50' },
  { name: 'Cyber Security', icon: '✉️', color: 'bg-blue-50' },
  { name: 'Embedded Systems & IoT', icon: '🔭', color: 'bg-red-50' },
  { name: 'Blockchain Development', icon: '⚡', color: 'bg-blue-50' },
  
  
];

export const CategorySection = () => (
  <section className="bg-slate-50 py-20 px-10">
    <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Top Categories</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <div key={cat.name} className={`${cat.color} p-4 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer`}>
          <span className="text-xl">{cat.icon}</span>
          <span className="font-semibold text-slate-700">{cat.name}</span>
        </div>
      ))}
    </div>
  </section>
);