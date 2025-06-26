"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Moon, Sun, Info, Calculator } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import type { Room } from "@/lib/rooms-data"

interface PricingSelectorProps {
  room: Room
}

export function PricingSelector({ room }: PricingSelectorProps) {
  const { t } = useLanguage()
  const [selectedPricing, setSelectedPricing] = useState<"night" | "hour">("night")
  const [estimatedHours, setEstimatedHours] = useState(4)

  const calculateHourlyTotal = (hours: number) => {
    if (hours <= 2) {
      return room.pricing.perHour.firstTwoHours
    }
    const additionalHours = hours - 2
    return room.pricing.perHour.firstTwoHours + additionalHours * room.pricing.perHour.additionalHourly
  }

  const pricingOptions = [
    {
      id: "night",
      icon: <Moon className="h-5 w-5" />,
      title: { en: "Per Night", si: "රාත්‍රියකට" },
      subtitle: { en: "7 PM - 6 AM", si: "සවස 7 - උදේ 6" },
      price: room.pricing.perNight.baseRate,
      description: {
        en: "Perfect for overnight stays with 11-hour accommodation",
        si: "පැය 11ක නවාතැන සහිත රාත්‍රී නවාතැන් සඳහා සුදුසුයි",
      },
    },
    {
      id: "hour",
      icon: <Clock className="h-5 w-5" />,
      title: { en: "Per Hour", si: "පැයකට" },
      subtitle: { en: "Flexible timing", si: "නම්‍යශීලී කාලය" },
      price: room.pricing.perHour.firstTwoHours,
      description: {
        en: "Ideal for short stays and flexible check-in times",
        si: "කෙටි නවාතැන් සහ නම්‍යශීලී ඇතුළුවීමේ කාල සඳහා සුදුසුයි",
      },
    },
  ]

  return (
    <Card className="sticky top-24 shadow-2xl border-0 bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-sage-800">
          {t("language") === "si" ? "මිල ගණන් තෝරන්න" : "Choose Pricing"}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Pricing Options */}
        <div className="space-y-3">
          {pricingOptions.map((option) => (
            <div
              key={option.id}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selectedPricing === option.id
                  ? "border-warm-500 bg-gradient-to-r from-warm-50 to-sunset-50"
                  : "border-gray-200 hover:border-warm-300 hover:bg-warm-25"
              }`}
              onClick={() => setSelectedPricing(option.id as "night" | "hour")}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    selectedPricing === option.id
                      ? "bg-gradient-to-br from-warm-500 to-sunset-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {option.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sage-800">
                      {option.title[t("language") === "si" ? "si" : "en"]}
                    </h3>
                    <div className="text-right">
                      <span className="text-lg font-bold text-warm-600">
                        {t("common.currency")} {option.price.toLocaleString()}
                      </span>
                      {option.id === "hour" && (
                        <div className="text-xs text-sage-500">
                          {t("language") === "si" ? "පළමු පැය 2ට" : "first 2 hours"}
                        </div>
                      )}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs mb-2">
                    {option.subtitle[t("language") === "si" ? "si" : "en"]}
                  </Badge>
                  <p className="text-sm text-sage-600">{option.description[t("language") === "si" ? "si" : "en"]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Pricing Details */}
        {selectedPricing === "night" ? (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">
                    {t("language") === "si" ? "රාත්‍රී මිල ගණන් විස්තර" : "Night Rate Details"}
                  </h4>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div className="flex justify-between">
                      <span>{t("language") === "si" ? "මූලික අනුපාතය (සවස 7 - උදේ 6):" : "Base rate (7 PM - 6 AM):"}</span>
                      <span className="font-medium">
                        {t("common.currency")} {room.pricing.perNight.baseRate.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("language") === "si" ? "මෙම කාලයෙන් පිටත පැයකට:" : "Outside hours (per hour):"}</span>
                      <span className="font-medium">
                        {t("common.currency")} {room.pricing.perNight.hourlyRateOutside.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-start gap-2">
                <Calculator className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-medium text-green-800 mb-2">
                    {t("language") === "si" ? "පැය මිල ගණන් විස්තර" : "Hourly Rate Details"}
                  </h4>
                  <div className="space-y-2 text-sm text-green-700">
                    <div className="flex justify-between">
                      <span>{t("language") === "si" ? "පළමු පැය 2:" : "First 2 hours:"}</span>
                      <span className="font-medium">
                        {t("common.currency")} {room.pricing.perHour.firstTwoHours.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("language") === "si" ? "අමතර පැයකට:" : "Each additional hour:"}</span>
                      <span className="font-medium">
                        {t("common.currency")} {room.pricing.perHour.additionalHourly.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hour Calculator */}
            <div className="bg-warm-50 p-4 rounded-lg border border-warm-200">
              <h4 className="font-medium text-warm-800 mb-3">
                {t("language") === "si" ? "මිල ගණන් ගණනය කරන්න" : "Price Calculator"}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <label className="text-sm text-warm-700 min-w-0 flex-shrink-0">
                    {t("language") === "si" ? "පැය:" : "Hours:"}
                  </label>
                  <div className="flex gap-2">
                    {[2, 4, 6, 8, 12].map((hours) => (
                      <Button
                        key={hours}
                        variant={estimatedHours === hours ? "default" : "outline"}
                        size="sm"
                        onClick={() => setEstimatedHours(hours)}
                        className="text-xs h-8 px-3"
                      >
                        {hours}h
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-warm-200">
                  <span className="text-sm text-warm-700">{t("language") === "si" ? "මුළු මිල:" : "Total price:"}</span>
                  <span className="text-lg font-bold text-warm-800">
                    {t("common.currency")} {calculateHourlyTotal(estimatedHours).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <Separator />

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-base bg-gradient-to-r from-warm-500 to-sunset-500 hover:from-warm-600 hover:to-sunset-600 shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
            disabled={!room.available}
          >
            {room.available ? (t("language") === "si" ? "දැන් වෙන්කරවා ගන්න" : "Book Now") : t("room.not.available")}
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="flex items-center gap-2 h-10 border-warm-200 hover:bg-warm-50">
              <Sun className="h-4 w-4 text-warm-600" />
              <span className="text-sm">{t("language") === "si" ? "අමතන්න" : "Call"}</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 h-10 border-green-200 hover:bg-green-50">
              <span className="text-sm">WhatsApp</span>
            </Button>
          </div>
        </div>

        <div className="text-xs text-sage-500 text-center pt-2 bg-sage-50 p-3 rounded-lg">
          {t("language") === "si"
            ? "වෙන්කරවා ගැනීම සහ ලබා ගත හැකි බව සඳහා සත්කාරකයා සම්බන්ධ කරන්න"
            : "Contact host for booking and availability"}
        </div>
      </CardContent>
    </Card>
  )
}
