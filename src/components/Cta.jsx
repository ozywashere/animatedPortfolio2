import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Cta = () => {
    return (
        <section className="dark:bg-secondary/40 bg-secondary py-24 mb-12 xl:mb-48">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="max-w-xl h2 text-center mb-8">Prepared to turn your ideas into reality? I am here to
                        help</h2>
                    <Link href="/contact">
                        <Button>
                            Get in touch
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;