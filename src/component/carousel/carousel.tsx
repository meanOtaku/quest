import * as React from "react";
import health from "./../../../public/image1.png";
import kids from "./../../../public/image2.png";
import jorden from "./../../../public/image3.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import carousel from "./carousel.module.css";

export function CarouselSize() {
  return (
    <Carousel className={`m-20 ${carousel.removeBorder}`}>
      <CarouselContent>
        <CarouselItem key="1" className="md:basis-1/2 lg:basis-1/3">
          <div>
            <Card className={` ${carousel.removeBorder}`}>
              <CardContent className="flex flex-col">
                <Image
                  priority
                  src={jorden}
                  height={500}
                  width={500}
                  alt="Jorden"
                />
                <span className="">
                  <div>
                    <div className="text-left">
                      <div className="font-bold text-3xl">Sports</div>
                      <div>
                        From fitness studios to sports academies, Rmax empowers
                        sports businesses &nbsp;
                        <span className={carousel.link}>Know more...</span>
                      </div>
                    </div>
                  </div>
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key="2" className="md:basis-1/2 lg:basis-1/3">
          <div>
            <Card className={` ${carousel.removeBorder}`}>
              <CardContent className="flex flex-col">
                <Image
                  priority
                  src={health}
                  height={500}
                  width={500}
                  alt="Jorden"
                />
                <span className="">
                  <div>
                    <div className="text-left">
                      <div className="font-bold text-3xl">
                        Healthcare & Wellness
                      </div>
                      <div>
                        Health and wellness service providers—from yoga
                        instructors and gyms &nbsp;
                        <span className={carousel.link}>Know more...</span>
                      </div>
                    </div>
                  </div>
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key="3" className="md:basis-1/2 lg:basis-1/3">
          <div>
            <Card className={` ${carousel.removeBorder}`}>
              <CardContent className="flex flex-col">
                <Image
                  priority
                  src={kids}
                  height={500}
                  width={500}
                  alt="Jorden"
                />
                <span className="">
                  <div>
                    <div className="text-left">
                      <div className="font-bold text-3xl">
                        Learning Activites
                      </div>
                      <div>
                        Tutors, educators, and learning centers—from music
                        schools to art studios &nbsp;
                        <span className={carousel.link}>Know more...</span>
                      </div>
                    </div>
                  </div>
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key="4" className="md:basis-1/2 lg:basis-1/3">
          <div>
            <Card className={` ${carousel.removeBorder}`}>
              <CardContent className="flex flex-col">
                <Image
                  priority
                  src={jorden}
                  height={500}
                  width={500}
                  alt="Jorden"
                />
                <span className="">
                  <div>
                    <div className="text-left">
                      <div className="font-bold text-3xl">Sports</div>
                      <div>
                        From fitness studios to sports academies, Rmax empowers
                        sports businesses &nbsp;
                        <span className={carousel.link}>Know more...</span>
                      </div>
                    </div>
                  </div>
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
