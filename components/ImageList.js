import React from "react";

import { sbEditable } from "@storyblok/storyblok-editable";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import DynamicComponent from "./DynamicComponent";
import styles from "../styles/imageList.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageList = ({ blok }) => {
  let title = blok.title ?? null;
  return (
    <div
      {...sbEditable(blok)}
      className={
        title ? styles.imageListContainer : styles.imageListContainerNoPadding
      }
    >
      {title ? <h1>{title}</h1> : null}
      {blok.imageList.length ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >
          {blok.imageList.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image.filename} alt={"slide"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
};

export default ImageList;
