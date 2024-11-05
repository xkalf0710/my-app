"use client";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SubmitButton from '@/components/ui/submitButton';
import { signIn } from '@/lib/auth';
import { stat } from 'fs';
import Link from 'next/link';
import React from 'react';
import { useFormState } from 'react-dom';

const SignInForm = () => {

    const [state, action] = useFormState(signIn, undefined);
    return (
        <form action={action}>
            <div className='flex flex-col gap-2 w-64'>
                {state?.message && (
                    <p className='text-sm text-red-500'>{state.message}</p>
                )}
                <div>
                    <Label htmlFor="email">Имейл</Label>
                    <Input id="email" name="email" placeholder='example@gmail.com' type="email"/>
                </div>
                {state?.error?.email && (
                    <p className='text-sm text-red-500'>{state.error.email}</p>
                )}
                <div>
                    <Label htmlFor="password">Хэрэглэгчийн нууц үг</Label>
                    <Input id="password" name="password" type="password"/>
                </div>
                
                {state?.error?.password && (
                    <p className='text-sm text-red-500'>{state.error.password}</p>
                )}
                <Link className="text-sm underline" href="#">
                   Нууц үгээ мартсан уу?
                </Link>
                <SubmitButton>Нэвтрэх</SubmitButton>
                <div className='flex justify-between text-sm'>
                    <p>Та бүртгэлтэй юу?</p>
                    <Link className='text-sm underline' href="/auth/signup">
                    Бүртгүүлэх
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default SignInForm