'use client'

import { Database, User } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function Navigation() {
  const menuItems = [
    { label: 'Dashboard', href: '#', active: true },
    { label: 'Solutions', href: '#' },
    { label: 'Reports', href: '#' },
    { label: 'Integrations', href: '#' },
    { label: 'Docs', href: '#' },
    { label: 'Support', href: '#' },
  ]

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Database className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-foreground">ENTERPRISE</span>
              <span className="text-xs text-muted-foreground">ANALYTICS</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.active
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* User Avatar */}
          <Avatar className="w-9 h-9">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}
