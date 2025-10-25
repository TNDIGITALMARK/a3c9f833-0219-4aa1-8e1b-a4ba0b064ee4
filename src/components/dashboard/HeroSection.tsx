'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Unlock Full Potential with{' '}
              <span className="text-foreground">Integrated Business Intelligence</span>
            </h1>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-lg"
            >
              Request Demo
            </Button>
          </div>

          {/* Right: 3D Cube Graphic */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/generated/hero-3d-cube.png"
                alt="3D Isometric Business Intelligence Visualization"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
