'use client';
import React from 'react';
import { HeaderMain } from '@/components/Header/index';
import { HeroSection } from '@/components/Home/Hero';
import  Intro  from '@/components/Home/intro';
import Services from '@/components/Home/services';
import { Location } from '@/components/Home/location';
import { Cta } from '@/components/Home/cta';
import { Footer } from '@/components/Footer';

export default function Home() {
    return(
        <>
            <HeaderMain/>
            <Intro/>
            <HeroSection/>
            <Services/>
            <Location/>
            <Cta/>
            <Footer/>
        </>
    );

}