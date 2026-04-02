import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';

export const Navbar = () => {

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white">
      <div className="flex  items-center gap-12">
        <h1 className="text-2xl font-bold text-emerald-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">T</div>
          TAAMI EDU
        </h1>
        <ul className="hidden md:flex  gap-8 text-slate-600 font-medium">
          <Link href="/">
          <li className="text-emerald-500 flex items-center gap-1">Нүүр</li></Link>
          <Link href='/courses'>
            <li className="flex items-center gap-1">Програмчлал</li>
          </Link>
          <Link href='/graphics'>
            <li className="flex items-center gap-1">График дизайн</li>
          </Link>
          <Link href='/japanese'>
            <li className="flex items-center gap-1">Япон хэл</li>
          </Link>
          <Link href='/about'>
            <li className="flex items-center gap-1">Бидний тухай</li>
          </Link>
         
        </ul>
      </div>
      <div className="flex items-center gap-6 text-slate-700">
        <Search size={20} className="cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer hover:text-emerald-500">
          <Link href=''>
           <span className="text-sm font-semibold">Login</span>
          </Link>
          
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-emerald-500">
          <Link href=''>
           <span className="text-sm font-semibold">SignUp</span>
          </Link>
          
        </div>
        
        <div className="relative cursor-pointer">
          <ShoppingCart size={20} />
          <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
        </div>
      </div>
    </nav>

    
  );
};