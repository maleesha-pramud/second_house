export interface Room {
  id: string
  name: { en: string; si: string }
  description: { en: string; si: string }
  pricing: {
    perNight: {
      baseRate: number // 7 PM to 6 AM
      hourlyRateOutside: number // Outside 7 PM - 6 AM period
    }
    perHour: {
      firstTwoHours: number // Rate for first 2 hours
      additionalHourly: number // Rate for each hour after first 2
    }
  }
  currency: string
  images: string[]
  amenities: {
    kitchen: boolean
    washroom: boolean
    ac: boolean
    wifi: boolean
    parking: boolean
    balcony: boolean
    tv: boolean
    refrigerator: boolean
  }
  capacity: number
  area: string
  location: { en: string; si: string }
  available: boolean
}

export const roomsData: Room[] = [
  {
    id: "room-001",
    name: {
      en: "Deluxe Garden View Room",
      si: "ඩිලක්ස් උයන් දර්ශන කාමරය",
    },
    description: {
      en: "Spacious room with beautiful garden view, perfect for couples or solo travelers seeking comfort and tranquility.",
      si: "සුන්දර උයන් දර්ශනයක් සහිත පුළුල් කාමරයක්, සුවපහසුව සහ සන්සුන්කම සොයන යුවළයන්ට හෝ තනි සංචාරකයින්ට සුදුසුයි.",
    },
    pricing: {
      perNight: {
        baseRate: 3500,
        hourlyRateOutside: 400,
      },
      perHour: {
        firstTwoHours: 1200,
        additionalHourly: 350,
      },
    },
    currency: "LKR",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: {
      kitchen: true,
      washroom: true,
      ac: true,
      wifi: true,
      parking: true,
      balcony: true,
      tv: true,
      refrigerator: true,
    },
    capacity: 2,
    area: "35 sqm",
    location: {
      en: "Central Horana, near main bus station",
      si: "මධ්‍යම හොරණ, ප්‍රධාන බස් නැවතුම ආසන්නයේ",
    },
    available: true,
  },
  {
    id: "room-002",
    name: {
      en: "Budget Friendly Single Room",
      si: "අයවැය හිතකාමී තනි කාමරය",
    },
    description: {
      en: "Cozy single room ideal for budget-conscious travelers, equipped with essential amenities for a comfortable stay.",
      si: "අයවැය සැලකිලිමත් සංචාරකයින්ට සුදුසු සුවපහසු තනි කාමරයක්, සුවපහසු නවාතැනක් සඳහා අත්‍යවශ්‍ය පහසුකම් සහිතයි.",
    },
    pricing: {
      perNight: {
        baseRate: 2000,
        hourlyRateOutside: 250,
      },
      perHour: {
        firstTwoHours: 800,
        additionalHourly: 200,
      },
    },
    currency: "LKR",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    amenities: {
      kitchen: false,
      washroom: true,
      ac: false,
      wifi: true,
      parking: false,
      balcony: false,
      tv: true,
      refrigerator: false,
    },
    capacity: 1,
    area: "20 sqm",
    location: {
      en: "Quiet residential area, 10 minutes walk to town center",
      si: "නිහඬ නේවාසික ප්‍රදේශය, නගර මධ්‍යයට මිනිත්තු 10ක පයින් ගමනක්",
    },
    available: true,
  },
  {
    id: "room-003",
    name: {
      en: "Family Suite with Kitchen",
      si: "කුස්සිය සහිත පවුල් කාමර කට්ටලය",
    },
    description: {
      en: "Spacious family suite with full kitchen facilities, perfect for families or groups looking for a home-away-from-home experience.",
      si: "සම්පූර්ණ කුස්සි පහසුකම් සහිත පුළුල් පවුල් කාමර කට්ටලයක්, නිවසින් ඈත නිවසක අත්දැකීමක් සොයන පවුල් හෝ කණ්ඩායම් සඳහා සුදුසුයි.",
    },
    pricing: {
      perNight: {
        baseRate: 5500,
        hourlyRateOutside: 650,
      },
      perHour: {
        firstTwoHours: 2000,
        additionalHourly: 550,
      },
    },
    currency: "LKR",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: {
      kitchen: true,
      washroom: true,
      ac: true,
      wifi: true,
      parking: true,
      balcony: true,
      tv: true,
      refrigerator: true,
    },
    capacity: 4,
    area: "55 sqm",
    location: {
      en: "Near Horana Hospital, easy access to public transport",
      si: "හොරණ රෝහල ආසන්නයේ, පොදු ප්‍රවාහනයට පහසු ප්‍රවේශය",
    },
    available: true,
  },
  {
    id: "room-004",
    name: {
      en: "Modern Studio Apartment",
      si: "නවීන ස්ටුඩියෝ මහල් නිවාසය",
    },
    description: {
      en: "Contemporary studio apartment with modern amenities, ideal for business travelers or young professionals.",
      si: "නවීන පහසුකම් සහිත සමකාලීන ස්ටුඩියෝ මහල් නිවාසයක්, ව්‍යාපාරික සංචාරකයින්ට හෝ තරුණ වෘත්තිකයන්ට සුදුසුයි.",
    },
    pricing: {
      perNight: {
        baseRate: 4200,
        hourlyRateOutside: 500,
      },
      perHour: {
        firstTwoHours: 1500,
        additionalHourly: 400,
      },
    },
    currency: "LKR",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: {
      kitchen: true,
      washroom: true,
      ac: true,
      wifi: true,
      parking: true,
      balcony: false,
      tv: true,
      refrigerator: true,
    },
    capacity: 2,
    area: "40 sqm",
    location: {
      en: "Business district, close to banks and offices",
      si: "ව්‍යාපාරික දිස්ත්‍රික්කය, බැංකු සහ කාර්යාල ආසන්නයේ",
    },
    available: false,
  },
  {
    id: "room-005",
    name: {
      en: "Traditional Sri Lankan Room",
      si: "සාම්ප්‍රදායික ශ්‍රී ලාංකික කාමරය",
    },
    description: {
      en: "Experience authentic Sri Lankan hospitality in this traditionally decorated room with modern comfort amenities.",
      si: "නවීන සුවපහසු පහසුකම් සහිත මෙම සාම්ප්‍රදායිකව අලංකාර කරන ලද කාමරයේ අව්‍යාජ ශ්‍රී ලාංකික ආගන්තුක සත්කාරය අත්විඳින්න.",
    },
    pricing: {
      perNight: {
        baseRate: 3800,
        hourlyRateOutside: 450,
      },
      perHour: {
        firstTwoHours: 1300,
        additionalHourly: 380,
      },
    },
    currency: "LKR",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    amenities: {
      kitchen: false,
      washroom: true,
      ac: true,
      wifi: true,
      parking: true,
      balcony: true,
      tv: true,
      refrigerator: false,
    },
    capacity: 2,
    area: "30 sqm",
    location: {
      en: "Heritage area, walking distance to local temples",
      si: "උරුම ප්‍රදේශය, ප්‍රාදේශීය දේවාල වලට පයින් ගමන් කළ හැකි දුරක්",
    },
    available: true,
  },
  {
    id: "room-006",
    name: {
      en: "Luxury Executive Room",
      si: "සුඛෝපභෝගී විධායක කාමරය",
    },
    description: {
      en: "Premium executive room with luxury amenities and services, perfect for discerning travelers seeking the finest accommodation.",
      si: "සුඛෝපභෝගී පහසුකම් සහ සේවා සහිත ප්‍රිමියම් විධායක කාමරයක්, හොඳම නවාතැන සොයන විචක්ෂණ සංචාරකයින්ට සුදුසුයි.",
    },
    pricing: {
      perNight: {
        baseRate: 7500,
        hourlyRateOutside: 900,
      },
      perHour: {
        firstTwoHours: 2500,
        additionalHourly: 750,
      },
    },
    currency: "LKR",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: {
      kitchen: true,
      washroom: true,
      ac: true,
      wifi: true,
      parking: true,
      balcony: true,
      tv: true,
      refrigerator: true,
    },
    capacity: 3,
    area: "65 sqm",
    location: {
      en: "Premium location with city view, near shopping centers",
      si: "නගර දර්ශනය සහිත ප්‍රිමියම් ස්ථානය, සාප්පු මධ්‍යස්ථාන ආසන්නයේ",
    },
    available: true,
  },
]

export function getRooms(): Room[] {
  return roomsData
}

export function getRoomById(id: string): Room | undefined {
  return roomsData.find((room) => room.id === id)
}
