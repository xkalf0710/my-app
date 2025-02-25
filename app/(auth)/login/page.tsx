"use client";
import AuthNav from '@/components/AuthNav';
import Image from "next/image";
import React, {useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from "next/link";


export default function Login(){

    const [authState, setAuthState] = useState({
        username: "",
        password: "",
      });


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
                    <p>Welcome Back!</p>
                    <div className='mt-4'>
                        <Label htmlFor="username">Хэрэглэгчийн нэр</Label>
                        <Input placeholder='Хэрэглэгчийн нэрээ бичнэ үү' id="username" type='name'
                        onChange={(e) => setAuthState({...authState, username: e.target.value})}
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
                        <Button className='w-full' onClick={submit}>Нэвтрэх</Button>
                    </div>

                    <div className='mt-2 text-center'>
                        {/* <strong className='font-bold'></strong> */}
                        <Link href="/register" className='text-orange- 300 ml-2'>Шинээр бүртгүүлэх үү?</Link>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}