'use client'

import { useState, useEffect } from 'react'
import Image, { type ImageProps } from 'next/image'

interface SkeletonImageProps extends Omit<ImageProps, 'onLoad'> {
  skeletonClass?: string;
}

const LOADED_CACHE = new Set<string>()

export default function SkeletonImage({ skeletonClass, className, src, ...props }: SkeletonImageProps) {
  const srcKey = typeof src === 'string' ? src : ''
  const [loaded, setLoaded] = useState(() => LOADED_CACHE.has(srcKey))

  useEffect(() => {
    if (srcKey && LOADED_CACHE.has(srcKey)) {
      setLoaded(true)
    }
  }, [srcKey])

  const handleLoad = () => {
    if (srcKey) LOADED_CACHE.add(srcKey)
    setLoaded(true)
  }

  return (
    <>
      {!loaded && (
        <div
          className={`absolute inset-0 z-10 animate-pulse ${skeletonClass || 'bg-gray-200'}`}
        />
      )}
      <Image
        src={src}
        className={`${className || ''} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleLoad}
        {...props}
      />
    </>
  )
}
