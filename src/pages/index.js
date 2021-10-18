import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner"
import Icon from "../components/Icon";
import Search from "../components/Search";
import BottomHeader from "../components/BottomHeader";
import Add from "../components/Add";
import { useEffect, useState } from "react";
import Slider from "../components/Slider"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Row from "../components/Row2";
import Video from "../components/Video";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import Disclamer from "../components/Disclamer";
export default function Home() {
  const [productinfo, setproductinfo] = useState([{
    name: 'BEAUTY',
    img: "images/beauty.png",
  },
  {
    name: 'SUNGLASSES',
    img: "images/sunglasses.png"
  },
  {
    name: 'JACKETS',
    img: "images/jackets.png"
  },
  {
    name: 'SHOES',
    img: "images/shoe.png"
  },
  {
    name: 'BEAUTY',
    img: "images/beauty.png",
  },
  {
    name: 'SUNGLASSES',
    img: "images/sunglasses.png"
  },
  {
    name: 'JACKETS',
    img: "images/jackets.png"
  },
  {
    name: 'SHOES',
    img: "images/shoe.png"
  }, {
    name: 'BEAUTY',
    img: "images/beauty.png",
  },
  {
    name: 'SUNGLASSES',
    img: "images/sunglasses.png"
  },
  {
    name: 'JACKETS',
    img: "images/jackets.png"
  },
  {
    name: 'SHOES',
    img: "images/shoe.png"
  },

  ]);
  const [row, setrow] = useState([{
    name: 'KITCHEN',
    img: "images/kitchen.png",
  },
  {
    name: 'LIGHT',
    img: "images/light.png"
  },
  {
    name: 'HEADPHONES',
    img: "images/headphones.png"
  },
  {
    name: 'KITCHEN',
    img: "images/kitchen.png",
  },
  {
    name: 'LIGHT',
    img: "images/light.png"
  },
  {
    name: 'HEADPHONES',
    img: "images/headphones.png"
  },
  {
    name: 'KITCHEN',
    img: "images/kitchen.png",
  },
  {
    name: 'LIGHT',
    img: "images/light.png"
  },
  {
    name: 'HEADPHONES',
    img: "images/headphones.png"
  },
  {
    name: 'KITCHEN',
    img: "images/kitchen.png",
  },
  {
    name: 'LIGHT',
    img: "images/light.png"
  },
  {
    name: 'HEADPHONES',
    img: "images/headphones.png"
  },

  ])

  return (
    <div>
      <Head>
        <title>Fimbey</title>
      </Head>
      <main className="max-w-screen-l mx-auto bg-gray-50">
        <Header />
        <Icon />
        <Search />
        <BottomHeader />
        <Banner />
        <Add />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >

          <div className="flex flex-grow justify-evenly mr-5 ml-5 ">

            {productinfo.slice(0, 4).map((product) => (
              <Slider name={product.name} img={product.img} />

            ))}


          </div>
          <div className="flex flex-grow justify-evenly mr-5 ml-5 ">


            {productinfo.slice(4, 8).map((product) => (
              <Slider name={product.name} img={product.img} />

            ))}

          </div>
          <div className="flex flex-grow justify-evenly mr-5 ml-5 ">


            {productinfo.slice(8, 12).map((product) => (
              <Slider name={product.name} img={product.img} />

            ))}

          </div>
        </Carousel>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >

          <div className="flex flex-grow justify-evenly mr-5 ml-5 ">

            {row.slice(0, 4).map((product) => (
              <Row name={product.name} img={product.img} />

            ))}


          </div>
          <div className="flex flex-grow justify-evenly mr-5 ml-5 ">


            {row.slice(4, 8).map((product) => (
              <Row name={product.name} img={product.img} />

            ))}

          </div>
          <div className="flex flex-grow justify-evenly mr-5 ml-5 ">


            {row.slice(8, 12).map((product) => (
              <Row name={product.name} img={product.img} />

            ))}

          </div>
        </Carousel>
        <Video />
        <Footer />
        <BottomFooter />
        <Disclamer />








      </main>

    </div>
  );
}
