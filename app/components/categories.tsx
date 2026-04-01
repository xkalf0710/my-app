const categories = [
  { name: 'Mathematics', icon: '⏳', color: 'bg-purple-50' },
  { name: 'Idea Generate', icon: '💡', color: 'bg-red-50' },
  { name: 'Chemistry', icon: '🧪', color: 'bg-cyan-50' },
  { name: 'Business Analysis', icon: '🎓', color: 'bg-orange-50' },
  { name: 'Development', icon: '🐞', color: 'bg-orange-50' },
  { name: 'Email Marketing', icon: '✉️', color: 'bg-blue-50' },
  { name: 'Arestogoy', icon: '🔭', color: 'bg-red-50' },
  { name: 'IT / Technology', icon: '⚡', color: 'bg-blue-50' },
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