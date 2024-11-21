"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import montserrat from "@/components/montserrat-font";
import { MapPin, Phone, Mail } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Footer from "@/components/ui/footer/footer";
import GoogleMap from "@/components/ui/googleMap/googleMap";

const sliderContent = [
  <>
    <div className="absolute top-0 left-50 w-full h-full bg-black opacity-60 text-white text-5xl flex items-center justify-center"></div>
    <div className="absolute top-0 left-50 w-full h-full text-white text-5xl flex items-center justify-center ml-4">
      <h2 className={cn(`text-3xl md:text-4xl mt-8 ${montserrat.className}`)}>
        Best quality{" "}
        <span className="text-[#ffff00] font-semibold">
          Puffed and Parboiled Rice
        </span>
      </h2>
    </div>
  </>,
  <>
    <div className="absolute top-0 left-50 w-full h-full bg-black opacity-60 text-white text-5xl flex items-center justify-center"></div>
    <div className="absolute top-0 left-50 w-full h-full text-white text-5xl flex items-center justify-center ml-4">
      <h2 className={cn(`text-3xl md:text-4xl mt-8 ${montserrat.className}`)}>
        Top class{" "}
        <span className="text-[#ffff00] font-semibold">Machineries</span>
      </h2>
    </div>
  </>,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));
  return (
    <div className="max-w-7xl mx-auto">
      <Carousel plugins={[plugin.current]} className="w-full h-3/6">
        <CarouselContent>
          {sliderContent.map((el, index) => {
            return (
              <CarouselItem key={index}>
                <div className="p-0">
                  <Card>
                    <CardContent className="p-0">
                      <div>
                        <img
                          src={`/images/banners/banner-${index}.jpg`}
                          className="w-full"
                        />
                        {el && el}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
          {/* <CarouselItem key={1}>
            <div className="p-0">
              <Card>
                <CardContent className="p-0">
                  <div>
                    <img src="/images/img-1.jpg" className="w-full" />
                    <div className="absolute top-0 left-50 w-full h-full bg-black opacity-60 text-white text-5xl flex items-center justify-center"></div>
                    <div className="absolute top-0 left-50 w-full h-full text-white text-5xl flex items-center justify-center ml-4">
                      <h2
                        className={cn(
                          `text-3xl md:text-4xl mt-8 ${montserrat.className}`
                        )}
                      >
                        Best quality{" "}
                        <span className="text-[#ffff00] font-semibold">
                          Puffed and Parboiled Rice
                        </span>
                      </h2>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key={2}>
            <div className="p-0">
              <Card>
                <CardContent className="p-0">
                  <div>
                    <img src="/images/img-2.jpg" className="w-full" />
                    <div className="absolute top-0 left-50 w-full h-full bg-black opacity-60 text-white text-5xl flex items-center justify-center"></div>
                    <div className="absolute top-0 left-50 w-full h-full text-white text-5xl flex items-center justify-center ml-4">
                      <h2
                        className={cn(
                          `text-3xl md:text-4xl mt-8 ${montserrat.className}`
                        )}
                      >
                        Top class{" "}
                        <span className="text-[#ffff00] font-semibold">
                          Machineries
                        </span>
                      </h2>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem> */}
        </CarouselContent>
      </Carousel>
      <section className="max-w-7xl p-4 md:p-16 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <h2
              className={cn(
                `text-2xl md:text-3xl mt-8 ${montserrat.className}`
              )}
            >
              Selling best quality{" "}
              <span className="text-heading_color font-semibold">
                Puffed and Parboiled Rice
              </span>
            </h2>
            <p className="mt-8 text-xl leading-relaxed">
              We specialize in providing the finest quality puffed and parboiled
              rice, carefully processed to ensure optimal taste and nutritional
              value. Our products are crafted with dedication to meet the
              highest standards, making them the preferred choice for
              health-conscious consumers and culinary enthusiasts alike. Enjoy
              the perfect blend of quality and flavor with our premium rice
              selections.
            </p>
            <h2
              className={cn(
                `text-2xl md:text-3xl mt-8 ${montserrat.className}`
              )}
            >
              One of the best supplier of{" "}
              <span className="text-heading_color font-semibold">
                Puffed and Parboiled Rice all over Tamilnadu
              </span>
            </h2>
            <p className="mt-8 text-xl leading-relaxed">
              As one of the leading suppliers of puffed and parboiled rice
              across Tamil Nadu, we take pride in delivering superior quality
              products that meet our customers’ needs. Equipped with top-class
              machinery, our facilities ensure precision in processing,
              maintaining the freshness, taste, and nutritional value of every
              grain. Our commitment to excellence makes us a trusted choice
              throughout the region.
            </p>
            <Button
              variant="ghost"
              className={"bg-heading_color text-white text-xl mt-8 p-8"}
              asChild
            >
              <Link href="/about">Check Our Journey</Link>
            </Button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="/images/35-years.png" />
          </div>
        </div>
      </section>
      <section className="max-w-7xl p-4 md:p-16 bg-white mx-auto">
        <div className="flex flex-col md:flex-row">
          <div>
            <h2
              className={cn(
                `text-2xl md:text-3xl ${montserrat.className} text-heading_color`
              )}
            >
              WHAT WE TRADE
            </h2>
            <div className="flex flex-col text-4xl md:text-6xl font-black py-4">
              <span>Our</span>
              <span style={{ color: "#4a8b71" }}>Awesome</span>
              <span style={{ color: "#fbd600" }}>Products</span>
            </div>
          </div>
          <div>
            <p className="w-full md:w-5/6 md:px-8 text-xl leading-relaxed">
              At Sri Vasanth Traders, we are committed to delivering the finest
              quality rice products to our valued customers. With decades of
              experience in the industry, we maintain rigorous standards of
              excellence, ensuring that each product meets the highest
              benchmarks for taste, freshness, and nutritional value. Our
              state-of-the-art machinery and meticulous processing techniques
              enable us to consistently offer the best to our clients.
            </p>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8`}
        >
          <div className="flex flex-col min-w-[250px] sm:min-w-[360px] md:min-w-[360px] relative min-h-[300px]">
            <img src="/images/puffed-rice.webp" />
            {/* <h3 className="text-2xl text-heading_color font-semibold mt-2">
              Puffed rice
            </h3> */}
            <Button
              variant="primary"
              className={
                "bg-heading_color text-white text-2xl  text-center w-full mx-auto mt-8 p-6"
              }
              asChild
            >
              <Link href="/products">Puffed Rice</Link>
            </Button>
          </div>
          <div className="flex flex-col min-w-[250px] sm:min-w-[360px] md:min-w-[360px] relative min-h-[300px]">
            <img src="/images/parboiled-rice.jpg" />

            <Button
              variant="primary"
              className={
                "bg-heading_color text-white text-2xl  text-center w-full mx-auto mt-8 p-6"
              }
              asChild
            >
              <Link href="/products">Parboiled Rice</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <h2
          className={cn(
            `text-2xl md:text-3xl ${montserrat.className} text-heading_color p-4 md:p-16 pt-16`
          )}
        >
          Our Gallery
        </h2>
        <div className="flex justify-center items-center mb-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-3/4 md:w-full max-w-2xl"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/2 "
                >
                  <div className="p-1">
                    <Card className="border-2 border-heading_color/30">
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <div>
                          <img
                            src={`/images/carousel/carousel-${index + 1}.jpg`}
                            className="w-full rounded-lg"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="bg-white max-w-7xl mx-auto">
        <h2
          className={cn(
            `text-2xl md:text-3xl ${montserrat.className} text-heading_color p-4 md:p-16 pt-16`
          )}
        >
          Connect with us now
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 bg-[#ffff00] py-8 md:py-0">
            <div className="p-4 md:p-16">
              <h2
                className={cn(
                  `text-2xl md:text-4xl ${montserrat.className} font-extrabold`
                )}
              >
                Contact
              </h2>
              <div className="mt-4">
                <div className="flex">
                  <div>
                    <MapPin
                      size={24}
                      color="#dc3850"
                      className="inline-block mt-1"
                    />
                  </div>
                  <div className="pl-4">
                    <p className="text-xl md:text-2xl font-bold">
                      Sri Vasanth Traders
                    </p>
                    <p className="text-lg md:text-xl">69, RS Road,</p>
                    <p className="text-lg md:text-xl">Perundurai, Erode,</p>
                    <p className="text-lg md:text-xl">
                      Tamilnadu, India - 638052
                    </p>
                    <a
                      href={`https://www.google.com/maps?q=${11.273654},${77.588783}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg md:text-xl inline-block mt-2 underline underline-offset-4"
                    >
                      Direction
                    </a>
                  </div>
                </div>
                <div className="flex mt-8">
                  <div>
                    <Phone
                      size={24}
                      color="#dc3850"
                      className="inline-block mt-1"
                    />
                  </div>
                  <div className="pl-4">
                    <p className="text-xl md:text-2xl font-bold">
                      +91 77083 17656
                    </p>
                    <a
                      href="tel:+917708317656"
                      className="text-lg md:text-xl inline-block underline underline-offset-4 mt-2"
                    >
                      Make call
                    </a>
                  </div>
                </div>

                <div className="flex mt-8">
                  <div>
                    <Mail
                      size={24}
                      color="#dc3850"
                      className="inline-block mt-1"
                    />
                  </div>
                  <div className="pl-4">
                    <p className="text-xl md:text-2xl font-bold">
                      srivasanthtraders@gmail.com
                    </p>
                    <a
                      href="mailto:srivasanthtraders@gmail.com?subject=Inquiry%20About%20Puffed%20Rice%20and%20Parboiled%20Rice%20Products&body=Hello%20Sri%20Vasanth%20Traders%2C%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20puffed%20rice%20and%20parboiled%20rice%20products.%20Could%20you%20please%20provide%20me%20with%20details%20about%20the%20product%20specifications%2C%20pricing%2C%20and%20availability%3F%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0A%5BYour%20Name%5D%0D%0A%5BYour%20Contact%20Information%5D"
                      className="text-lg md:text-xl inline-block underline underline-offset-4 mt-2"
                    >
                      Send email
                    </a>
                  </div>
                </div>
                {/* <p>
                  <MapPin size={24} color="#dc3850" className="inline-block" />
                  <span className="inline-block ml-4 text-xl align-middle font-bold">
                    Sri Vasanth Traders
                  </span>
                </p>
                <p>
                  <span className="inline-block ml-4 text-xl align-middle">
                    Sri Vasanth Traders
                  </span>
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <GoogleMap />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
