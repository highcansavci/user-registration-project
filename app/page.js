"use client"

import Link from "next/link";
import {useSession} from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return !session ? (
    <>
      <div class="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/login" className="border px-4 py-2 text-red-400 rounded">Please login to see the content</Link>
      </div>
    </>
  ) : (<>
    <div class="flex min-h-screen flex-col items-center justify-betweem p-24">
      <p class="text-green-400 border p-5">Welcome Back</p>
    </div>
    </>);
}
