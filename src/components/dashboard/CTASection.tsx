'use client'

import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-lg"
        >
          Get Started Today
        </Button>
      </div>
    </section>
  )
}
