"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <SignedOut>
        <SignInButton>
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-primary-dark transition">
            Se connecter
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary-light transition">
            S'inscrire
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}
