'use client'

import { Database } from 'lucide-react'
import { Twitter, Linkedin, Facebook } from 'lucide-react'

export function Footer() {
  const footerLinks = [
    { label: 'Product', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Company', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Legal', href: '#' },
    { label: 'Blog', href: '#' },
  ]

  return (
    <footer className="border-t border-border bg-card py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
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

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Enterprise Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
