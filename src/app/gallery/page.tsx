"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const PhotoGallery = () => {
  const galleryData = [
    {
      id: 1,
      title: "Annual Function 2024",
      images: [
        { id: 1, src: "/img/Annual_Function_2024/1.jpg", alt: "" },
        { id: 2, src: "/img/Annual_Function_2024/2.jpg", alt: "" },
        { id: 3, src: "/img/Annual_Function_2024/3.jpg", alt: "" },
        { id: 4, src: "/img/Annual_Function_2024/4.jpg", alt: "" },
        { id: 5, src: "/img/Annual_Function_2024/5.jpg", alt: "" },
        { id: 6, src: "/img/Annual_Function_2024/6.jpg", alt: "" },
        { id: 7, src: "/img/Annual_Function_2024/7.jpg", alt: "" },
        { id: 8, src: "/img/Annual_Function_2024/8.jpg", alt: "" },
        { id: 9, src: "/img/Annual_Function_2024/9.jpg", alt: "" },
        { id: 10, src: "/img/Annual_Function_2024/10.jpg", alt: "" },
        { id: 11, src: "/img/Annual_Function_2024/11.jpg", alt: "" },
        { id: 12, src: "/img/Annual_Function_2024/12.jpg", alt: "" },
        { id: 13, src: "/img/Annual_Function_2024/13.jpg", alt: "" },
        { id: 14, src: "/img/Annual_Function_2024/14.jpg", alt: "" },
        { id: 15, src: "/img/Annual_Function_2024/15.jpg", alt: "" },
        { id: 16, src: "/img/Annual_Function_2024/16.jpg", alt: "" },
        { id: 17, src: "/img/Annual_Function_2024/17.jpg", alt: "" },
        { id: 18, src: "/img/Annual_Function_2024/18.jpg", alt: "" },
        { id: 19, src: "/img/Annual_Function_2024/19.jpg", alt: "" },
        { id: 20, src: "/img/Annual_Function_2024/20.jpg", alt: "" },
        { id: 21, src: "/img/Annual_Function_2024/21.jpg", alt: "" },
        { id: 22, src: "/img/Annual_Function_2024/22.jpg", alt: "" },
      ],
    },
    {
      id: 2,
      title: "Felicitation Function 2023",
      images: [
        { id: 1, src: "/img/Felicitation_Function_2023/1.jpeg", alt: "" },
        { id: 1, src: "/img/Felicitation_Function_2023/2.jpeg", alt: "" },
        { id: 1, src: "/img/Felicitation_Function_2023/3.jpeg", alt: "" },
        { id: 1, src: "/img/Felicitation_Function_2023/4.jpeg", alt: "" },
        { id: 1, src: "/img/Felicitation_Function_2023/5.jpeg", alt: "" },
        { id: 1, src: "/img/Felicitation_Function_2023/6.jpeg", alt: "" },
        { id: 1, src: "/img/Felicitation_Function_2023/8.jpeg", alt: "" },
        { id: 1, src: "/img/Felicitation_Function_2023/9.jpeg", alt: "" },
      ],
    },
    {
      id: 3,
      title: "Victory Celebration - June 2023, Maharashtra",
      images: [
        {
          id: 1,
          src: "/img/Victory_Celebration_2023/1.jpeg",
          alt: "image",
        },
        {
          id: 2,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/4-7-300x200.jpeg",
          alt: "image",
        },
        {
          id: 3,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/7-3-300x226.jpeg",
          alt: "image",
        },
        {
          id: 4,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/8-3.jpeg",
          alt: "image",
        },
        {
          id: 5,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/2-6-300x200.jpeg",
          alt: "image",
        },
        {
          id: 6,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/10-2.jpeg",
          alt: "image",
        },
      ],
    },
    {
      id: 4,
      title: "Omerga, Maharashtra",
      images: [
        {
          id: 1,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/1-5.jpg",
          alt: "image",
        },
        {
          id: 2,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/6-3.jpg",
          alt: "image",
        },
        {
          id: 3,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/5-4.jpg",
          alt: "image",
        },
        {
          id: 4,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/4-5.jpg",
          alt: "image",
        },
        {
          id: 5,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/3-5.jpg",
          alt: "image",
        },
        {
          id: 6,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/2-5.jpg",
          alt: "image",
        },
      ],
    },
    {
      id: 5,
      title: "Aurangabad II, Maharashtra",
      images: [
        {
          id: 1,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/2-3.jpg",
          alt: "image",
        },
        {
          id: 2,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/3-3.jpg",
          alt: "image",
        },
        {
          id: 3,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/4-3.jpg",
          alt: "image",
        },
        {
          id: 4,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/5-2.jpg",
          alt: "image",
        },
      ],
    },
    {
      id: 6,
      title: "Sangamner Maharashtra",
      images: [
        {
          id: 1,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/1-2-e1725015155149.jpg",
          alt: "image",
        },
        {
          id: 2,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/7-1.jpg",
          alt: "image",
        },
        {
          id: 3,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/6.jpg",
          alt: "image",
        },
        {
          id: 4,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/5-1.jpg",
          alt: "image",
        },
        // {
        //   id: 5,
        //   src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/1-2-e1725015155149.jpg",
        //   alt: "image",
        // },
      ],
    },
    {
      id: 7,
      title: "Center Inauguration at Bihta, Patna",
      images: [
        {
          id: 1,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/1-3-300x282.jpeg",
          alt: "image",
        },
        {
          id: 2,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/2-5.jpeg",
          alt: "image",
        },
        {
          id: 3,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/3-6.jpeg",
          alt: "image",
        },
        {
          id: 4,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/4-6.jpeg",
          alt: "image",
        },
        {
          id: 5,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/5-5.jpeg",
          alt: "image",
        },
      ],
    },
    {
      id: 8,
      title: "Sameer Sir's Birthday 2023",
      images: [
        {
          id: 1,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/1-1.jpg",
          alt: "image",
        },
        {
          id: 2,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/8.jpg",
          alt: "image",
        },
        {
          id: 3,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/7.jpg",
          alt: "image",
        },
        {
          id: 4,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/2-1.jpg",
          alt: "image",
        },
        {
          id: 5,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/4-1.jpg",
          alt: "image",
        },
      ],
    },
    {
      id: 9,
      title: "Felicitation Function 2022",
      images: [
        {
          id: 1,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/1-2-scaled.jpeg",
          alt: "image",
        },
        {
          id: 2,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/2-4-scaled.jpeg",
          alt: "image",
        },
        {
          id: 3,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/3-5-scaled.jpeg",
          alt: "image",
        },
        {
          id: 4,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/4-5-scaled.jpeg",
          alt: "image",
        },
        // {
        //   id: 5,
        //   src: "",
        //   alt: "image",
        // },
      ],
    },
    {
      id: 10,
      title: "Foundation Day 2022",
      images: [
        {
          id: 1,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/1-1-scaled.jpeg",
          alt: "image",
        },
        {
          id: 2,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/9-1-scaled.jpeg",
          alt: "image",
        },
        {
          id: 3,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/4-4-scaled.jpeg",
          alt: "image",
        },
        {
          id: 4,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/5-3-scaled.jpeg",
          alt: "image",
        },
        // {
        //   id: 5,
        //   src: "",
        //   alt: "image",
        // },
      ],
    },
    {
      id: 11,
      title: "Felicitation Function 2021",
      images: [
        {
          id: 1,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/1.jpeg",
          alt: "image",
        },
        {
          id: 2,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/2-2.jpeg",
          alt: "image",
        },
        {
          id: 3,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/3-3.jpeg",
          alt: "image",
        },
        {
          id: 4,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/4-3.jpeg",
          alt: "image",
        },
        // {
        //   id: 5,
        //   src: "",
        //   alt: "image",
        // },
      ],
    },

    {
      id: 12,
      title: "Bansal Campus",
      images: [
        {
          id: 1,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/Pics_page-0002.jpg",
          alt: "image",
        },
        {
          id: 2,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/Pics_page-0003.jpg",
          alt: "image",
        },
        {
          id: 3,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/Pics_page-0005.jpg",
          alt: "image",
        },
        {
          id: 4,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/Pics_page-0006.jpg",
          alt: "image",
        },
        {
          id: 5,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/Pics_page-0007.jpg",
          alt: "image",
        },
        {
          id: 6,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/Pics_page-0008.jpg",
          alt: "image",
        },
        {
          id: 7,
          src: "https://www.bansal.ac.in/wp-content/uploads/2024/07/Pics_page-0009.jpg",
          alt: "image",
        },
      ],
    },
  ];

  return (
    <div className="photo-gallery-container">
      <style jsx>{`
        .photo-gallery-container {
          min-height: 100vh;
          background: #f8f9fa;
        }

        .hero-section {
          background: linear-gradient(
            135deg,
            #4a90e2 0%,
            #2c5aa0 50%,
            #1e3a8a 100%
          );
          position: relative;
          overflow: hidden;
          padding: 80px 0 120px;
          color: white;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .hero-section::after {
          content: "";
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transform: rotate(45deg);
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          font-weight: 300;
          opacity: 0.9;
          margin-bottom: 0;
        }

        .gallery-content {
          padding: 60px 0;
          background: #f8f9fa;
        }

        .gallery-section {
          margin-bottom: 80px;
        }

        .gallery-section:last-child {
          margin-bottom: 0;
        }

        .gallery-wrapper {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 30px;
          text-align: center;
          position: relative;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #4a90e2, #2c5aa0);
          border-radius: 2px;
        }

        .gallery-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .gallery-image:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .swiper-container {
          padding: 20px;
          overflow: visible;
        }

        .swiper-button-prev,
        .swiper-button-next {
          background: rgba(255, 255, 255, 0.9);
          color: #4a90e2;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-top: -25px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
        }

        .swiper-button-prev {
          left: -25px;
        }

        .swiper-button-next {
          right: -25px;
        }

        .swiper-pagination {
          bottom: -10px;
          position: relative;
          margin-top: 30px;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e0;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #4a90e2;
          transform: scale(1.2);
        }

        .slide-container {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          background: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .slide-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          color: white;
          padding: 20px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .slide-container:hover .slide-overlay {
          transform: translateY(0);
        }

        .overlay-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .gallery-wrapper {
            padding: 20px;
          }

          .gallery-image {
            height: 300px;
          }

          .swiper-button-prev,
          .swiper-button-next {
            width: 40px;
            height: 40px;
            margin-top: -20px;
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 14px;
          }

          .swiper-button-prev {
            left: -20px;
          }

          .swiper-button-next {
            right: -20px;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding: 60px 0 80px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">Photos Gallery</h1>
                <p className="hero-subtitle">
                  Where Success Stories Begin: A Glimpse into Bansal Classes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="gallery-content">
        <div className="container">
          {galleryData.map((section, index) => (
            <div key={section.id} className="gallery-section">
              <div className="row">
                <div className="col-12">
                  <div className="gallery-wrapper">
                    <h2 className="section-title">{section.title}</h2>

                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={30}
                      slidesPerView={1}
                      navigation
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                      }}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      breakpoints={{
                        576: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 25,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        1200: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                      }}
                      className="swiper-container"
                    >
                      {section.images.map((image) => (
                        <SwiperSlide key={image.id}>
                          <div className="slide-container">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="gallery-image"
                            />
                            {/* <div className="slide-overlay">
                              <h5 className="overlay-title">{image.alt}</h5>
                            </div> */}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
