'use client';

import Image from 'next/image';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'David Park',
    role: 'Marketing Manager',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      'The gamification features made learning addictive! I completed 5 courses in 3 months and earned my certification.',
  },
  {
    name: 'Sophia Lee',
    role: 'Product Designer',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote:
      'This platform transformed how I learn online. The structure, the flow, the recommendations — spot on!',
  },
  {
    name: 'Jake Matthews',
    role: 'Data Analyst',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote:
      'I loved how smooth and rewarding the process was. Learning felt like a game — but better!',
  },
];

const TestimonialCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="py-20 px-4 bg-gray-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          What Our Learners Say
        </h2>

        <div className="relative overflow-hidden">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="w-full sm:max-w-sm sm:mx-auto lg:max-w-full"
                >
                  <Card className="shadow-md border-none bg-white hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-left space-y-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full object-cover border"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="italic text-gray-700 leading-relaxed text-sm sm:text-base">
                        “{testimonial.quote}”
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow-md hover:bg-blue-100 text-blue-700 transition-colors duration-200 flex" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow-md hover:bg-blue-100 text-blue-700 transition-colors duration-200 flex" />

          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
