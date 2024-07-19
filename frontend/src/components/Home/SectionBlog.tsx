"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Banner from "@/public/images/Home/Blog 1.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";
import { AnimationSection } from "../AnimationSection";

const data = [
  {
    title: "Vietnam surpasses the world about blockchain ideas 1",
    des: "With a vibrant community of enthusiastic investors, we are confident to bring additional marketing and PR values that crypto startups really need.",
    img: Banner,
  },
  {
    title: "Vietnam surpasses the world about blockchain ideas 2",
    des: "With a vibrant community of enthusiastic investors, we are confident to bring additional marketing and PR values that crypto startups really need.",
    img: Banner,
  },
  {
    title: "Vietnam surpasses the world about blockchain ideas 3",
    des: "With a vibrant community of enthusiastic investors, we are confident to bring additional marketing and PR values that crypto startups really need.",
    img: Banner,
  },
  {
    title: "Vietnam surpasses the world about blockchain ideas 4",
    des: "With a vibrant community of enthusiastic investors, we are confident to bring additional marketing and PR values that crypto startups really need.",
    img: Banner,
  },
];

export default function SectionBlog() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  return (
    <section>
      <div className="flex gap-20">
        <AnimationSection
          className={`animate-fade-right animate-once animate-duration-[2000ms]`}
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-4xl font-bold text-second-50">ATP on Media</h4>
            <p className="text-base text-black-50 font-normal">
              We’re proud to support and invest in
              <br />
              over 10+ companies in the crypto
              <br />
              industry, across every stage and sub-
              <br />
              sector. Meet our portfolio below.
            </p>
            <Button className="w-36 bg-black-95 py-2 px-3 text-black-20 text-sm border-2 border-black-90">
              Read More News
            </Button>
          </div>
        </AnimationSection>

        <AnimationSection
          className={`animate-fade-left animate-once animate-duration-[2000ms]`}
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[520px] flex"
          >
            <CarouselContent>
              {data.map(({ title, des, img }) => (
                <CarouselItem key={title} className="md:basis-1/2 lg:basis-1/2">
                  <div className="w-fit">
                    <Card className="bg-transparent border-none shadow-none">
                      <CardContent className="flex flex-col w-60 p-0 gap-6 rounded-xl overflow-hidden">
                        <Image src={img} alt="blog 1" className="rounded-xl" />
                        <div className="flex flex-col gap-2">
                          <div className="text-base font-bold text-black-50">
                            {title}
                          </div>
                          <p className="text-sm text-black-50">{des}</p>
                          <div className="mt-4">Learn more</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="disabled:opacity-0" />
            <CarouselNext className="disabled:opacity-0" />
          </Carousel>
        </AnimationSection>
      </div>
    </section>
  );
}
