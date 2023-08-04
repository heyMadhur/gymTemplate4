"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "../stores/reviews";
import { Review } from "../types";
import Image from "next/image";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);


function Testimonials() {
    return (
        <div className="w-full flex flex-col items-center px-16 py-10 xs:py-12 texture-bg overflow-hidden">
            <h2 className="text-2xl xs:text-3xl font-semibold mb-10">Testimonials</h2>
            <div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                autoplay={{delay: 5000}}
                speed={2000}
                // navigation={true}
                pagination={{clickable: true}}
                modules={[Pagination, Autoplay]}
                className="mySwiper w-[20rem] md:w-[30rem] lg:w-[40rem]"
            >
                {reviews.map((review: Review) => {
                        return (
                            <SwiperSlide key={review.id} className="">
                                <Testimonial {...review} />
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
            </div>
        </div>
    );
}


function Testimonial(review: Review){
    const noOfStars = review.ratings;
    const stars = Array(noOfStars).fill(null).map((_, index) => <Star key={index} />);

    return(
        <div className="slide bg-secondaryBg/50">
            <div className="flex flex-col p-7">
                <p className="text-sm font-light mb-4">{review.review}</p>
                <div className="flex gap-2 mb-6">
                    <>{stars}</>
                </div>
                <div className="flex items-center gap-4">
                    <Image 
                        src={review.imageSrc}
                        alt="profile image"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                    <div>
                        {review.name}
                    </div>
                </div>
            </div>
            <div className="w-full h-2 bg-brand"></div>
        </div>
    )
}

function Star(){
    return(
        <Image 
            src="/icons/icons8-star.png"
            alt="ratings star"
            width={20}
            height={20}
            className=""
        />
    )
}

export default Testimonials;