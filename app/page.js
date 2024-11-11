"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import montserrat from "@/components/montserrat-font";
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

export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));
  return (
    <div>
      <Carousel plugins={[plugin.current]} className="w-full h-3/6">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-0">
                <Card>
                  <CardContent className="p-0">
                    <div>
                      <img src="/images/img-1.jpg" className="w-full" />
                      <div className="absolute top-0 left-50 w-full h-full bg-black opacity-60 text-white text-5xl flex items-center justify-center">
                        <span>We sell Quality puff rice</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <section className="max-w-7xl p-4 md:p-16 ">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <h2
              className={cn(
                `text-2xl md:text-3xl mt-8 ${montserrat.className}`
              )}
            >
              Selling best quality{" "}
              <span className="text-heading_color font-semibold">
                Puffed and Par Boiled Rice
              </span>
            </h2>
            <p className="mt-8 text-xl leading-relaxed">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Primis est at
              dui donec curae. Volutpat sollicitudin curabitur elementum;
              posuere aenean praesent dui consectetur facilisi. Sapien elit
              fermentum erat vitae inceptos habitant cursus. Convallis montes
              magnis ultrices pharetra blandit facilisis nibh finibus. Tellus
              fermentum eleifend a phasellus convallis? Euismod porttitor
              fringilla natoque, facilisi libero nec. Pellentesque nibh risus
              quam laoreet egestas taciti. Elementum magna ultrices nulla auctor
              neque potenti quis elit magnis.
            </p>
            <h2
              className={cn(
                `text-2xl md:text-3xl mt-8 ${montserrat.className}`
              )}
            >
              One of the best supplier of{" "}
              <span className="text-heading_color font-semibold">
                Puffed and Par Boiled Rice all over Tamilnadu
              </span>
            </h2>
            <p className="mt-8 text-xl leading-relaxed">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Primis est at
              dui donec curae. Volutpat sollicitudin curabitur elementum;
              posuere aenean praesent dui consectetur facilisi. Sapien elit
              fermentum erat vitae inceptos habitant cursus. Convallis montes
              magnis ultrices pharetra blandit facilisis nibh finibus. Tellus
              fermentum eleifend a phasellus convallis? Euismod porttitor
              fringilla natoque, facilisi libero nec. Pellentesque nibh risus
              quam laoreet egestas taciti. Elementum magna ultrices nulla auctor
              neque potenti quis elit magnis.
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
      <section className="max-w-7xl p-4 md:p-16 bg-white">
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
              Lorem ipsum odor amet, consectetuer adipiscing elit. Primis est at
              dui donec curae. Volutpat sollicitudin curabitur elementum;
              posuere aenean praesent dui consectetur facilisi. Sapien elit
              fermentum erat vitae inceptos habitant cursus. Convallis montes
              magnis ultrices pharetra blandit facilisis nibh finibus.
            </p>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8`}
        >
          <div class="flex flex-col min-w-[250px] sm:min-w-[360px] md:min-w-[360px] relative min-h-[300px]">
            <img src="/images/puffed-rice.webp" />
          </div>
          <div class="flex flex-col min-w-[250px] sm:min-w-[360px] md:min-w-[360px] relative min-h-[300px]">
            <img src="/images/parboiled-rice.webp" />
          </div>
        </div>
      </section>
    </div>
  );
}
