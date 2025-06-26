"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PricingSelector } from "@/components/pricing-selector"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  MapPin,
  Users,
  Maximize,
  Wifi,
  Car,
  Utensils,
  Snowflake,
  Bath,
  Tv,
  Wind,
  Refrigerator,
  Share,
  Heart,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getRoomById, type Room } from "@/lib/rooms-data"

export default function RoomDetailPage() {
  const params = useParams()
  const { language, t } = useLanguage()
  const [room, setRoom] = useState<Room | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const loadRoom = () => {
      try {
        const foundRoom = getRoomById(params.id as string)
        setRoom(foundRoom || null)
      } catch (error) {
        console.error("Error loading room:", error)
      } finally {
        setLoading(false)
      }
    }

    loadRoom()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-50 to-sunset-50">
        <ScrollToTop />
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-warm-600">{t("common.loading")}</div>
        </div>
      </div>
    )
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-50 to-sunset-50">
        <ScrollToTop />
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sage-600 mb-4">{t("common.error")}</p>
            <Button
              asChild
              className="bg-gradient-to-r from-warm-500 to-sunset-500 hover:from-warm-600 hover:to-sunset-600"
            >
              <Link href="/">{t("common.back")}</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const amenityIcons = {
    kitchen: <Utensils className="h-5 w-5" />,
    washroom: <Bath className="h-5 w-5" />,
    ac: <Snowflake className="h-5 w-5" />,
    wifi: <Wifi className="h-5 w-5" />,
    parking: <Car className="h-5 w-5" />,
    balcony: <Wind className="h-5 w-5" />,
    tv: <Tv className="h-5 w-5" />,
    refrigerator: <Refrigerator className="h-5 w-5" />,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 to-sunset-50">
      <ScrollToTop />
      <Header />

      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Back Button */}
        <div className="flex items-center justify-between mb-6">
          <Button asChild variant="ghost" size="sm" className="hover:bg-warm-100">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("common.back")}
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hover:bg-warm-100">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-warm-100">
              <Heart className="h-4 w-4 text-warm-500" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="space-y-3">
              <div className="relative">
                <Image
                  src={room.images[selectedImage] || "/placeholder.svg"}
                  alt={room.name[language]}
                  width={800}
                  height={500}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
                />
                <Badge
                  variant={room.available ? "default" : "secondary"}
                  className={`absolute top-4 left-4 shadow-lg ${room.available ? "bg-green-500 hover:bg-green-600" : "bg-gray-500"}`}
                >
                  {room.available ? t("room.available") : t("room.not.available")}
                </Badge>
              </div>

              {room.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {room.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                        selectedImage === index ? "ring-3 ring-warm-400 shadow-lg" : "hover:ring-2 hover:ring-warm-300"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${room.name[language]} ${index + 1}`}
                        width={120}
                        height={80}
                        className="w-20 h-16 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Room Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-3 text-sage-800">{room.name[language]}</h1>
                <p className="text-sage-600 text-base md:text-lg leading-relaxed">{room.description[language]}</p>
              </div>

              <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
                <div className="flex items-center gap-2 bg-ocean-50 px-3 py-2 rounded-full">
                  <Users className="h-4 w-4 text-ocean-600" />
                  <span className="text-ocean-700 font-medium">
                    {room.capacity} {room.capacity === 1 ? t("common.guest") : t("common.guests")}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-sage-50 px-3 py-2 rounded-full">
                  <Maximize className="h-4 w-4 text-sage-600" />
                  <span className="text-sage-700 font-medium">{room.area}</span>
                </div>
                <div className="flex items-center gap-2 bg-warm-50 px-3 py-2 rounded-full">
                  <MapPin className="h-4 w-4 text-warm-600" />
                  <span className="text-warm-700 font-medium line-clamp-1">{room.location[language]}</span>
                </div>
              </div>

              <Separator className="bg-sage-200" />

              {/* Amenities */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-sage-800">{t("room.amenities")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(room.amenities).map(([key, value]) => (
                    <div
                      key={key}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                        value
                          ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800 shadow-sm"
                          : "bg-gray-50 border-gray-200 text-gray-400"
                      }`}
                    >
                      <div className={`${value ? "text-green-600" : "text-gray-400"}`}>
                        {amenityIcons[key as keyof typeof amenityIcons]}
                      </div>
                      <span className="text-sm font-medium">{t(`amenity.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="lg:col-span-1">
            <PricingSelector room={room} />
          </div>
        </div>
      </div>
    </div>
  )
}
