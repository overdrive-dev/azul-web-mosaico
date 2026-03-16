'use client'

import { useCallback, useEffect, useState, type ReactNode } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

const slides: { headline: ReactNode; subtext: string; image: string }[] = [
  {
    headline: 'Soluções em Fibra de Vidro Imunes à Corrosão',
    subtext: 'Estruturas para plataformas offshore e ambientes industriais agressivos',
    image: '/images/hero-1.jpg',
  },
  {
    headline: (<>Resistência à corrosão<br/><span className="font-extrabold">Longa Vida útil</span><br/>e Baixa Manutenção</>),
    subtext: 'Durabilidade comparável ao aço com custo de manutenção mínimo',
    image: '/images/hero-2.jpg',
  },
  {
    headline: 'Alta Resistência química a ácidos, sais e solventes',
    subtext: '',
    image: '/images/hero-3.jpg',
  },
]

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false }),
    Fade(),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0"
            >
              <div className="relative aspect-[4/3] lg:aspect-[16/7] flex items-center justify-center px-6 lg:px-16">
                <Image src={slide.image} alt={slide.subtext || 'Banner'} fill className="pointer-events-none absolute inset-0 object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-black/50" />
                <div className={`relative z-10 max-w-3xl w-full text-center transition-all duration-700 ease-out ${
                  index === selectedIndex
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    {slide.headline}
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-white/80">
                    {slide.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === selectedIndex
                ? 'bg-white'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
