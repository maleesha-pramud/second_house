"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation, Clock, Phone, ExternalLink, Copy, Check, Car, Bus, Plane } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LocationSection() {
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

  const nearbyPlaces = [
    { name: "Horana Bus Station", distance: "2 min walk", icon: <Bus className="h-4 w-4" /> },
    { name: "Horana Hospital", distance: "5 min drive", icon: <Car className="h-4 w-4" /> },
    { name: "Colombo Airport", distance: "45 min drive", icon: <Plane className="h-4 w-4" /> },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-sage-50 to-ocean-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-warm-100 text-warm-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            Perfect Location
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">Find Us in the Heart of Horana</h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Conveniently located with easy access to transportation, hospitals, and local attractions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.384070712413!2d80.0827395!3d6.7229019999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24bdfd10af331%3A0xd0362435ba108c2a!2sRent%20rooms!5e0!3m2!1sen!2ssg!4v1750836345338!5m2!1sen!2ssg"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-t-xl"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-warm-200">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-sage-800">Second Home Horana</span>
                  </div>
                  <p className="text-xs text-sage-600 mt-1">Your home away from home</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={openDirections}
                    size="sm"
                    className="bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-600 hover:to-ocean-700"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button
                    onClick={openInGoogleMaps}
                    variant="outline"
                    size="sm"
                    className="border-warm-200 hover:bg-warm-50"
                  >
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
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-warm-500 to-sunset-600 text-white p-2 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800">Our Address</h3>
                    <p className="text-sm text-sage-600">Easy to find location</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-warm-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sage-700">Rent rooms, Horana, Western Province, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-ocean-600" />
                    <span className="text-sage-700">+94 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-sage-600" />
                    <span className="text-sage-700">24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Places */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-sage-800 mb-4">Nearby Attractions</h3>
                <div className="space-y-3">
                  {nearbyPlaces.map((place, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-warm-50 to-sunset-50 rounded-lg"
                    >
                      <div className="text-warm-600">{place.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium text-sage-800 text-sm">{place.name}</p>
                        <p className="text-xs text-sage-600">{place.distance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-warm-500 to-sunset-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Ready to Visit?</h3>
                <p className="text-sm text-warm-100 mb-4">
                  Get directions and start your journey to Second Home Horana
                </p>
                <Button
                  onClick={openDirections}
                  variant="secondary"
                  className="w-full bg-white text-warm-600 hover:bg-warm-50"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Start Navigation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
