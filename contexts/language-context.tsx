"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "si"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.rooms": "Rooms",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.location": "Location",
    "nav.cleaning": "Cleaning",

    // Homepage
    "home.title": "Your Second Home in Horana",
    "home.subtitle":
      "Discover comfortable and affordable short-term room rentals with all the amenities you need for a perfect stay",
    "home.search.placeholder": "Search rooms...",
    "home.filter.all": "All Rooms",
    "home.filter.title": "Filter Rooms",
    "home.filter.available": "Available",
    "home.filter.kitchen": "With Kitchen",
    "home.filter.ac": "Air Conditioned",
    "home.filter.budget": "Budget Friendly",
    "home.filter.luxury": "Luxury",

    // Location
    "location.title": "Find Us in the Heart of Horana",
    "location.subtitle": "Conveniently located with easy access to transportation, hospitals, and local attractions",
    "location.address": "Our Address",
    "location.nearby": "Nearby Attractions",
    "location.directions": "Get Directions",
    "location.copy": "Copy Address",
    "location.open": "Open in Maps",

    // Room details
    "room.per.night": "per night",
    "room.per.hour": "per hour",
    "room.capacity": "Capacity",
    "room.area": "Area",
    "room.location": "Location",
    "room.amenities": "Amenities",
    "room.book.now": "Book Now",
    "room.contact": "Contact Host",
    "room.available": "Available",
    "room.not.available": "Not Available",
    "room.view.details": "View Details",

    // Pricing
    "pricing.choose": "Choose Pricing",
    "pricing.night.title": "Per Night",
    "pricing.night.subtitle": "7 PM - 6 AM",
    "pricing.hour.title": "Per Hour",
    "pricing.hour.subtitle": "Flexible timing",
    "pricing.night.details": "Night Rate Details",
    "pricing.hour.details": "Hourly Rate Details",
    "pricing.calculator": "Price Calculator",

    // Amenities
    "amenity.kitchen": "Kitchen",
    "amenity.washroom": "Private Washroom",
    "amenity.ac": "Air Conditioning",
    "amenity.wifi": "Free WiFi",
    "amenity.parking": "Parking",
    "amenity.balcony": "Balcony",
    "amenity.tv": "Television",
    "amenity.refrigerator": "Refrigerator",

    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.back": "Back to Rooms",
    "common.currency": "LKR",
    "common.guests": "guests",
    "common.guest": "guest",
    language: "en",
  },
  si: {
    // Navigation
    "nav.home": "මුල් පිටුව",
    "nav.rooms": "කාමර",
    "nav.about": "අප ගැන",
    "nav.contact": "සම්බන්ධතා",
    "nav.location": "ස්ථානය",
    "nav.cleaning": "පිරිසිදුකම",

    // Homepage
    "home.title": "හොරණේ ඔබේ දෙවන නිවස",
    "home.subtitle": "පරිපූර්ණ නවාතැනක් සඳහා අවශ්‍ය සියලුම පහසුකම් සහිත සුවපහසු සහ දැරිය හැකි කෙටිකාලීන කාමර කුලියට සොයා ගන්න",
    "home.search.placeholder": "කාමර සොයන්න...",
    "home.filter.all": "සියලුම කාමර",
    "home.filter.title": "කාමර පෙරහන",
    "home.filter.available": "ලබා ගත හැකි",
    "home.filter.kitchen": "කුස්සිය සහිත",
    "home.filter.ac": "වායු සමීකරණය",
    "home.filter.budget": "අයවැය හිතකාමී",
    "home.filter.luxury": "සුඛෝපභෝගී",

    // Location
    "location.title": "හොරණ හදවතේ අපව සොයා ගන්න",
    "location.subtitle": "ප්‍රවාහන, රෝහල් සහ ප්‍රාදේශීය ආකර්ෂණීය ස්ථාන වලට පහසු ප්‍රවේශය සහිත පහසු ස්ථානයක්",
    "location.address": "අපගේ ලිපිනය",
    "location.nearby": "ආසන්න ආකර්ෂණීය ස්ථාන",
    "location.directions": "දිශාවන් ලබා ගන්න",
    "location.copy": "ලිපිනය පිටපත් කරන්න",
    "location.open": "සිතියම්වල විවෘත කරන්න",

    // Room details
    "room.per.night": "රාත්‍රියකට",
    "room.per.hour": "පැයකට",
    "room.capacity": "ධාරිතාව",
    "room.area": "ප්‍රදේශය",
    "room.location": "ස්ථානය",
    "room.amenities": "පහසුකම්",
    "room.book.now": "දැන් වෙන්කරවා ගන්න",
    "room.contact": "සත්කාරක සම්බන්ධ කරන්න",
    "room.available": "ලබා ගත හැකිය",
    "room.not.available": "ලබා ගත නොහැක",
    "room.view.details": "විස්තර බලන්න",

    // Pricing
    "pricing.choose": "මිල ගණන් තෝරන්න",
    "pricing.night.title": "රාත්‍රියකට",
    "pricing.night.subtitle": "සවස 7 - උදේ 6",
    "pricing.hour.title": "පැයකට",
    "pricing.hour.subtitle": "නම්‍යශීලී කාලය",
    "pricing.night.details": "රාත්‍රී මිල ගණන් විස්තර",
    "pricing.hour.details": "පැය මිල ගණන් විස්තර",
    "pricing.calculator": "මිල ගණන් ගණනය කරන්න",

    // Amenities
    "amenity.kitchen": "කුස්සිය",
    "amenity.washroom": "පුද්ගලික නාන කාමරය",
    "amenity.ac": "වායු සමීකරණය",
    "amenity.wifi": "නොමිලේ WiFi",
    "amenity.parking": "වාහන නැවැත්වීම",
    "amenity.balcony": "බැල්කනිය",
    "amenity.tv": "රූපවාහිනිය",
    "amenity.refrigerator": "ශීතකරණය",

    // Common
    "common.loading": "පූරණය වෙමින්...",
    "common.error": "යමක් වැරදී ගියේය",
    "common.back": "කාමර වෙත ආපසු",
    "common.currency": "රු.",
    "common.guests": "අමුත්තන්",
    "common.guest": "අමුත්තා",
    language: "si",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "si")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
