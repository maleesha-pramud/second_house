"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Navigation, ExternalLink, Copy, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LocationModal() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const address = "Rent rooms, Horana, Sri Lanka"
  const coordinates = "6.7229019, 80.0827395"

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy address:", err)
    }
  }

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${coordinates}`, "_blank")
  }

  const openDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${coordinates}`, "_blank")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border-warm-200 hover:bg-warm-50 hover:border-warm-300 transition-all duration-300 shadow-sm"
        >
          <MapPin className="h-4 w-4 text-warm-600" />
          <span className="hidden sm:inline text-warm-700">View Location</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="bg-gradient-to-br from-warm-500 to-sunset-600 text-white p-2 rounded-lg">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <span className="text-sage-800">Our Location</span>
              <p className="text-sm font-normal text-sage-600 mt-1">Second Home Horana, Sri Lanka</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={openDirections}
              size="sm"
              className="bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-600 hover:to-ocean-700"
            >
              <Navigation className="h-4 w-4 mr-2" />
              Get Directions
            </Button>
            <Button onClick={openInGoogleMaps} variant="outline" size="sm" className="border-warm-200 hover:bg-warm-50">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in Maps
            </Button>
            <Button
              onClick={handleCopyAddress}
              variant="outline"
              size="sm"
              className="border-sage-200 hover:bg-sage-50"
            >
              {copied ? <Check className="h-4 w-4 mr-2 text-green-600" /> : <Copy className="h-4 w-4 mr-2" />}
              {copied ? "Copied!" : "Copy Address"}
            </Button>
          </div>
        </div>

        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.384070712413!2d80.0827395!3d6.7229019999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24bdfd10af331%3A0xd0362435ba108c2a!2sRent%20rooms!5e0!3m2!1sen!2ssg!4v1750836345338!5m2!1sen!2ssg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-warm-200">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-sage-800">Second Home Horana</span>
            </div>
            <p className="text-xs text-sage-600 mt-1">Horana, Western Province</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
