import React from 'react';
import Link from 'next/link';
import {  Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1D2E] text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* 1. Брэндийн мэдээлэл */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">T</div>
            <h2 className="text-2xl font-bold text-white tracking-tight">TAAMI EDU</h2>
          </div>
          <p className="text-sm leading-relaxed mb-8">
            Бид танд дэлхийн түвшний боловсролыг хамгийн хялбар, хүртээмжтэй байдлаар хүргэхийг зорьж байна. Мэдлэг бол хүч.
          </p>
          <div className="flex gap-4">
            {/* <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<Youtube size={18} />} /> */}
          </div>
        </div>

        {/* 2. Хурдан холбоосууд */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
            Explore
            <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-emerald-500" />
          </h3>
          <ul className="space-y-4 text-sm">
            <li><FooterLink href="/about">About Us</FooterLink></li>
            <li><FooterLink href="/courses">All Courses</FooterLink></li>
            <li><FooterLink href="/instructor">Become Instructor</FooterLink></li>
            <li><FooterLink href="/blog">Latest News</FooterLink></li>
            <li><FooterLink href="/contact">Contact</FooterLink></li>
          </ul>
        </div>

        {/* 3. Ангилалууд */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
            Categories
            <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-emerald-500" />
          </h3>
          <ul className="space-y-4 text-sm">
            <li><FooterLink href="#">Development</FooterLink></li>
            <li><FooterLink href="#">Business</FooterLink></li>
            <li><FooterLink href="#">Marketing</FooterLink></li>
            <li><FooterLink href="#">Design</FooterLink></li>
            <li><FooterLink href="#">Technology</FooterLink></li>
          </ul>
        </div>

        {/* 4. Холбоо барих */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
            Contact Us
            <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-emerald-500" />
          </h3>
          <ul className="space-y-5 text-sm">
            <li className="flex gap-3">
              <MapPin size={20} className="text-emerald-500 shrink-0" />
              <span>Сүхбаатар аймаг Баруун-Урт хот </span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="text-emerald-500 shrink-0" />
              <span>+976 8015 6917</span>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="text-emerald-500 shrink-0" />
              <span>info@taamiedu.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Зохиогчийн эрх */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs">
          Copyright © 2026 <span className="text-emerald-500 font-bold text-sm ml-1">Taami Edu</span>. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-xs">
          <Link href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

// Туслах компонентууд
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all cursor-pointer">
    {icon}
  </div>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="hover:text-emerald-500 hover:translate-x-1 transition-all inline-block">
    {children}
  </Link>
);

export default Footer;