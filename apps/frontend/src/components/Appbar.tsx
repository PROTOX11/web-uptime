"use client"
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

export default function Appbar() {
    return (
        <div className='flex justify-between items-center p-4'>
            <div>website time</div>
            <div>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">Sign In</SignInButton>
                        <SignUpButton mode="modal">Sign Up</SignUpButton>
                    </SignedOut>
            </div>
        </div>
    )
}