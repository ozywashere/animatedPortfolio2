'use client';

import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from "@/components/Work";
import Review from "@/components/Review";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="">
            <Hero/>
            <About/>
            <Services/>
            <Work/>
            <Review/>
            <Cta/>
        </div>
    );
}
