import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-[#8caccc] to-[#e9f1f8] pt-20"
    >
      {/* Text & CTA (top section) */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
<h1 className="text-5xl lg:text-6xl font-bold text-[#0a2e5c] mb-6 leading-tight flex items-center gap-4">
  <img 
    src="/Images/Company_Logo.jpg"
    alt="GV Logo" 
    className="h-20 w-20 rounded-full object-cover shadow-lg"
  />
  GV SURGICAL & SERVICES
</h1>



          <p className="text-lg lg:text-xl text-[#4a5d73]  max-w-3xl mx-auto leading-relaxed">
            Delivering trusted medical solutions for hospitals, rehabilitation, 
            and physiotherapy needs across Hyderabad and Gajwel.
          </p>
        </div>
      </div>

      {/* Banner Carousel with overlay cards */}
      <div className="px-6 md:px-12 lg:px-20 py-12">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-2xl shadow-xl"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative">
              <img
                src="/Images/madical-banner1.jpg"
                alt="Banner 1"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              {/* Overlay Card */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-start">
                <div className="text-left text-white p-10 max-w-md">
                  <h2 className="text-3xl font-bold mb-4">Premium Physiotherapy Equipment</h2>
                  <p className="mb-6 text-lg">
                    Trusted solutions for rehabilitation and faster recovery.
                  </p>
                  <Button className="bg-white text-[#0a2e5c] hover:bg-[#e6e6e6]">
                    Explore <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative">
              <img
                src="/Images/madical-banner2.jpg"
                alt="Banner 2"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-start">
                <div className="text-left text-white p-10 max-w-md">
                  <h2 className="text-3xl font-bold mb-4">24/7 Service & Support</h2>
                  <p className="mb-6 text-lg">
                    Always here to assist your hospital and rehabilitation needs.
                  </p>
                  <Button className="bg-white text-[#0a2e5c] hover:bg-[#e6e6e6]">
                    View Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative">
              <img
                src="/Images/madical-banner3.jpg"
                alt="Banner 3"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-start">
                <div className="text-left text-white p-10 max-w-md">
                 
                  <h2 className="text-3xl font-bold mb-4">Hospital Equipment</h2>
                   <p className="mb-6 text-lg">
                    Reliable, high-quality equipment for modern healthcare.
                  </p>
                 
                  <Button className="bg-white text-[#0a2e5c] hover:bg-[#e6e6e6]">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
