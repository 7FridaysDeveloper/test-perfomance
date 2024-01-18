'use client';
import CardGuide from '@/shared/ui/card-guide';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FullStarSvg from '@/assets/images/svg/full-star';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function SwiperGuides({guides}) {
    
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={25}
            navigation
            slidesPerView={4}
            pagination={{ clickable: true }}
            breakpoints={{
                220: {
                    slidesPerView: 1.7,
                },
                768: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 4,
                },
                }}
        >
            {guides?.map((item) =>{
                const rating = item.rating.rating.toFixed(2);

                return (
                    <SwiperSlide key={item.id}>
                        <CardGuide avatar={item?.avatar} url={'/'} bottomView={item?.locales}>
                        <div className="item_title">{item?.brandName}</div>
                        {rating > 0 ?
                            <div className="rating_box">
                                <FullStarSvg />
                                <div className="rating_number">{rating}</div>
                            </div>
                            : null 
                        }
                        </CardGuide>
                    </SwiperSlide>
                )
            })}
        </Swiper>
       
    )
}