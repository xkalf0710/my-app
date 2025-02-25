"use client";
import AuthNav from '@/components/AuthNav';
import Image from "next/image";
import React, {useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from "next/link";


export default function Register(){

    const [authState, setAuthState] = useState({
        name: "",
        email: "", 
        phone: "",
        password: "",
        deviceIdentityInfo: "",
      });

    //   {
    //     "name": "Ganzorig",
    //     "email": "ganzorig@majorsoft.mn",
    //     "phone": "88883214",
    //     "password": "Qwerty123",
    //     "deviceIdentityInfo": "Chrome-UserAgent"
    // }

    const submit = () => {
        console.log("the auth is", authState);
    }
    return (
        <div className='h-screen'>
           <AuthNav />
           <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='hidden lg:block'>
                <Image src="/images/design.svg" width="100" height="100" alt="auth side img" className='h-screen w-full' />
            </div>
            <div className='flex justify-center items-center mt-20 lg:mt-0'>
                <div className='px-10 lg:px-32 w-full'>
                    <h1 className='text-5xl font-bold'>AMAR POS</h1>
                    <p>Шинээр системийн эрх нээх</p>
                    <div className='mt-4'>
                        <Label htmlFor="name">Хэрэглэгчийн нэр</Label>
                        <Input placeholder='Хэрэглэгчийн нэрээ бичнэ үү' id="name" type='name'
                        onChange={(e) => setAuthState({...authState, name: e.target.value})}
                        />
                    </div>
                    <div className='mt-4'>
                        <Label htmlFor="email">И-мэйл хаяг</Label>
                        <Input placeholder='И-мэйл хаяг' id="email" type='email'
                        onChange={(e) => setAuthState({...authState, email: e.target.value})}
                        />
                    </div>
                    <div className='mt-4'>
                        <Label htmlFor="phone">Утасны дугаар</Label>
                        <Input placeholder='Утасны дугаараа бичнэ үү' id="phone" type='phone'
                        onChange={(e) => setAuthState({...authState, phone: e.target.value})}
                        />
                    </div>

                    <div className='mt-4'>
                        <Label htmlFor='password'>Нууц үг</Label>
                        <Input placeholder='Нууц үгээ бичнэ үү' id="username" type='password' className='w-full'
                        onChange={(e) => setAuthState({
                            ...authState, password:e.target.value
                        })}
                        />
                    </div>

                    <div className='mt-4'>
                        <Label htmlFor='deviceIdentityInfo'>Төхөөрөмж таних</Label>
                        <Input placeholder='Төхөөрөмж' id="deviceIdentityInfo" type='text' className='w-full'
                        onChange={(e) => setAuthState({
                            ...authState, deviceIdentityInfo:e.target.value
                        })}
                        />
                    </div>

                    <div className='mt-4'>
                        <Button className='w-full' onClick={submit}>Бүртгүүлэх</Button>
                    </div>

                    <div className='mt-2 text-center'>
                        <strong className='font-bold'>Та өмнө нэвтэрч байсан бол:</strong>
                        <Link href="/login" className='text-orange- 300 ml-2'>Нэвтрэх</Link>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}