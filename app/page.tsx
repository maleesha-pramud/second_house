"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { RoomCard } from "@/components/room-card"
import { RoomFilters } from "@/components/room-filters"
import { LocationSection } from "@/components/location-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useLanguage } from "@/contexts/language-context"
import { getRooms, type Room } from "@/lib/rooms-data"

export default function HomePage() {
  const { language, t } = useLanguage()
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    const loadRooms = () => {
      try {
        const roomsData = getRooms()
        setRooms(roomsData)
      } catch (error) {
        console.error("Error loading rooms:", error)
      } finally {
        setLoading(false)
      }
    }

    loadRooms()
  }, [])

  const filteredRooms = rooms.filter((room) => {
    // Search filter
    const matchesSearch =
      room.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.description[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.location[language].toLowerCase().includes(searchTerm.toLowerCase())

    if (!matchesSearch) return false

    // Category filters
    switch (activeFilter) {
      case "available":
        return room.available
      case "kitchen":
        return room.amenities.kitchen
      case "ac":
        return room.amenities.ac
      case "budget":
        return room.price <= 3000
      case "luxury":
        return room.price >= 6000
      default:
        return true
    }
  })

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 to-sunset-50">
      <ScrollToTop />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-600 via-sunset-600 to-ocean-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              {t("home.title")}
            </h1>
            <p className="text-lg md:text-xl text-warm-100 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              {t("home.subtitle")}
            </p>
            <div className="pt-4 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 text-sm border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                <span className="font-medium">
                  {filteredRooms.filter((room) => room.available).length} rooms available now
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-warm-50 to-transparent"></div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <RoomFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>

          {filteredRooms.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-warm-100 to-sunset-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-sage-800">No rooms found</h3>
                <p className="text-sage-600">Try adjusting your search or filter criteria</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
              {filteredRooms.map((room, index) => (
                <div key={room.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
                  <RoomCard room={room} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Location Section */}
      <LocationSection />
    </div>
  )
}
