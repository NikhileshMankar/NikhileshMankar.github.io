import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function CarouselSpacing() {
  return (
    <div className='relative w-full px-4 md:px-24 h-full'>
      {/* Left fade gradient */}
      <div className='absolute left-0 top-0 z-10 h-full w-[50px] md:w-[300px] bg-gradient-to-r from-[#07080a] to-transparent pointer-events-none'></div>
      {/* Right fade gradient */}
      <div className='absolute right-0 top-0 z-10 h-full w-[50px] md:w-[300px] bg-gradient-to-l from-[#07080a] to-transparent pointer-events-none'></div>
      <Carousel>
        <CarouselContent className='-ml-4'>
          <CarouselItem className='basis:1/1 md:basis-1/4 pl-4'>
            <div className='flex  items-center justify-center  cert-img'>
              <Image src="/Cert1.webp" alt="Certification 1" width={800} height={400} className='object-cover rounded-lg ' unoptimized />
            </div>
          </CarouselItem>
          <CarouselItem className='basis:1/1 md:basis-1/4 pl-4'>
            <div className='flex  items-center justify-center cert-img'>
              <Image src="/Cert2.webp" alt="Certification 2" width={800} height={400} className='object-cover rounded-lg' unoptimized />
            </div>
          </CarouselItem>
          {/* <CarouselItem className='basis:1/1 md:basis-1/4 pl-4'>
            <div className='flex  items-center justify-center cert-img rotate-90'>
              <Image src="/Cert3.webp" alt="Certification 3" width={800} height={400} className='object-cover rounded-lg ' unoptimized />
            </div>
          </CarouselItem> */}
          <CarouselItem className='basis:1/1 md:basis-1/4 pl-4'>
            <div className='flex  items-center justify-center cert-img'>
              <Image src="/Cert8.webp" alt="Certification 4" width={800} height={400} className='object-cover rounded-lg' unoptimized />
            </div>
          </CarouselItem>
          <CarouselItem className='basis:1/1 md:basis-1/4 pl-4'>
            <div className='flex  items-center justify-center cert-img'>
              <Image src="/Cert5.webp" alt="Certification 5" width={800} height={400} className='object-cover rounded-lg' unoptimized />
            </div>
          </CarouselItem>
          <CarouselItem className='basis:1/1 md:basis-1/4 pl-4'>
            <div className='flex  items-center justify-center  cert-img'>
              <Image src="/Cert6.webp" alt="Certification 6" width={800} height={400} className='object-cover rounded-lg' unoptimized />
            </div>
          </CarouselItem>
          <CarouselItem className='basis:1/1 md:basis-1/4 pl-4'>
            <div className='flex  items-center justify-center cert-img'>
              <Image src="/Cert7.webp" alt="Certification 7" width={800} height={400} className='object-cover rounded-lg' unoptimized />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation
          className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2 '
          classNameButton=''
          alwaysShow
        />
      </Carousel>
    </div>
  );
}
