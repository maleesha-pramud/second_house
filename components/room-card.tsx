"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin, Users, Wifi, Car, Utensils, Snowflake, Star, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import type { Room } from "@/lib/rooms-data"

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  const { language, t } = useLanguage()

  const getAmenityIcons = () => {
    const icons = []
    if (room.amenities.wifi) icons.push(<Wifi key="wifi" className="h-4 w-4" />)
    if (room.amenities.kitchen) icons.push(<Utensils key="kitchen" className="h-4 w-4" />)
    if (room.amenities.ac) icons.push(<Snowflake key="ac" className="h-4 w-4" />)
    if (room.amenities.parking) icons.push(<Car key="parking" className="h-4 w-4" />)
    return icons.slice(0, 3)
  }

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-1 group">
      <div className="relative">
        <Image
          src={room.images[0] || "/placeholder.svg"}
          alt={room.name[language]}
          width={400}
          height={240}
          className="w-full h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3">
          <Badge
            variant={room.available ? "default" : "secondary"}
            className={`shadow-lg ${room.available ? "bg-green-500 hover:bg-green-600" : "bg-gray-500"}`}
          >
            {room.available ? t("room.available") : t("room.not.available")}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors cursor-pointer">
            <Heart className="h-4 w-4 text-warm-500" />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-xs font-medium">4.8</span>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-4 md:p-5">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg md:text-xl line-clamp-1 mb-1 text-sage-800 group-hover:text-warm-600 transition-colors">
              {room.name[language]}
            </h3>
            <p className="text-sm text-sage-600 line-clamp-2 leading-relaxed">{room.description[language]}</p>
          </div>

          <div className="flex items-center justify-between text-sm text-sage-500">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>
                {room.capacity} {room.capacity === 1 ? t("common.guest") : t("common.guests")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{room.area}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {getAmenityIcons().map((icon, index) => (
              <div key={index} className="text-warm-500 bg-warm-50 p-1.5 rounded-lg">
                {icon}
              </div>
            ))}
            {getAmenityIcons().length > 0 && (
              <span className="text-xs text-sage-500 bg-sage-50 px-2 py-1 rounded-full">
                +{Object.values(room.amenities).filter(Boolean).length - 3} more
              </span>
            )}
          </div>

          <div className="pt-2">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold bg-gradient-to-r from-warm-600 to-sunset-600 bg-clip-text text-transparent">
                {t("common.currency")} {room.pricing.perNight.baseRate.toLocaleString()}
              </span>
              <span className="text-sm text-sage-500">{t("room.per.night")}</span>
            </div>
            <div className="text-xs text-sage-500 mt-1">
              {t("language") === "si" ? "පැයකට රු. " : "From LKR "}
              {room.pricing.perHour.firstTwoHours.toLocaleString()}
              {t("language") === "si" ? " සිට" : "/2hrs"}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 md:p-5 pt-0">
        <Button
          asChild
          className="w-full h-11 bg-gradient-to-r from-warm-500 to-sunset-500 hover:from-warm-600 hover:to-sunset-600 shadow-lg hover:shadow-xl transition-all duration-300"
          disabled={!room.available}
        >
          <Link href={`/room/${room.id}`}>{room.available ? t("room.view.details") : t("room.not.available")}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
