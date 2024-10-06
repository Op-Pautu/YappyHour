"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto justify-center items-center">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam
        asperiores autem accusantium adipisci iusto quam excepturi minus placeat
        beatae illum obcaecati nisi in dicta reprehenderit, eos delectus
        aliquam! Distinctio.
      </div>
      <Button onClick={() => void signOut()}>Sign Out</Button>
    </div>
  );
}
