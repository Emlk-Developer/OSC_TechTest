import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useProduct } from "../contexts/contexts";
import { Link } from "react-router-dom";


export default function HomePage() {

  const {shopProducts} = useProduct()

  return (
    <section>
        <p>Welcome to The Mock Shop</p>
        
        <p>Go to the <Link to='/products'>Products</Link> page to check out our range</p>
        <Swiper
        initialSlide={1}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {shopProducts?.map((productImage) => (
          <SwiperSlide key={productImage?.node?.id}>
            <img src={productImage?.node?.featuredImage?.url} alt={`Image by ${productImage?.node?.featuredImage?.id}`} width={250} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
