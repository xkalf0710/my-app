const categories = [
  { name: 'HTML', icon: '⏳', color: 'bg-purple-50' },
  { name: 'CSS', icon: '💡', color: 'bg-red-50' },
  { name: 'JavaScript', icon: '🧪', color: 'bg-cyan-50' },
  { name: 'ReactJs', icon: '🎓', color: 'bg-orange-50' },
  { name: 'TypeScript', icon: '🐞', color: 'bg-orange-50' },
  { name: 'NextJs', icon: '✉️', color: 'bg-blue-50' },
  { name: 'NodeJs  / Back-End', icon: '🔭', color: 'bg-red-50' },
  { name: 'NestJs / Back-End', icon: '⚡', color: 'bg-blue-50' },
  { name: 'Database: Mysql', icon: '🔭', color: 'bg-red-50' },
  { name: 'Database: Postresql', icon: '⚡', color: 'bg-blue-50' },
  { name: 'Flutter', icon: '🎓', color: 'bg-orange-50' },
  { name: 'React Native', icon: '🐞', color: 'bg-orange-50' },
  { name: 'Photoshop', icon: '✉️', color: 'bg-blue-50' },
  { name: 'Ai', icon: '🔭', color: 'bg-red-50' },
  { name: 'Premiere Pro', icon: '⚡', color: 'bg-blue-50' },
  { name: 'Cartoon Animator', icon: '🐞', color: 'bg-orange-50' },
  { name: 'After Effect', icon: '🔭', color: 'bg-red-50' },
  { name: 'Id', icon: '🔭', color: 'bg-red-50' },
  { name: 'Japanese N1', icon: '⏳', color: 'bg-purple-50' },
  { name: 'Japanese N2', icon: '💡', color: 'bg-red-50' },
  { name: 'Japanese N3', icon: '🧪', color: 'bg-cyan-50' },
  { name: 'Japanese N4', icon: '🎓', color: 'bg-orange-50' },
  { name: 'Japanese N5', icon: '🐞', color: 'bg-orange-50' },
  { name: 'Дүрэм', icon: '🧪', color: 'bg-cyan-50' },
  
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