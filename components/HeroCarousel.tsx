'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

const slides = [
  {
    headline: 'Soluções em Fibra de Vidro Imunes à Corrosão',
    subtext: 'Estruturas para plataformas offshore e ambientes industriais agressivos',
    image: '/images/foto-01.jpeg',
  },
  {
    headline: 'Longa Vida Útil e Baixa Manutenção',
    subtext: 'Durabilidade comparável ao aço com custo de manutenção mínimo',
    image: '/images/foto-03.jpeg',
  },
  {
    headline: 'Alta Resistência Química',
    subtext: 'Resistência a ácidos, sais e solventes',
    image: '/images/foto-15.jpeg',
  },
]

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
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
              <div className="relative aspect-[4/3] lg:aspect-[16/7] flex items-center justify-start px-6 lg:px-16">
                <Image src={slide.image} alt={slide.headline} fill className="pointer-events-none absolute inset-0 object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-black/40" />
                <div className="relative z-10 max-w-xl w-full">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
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
