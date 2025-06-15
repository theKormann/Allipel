'use client';
import React from 'react';
import { HeaderSimple } from '@/components/HeaderOthers';
import { MvvSection } from '@/components/Home/mvv';
import { Footer } from '@/components/Footer';

export default function MvvPage() {
  return (
    <>
      <HeaderSimple />
      <main className="bg-black">
        <MvvSection />
      </main>
      <Footer />
    </>
  );
}
