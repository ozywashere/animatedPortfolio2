import React from 'react';
import Image from "next/image";
import {Card, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

import {Swiper, SwiperSlide} from "swiper/react";
//swiper
import {Pagination} from "swiper/modules";
import "swiper/css"
import "swiper/css/pagination"

const reviewsData = [
    {
        avatar: "/reviews/avatar-1.png",
        name: "John Doe",
        job: "CEO at Google",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
        avatar: "/reviews/avatar-2.png",
        name: "Jane Doe",
        job: "CEO at Google",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
        avatar: "/reviews/avatar-3.png",
        name: "John Doe",
        job: "CEO at Google",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
        avatar: "/reviews/avatar-4.png",
        name: "John Doe",
        job: "CEO at Google",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
        avatar: "/reviews/avatar-5.png",
        name: "John Doe",
        job: "CEO at Google",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
        avatar: "/reviews/avatar-6.png",
        name: "John Doe",
        job: "CEO at Google",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    }
]
const Review = () => {
    return (
        <section className="mb-12 xl:mb-48">
            <div className="container">
                <h2 className="section-title  mb-12 text-center mx-auto">What clients say about us</h2>
                <Swiper slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1400: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        pagination={{
                            "clickable": true
                        }}
                        modules={[Pagination]}
                        className="h-[378px]"
                >
                    {reviewsData.map((person, index) => {

                            const {avatar, name, job, review} = person;
                            return (
                                <SwiperSlide key={index}>
                                    <Card className="dark:bg-secondary/40 bg-secondary p-8 min-h-[300px]">
                                        <CardHeader className="p-0 mb-10">
                                            <div className="flex items-center gap-x-4">
                                                <Image src={avatar} alt={name} width={70} height={70} className="rounded-full"/>
                                                <div className="flex flex-col">
                                                    <CardTitle>{name}</CardTitle>
                                                    <p>{job}</p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardDescription className="description">{review}</CardDescription>

                                    </Card>
                                </SwiperSlide>
                            )
                        }
                    )}
                </Swiper>
            </div>
        </section>
    );
};

export default Review;