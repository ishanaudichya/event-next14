"use client";
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

export default function Home() {
  return (
    <main>  
      Hello
      <Button>Click me</Button>
      <Carousel>
  <CarouselContent>
    <CarouselItem>
      <Image src="/random.jpg" alt="Image 1" width={500} height={300} />
    </CarouselItem>
    <CarouselItem>
      <Image src="/random.jpg" alt="Image 2" width={500} height={300} />
    </CarouselItem>
    <CarouselItem>
      <Image src="/random.jpg" alt="Image 3" width={500} height={300} />
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
      </main>
  )
}
