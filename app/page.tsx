'use client'

import ListPurchase from "@/app/components/ListPurchase";
import Purchase from "@/app/components/Purchase";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [purchases, setPurchases] = useState<any[]>([])

  const handlePurchase = (newPurchase: any) => setPurchases([...purchases, newPurchase])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <Purchase handleConfirm={handlePurchase} />
      </div>
      <div>
        <ListPurchase purchases={purchases} />
      </div>
    </main>
  );
}
