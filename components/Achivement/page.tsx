"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "../Card/InfiniteCards";
import Image from "next/image";
import {Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Achievements = () => {
  return (
    <section id="testimonials" className=" h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-black dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-fit rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-screen bg-black h-1/2">
                HEllo
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-screen bg-black h-1/2">
                HEllo
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-screen bg-black h-1/2">
                HEllo
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-screen bg-black h-1/2">
                HEllo
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-screen bg-black h-1/2">
                HEllo
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
