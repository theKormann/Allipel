'use client';

import React from 'react';
import { HeaderMain } from '@/components/Header/index';
import { HeroSection } from '@/components/Home/Hero';
import  Intro  from '@/components/Home/intro';
import Cta from '@/components/Home/cta';

export default function Home() {
    return(
        <>
            <HeaderMain/>
            <Intro/>
            <HeroSection/>
            <Cta/>
        </>
    );

}