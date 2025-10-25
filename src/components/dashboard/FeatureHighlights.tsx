'use client'

import { Card } from '@/components/ui/card'
import { Database, GitMerge, Shield } from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'Deep-Dive Data Exploration',
    description: 'Uncover insights with powerful analytics tools that let you explore data at granular levels.',
    gradient: 'from-secondary to-accent',
  },
  {
    icon: GitMerge,
    title: 'Seamless System Integrations',
    description: 'Connect with your existing tools and workflows for unified business intelligence.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and compliance standards to keep your data safe and secure.',
    gradient: 'from-accent to-primary',
  },
]

export function FeatureHighlights() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Feature Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border card-shadow hover:card-shadow-hover transition-smooth group"
              >
                <div className="space-y-4">
                  {/* Icon with Gradient Background */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
