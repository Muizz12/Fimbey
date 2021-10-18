import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Banner() {
    return (
        <div className="relative mr-5 ml-5  mt-5 mb-5 pb-5">
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="Images/home and decor landing page for fimbay.jpg" alt='Banner' />
                </div>
            </Carousel>


        </div>
    )
}

export default Banner
