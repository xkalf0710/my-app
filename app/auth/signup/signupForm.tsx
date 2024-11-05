"use client";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SubmitButton from '@/components/ui/submitButton';
import { signUp } from '@/lib/auth';
import React from 'react';
import { useFormState } from 'react-dom';
const SignUpForm = () => {

    const [state, action] = useFormState(signUp, undefined);
    return (
        <form action={action}>
            <div className='flex flex-col gap-2'>
                {state?.message && (
                    <p className='text-sm text-red-500'>{state.message}</p>
                )}
                <div>
                    <Label htmlFor='name'>Хэрэглэгчийн нэр</Label>
                    <Input id="name" name="name" placeholder='Хэрэглэгчийн нэр'/>
                </div>
                {state?.error?.name && (
                    <p className='text-sm text-red-500'>{state.error.name}</p>
                )}
                <div>
                    <Label htmlFor='email'>Имэйл</Label>
                    <Input id="email" name="email" type="email" placeholder='Хэрэглэгчийн имэйл'/>
                </div>
                {state?.error?.email && (
                    <p className='text-sm text-red-500'>{state.error.email}</p>
                )}
                <div>
                    <Label htmlFor="password">Хэрэглэгчийн нууц үг</Label>
                    <Input id="password" name="password" type="password" />
                </div>
                {state?.error?.password && (
                    <div className='text-sm text-red-500'>
                        <p>Password must:</p>
                        <ul>
                            {state.error.password.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <SubmitButton>Бүртгүүлэх</SubmitButton>
                
            </div>
        </form>
    );

}

export default SignUpForm;