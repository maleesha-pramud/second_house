"use client"

import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Sparkles,
  CheckCircle,
  Clock,
  Users,
  SprayCanIcon as Spray,
  Wind,
  Droplets,
  Zap,
  Heart,
  Award,
  ArrowRight,
  Home,
  ChevronDown,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { useState } from "react"

export default function CleaningPage() {
  const { t } = useLanguage()
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const cleaningSteps = [
    {
      icon: <Users className="h-6 w-6" />,
      title: { en: "Guest Checkout", si: "අමුත්තන් පිටවීම" },
      description: {
        en: "Once our guests check out, we immediately begin our comprehensive cleaning protocol",
        si: "අපගේ අමුත්තන් පිටව ගිය පසු, අපි වහාම අපගේ සම්පූර්ණ පිරිසිදු කිරීමේ ක්‍රමවේදය ආරම්භ කරමු",
      },
      details: {
        en: "Our team is notified instantly and arrives within 15 minutes to begin the cleaning process.",
        si: "අපගේ කණ්ඩායමට වහාම දැනුම් දෙන අතර පිරිසිදු කිරීමේ ක්‍රියාවලිය ආරම්භ කිරීම සඳහා මිනිත්තු 15ක් ඇතුළත පැමිණේ.",
      },
      time: "0 min",
      color: "from-red-400 to-pink-400",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: { en: "Deep Ventilation", si: "ගැඹුරු වාතාශ්‍රය" },
      description: {
        en: "All windows and doors are opened for fresh air circulation",
        si: "නැවුම් වාතය සංසරණය සඳහා සියලුම ජනේල සහ දොරවල් විවෘත කරනු ලැබේ",
      },
      details: {
        en: "We ensure complete air exchange to remove any lingering odors and refresh the room atmosphere.",
        si: "ඕනෑම ගන්ධයක් ඉවත් කිරීමට සහ කාමරයේ වායුගෝලය නැවුම් කිරීමට අපි සම්පූර්ණ වාතය හුවමාරුව සහතික කරමු.",
      },
      time: "30 min",
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      icon: <Spray className="h-6 w-6" />,
      title: { en: "Surface Sanitization", si: "මතුපිට සනීපාරක්ෂාව" },
      description: {
        en: "Every surface is sanitized with hospital-grade disinfectants",
        si: "සෑම මතුපිටක්ම රෝහල් ශ්‍රේණියේ විෂබීජ නාශක සමඟ සනීපාරක්ෂා කරනු ලැබේ",
      },
      details: {
        en: "Door handles, light switches, remote controls, and all furniture surfaces receive thorough sanitization.",
        si: "දොර හැන්ඩල්, විදුලි ස්විච, දුරස්ථ පාලක සහ සියලුම ගෘහ භාණ්ඩ මතුපිට සම්පූර්ණ සනීපාරක්ෂාවක් ලබා ගනී.",
      },
      time: "45 min",
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: { en: "Deep Floor Cleaning", si: "ගැඹුරු බිම් පිරිසිදු කිරීම" },
      description: {
        en: "Floors are thoroughly cleaned with antibacterial solutions",
        si: "බිම් ප්‍රතිබැක්ටීරීය ද්‍රාවණ සමඟ හොඳින් පිරිසිදු කරනු ලැබේ",
      },
      details: {
        en: "We use specialized equipment and eco-friendly antibacterial solutions for deep floor cleaning.",
        si: "ගැඹුරු බිම් පිරිසිදු කිරීම සඳහා අපි විශේෂ උපකරණ සහ පරිසර හිතකාමී ප්‍රතිබැක්ටීරීය ද්‍රාවණ භාවිතා කරමු.",
      },
      time: "60 min",
      color: "from-purple-400 to-violet-400",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: { en: "Bathroom Deep Clean", si: "නාන කාමර ගැඹුරු පිරිසිදු කිරීම" },
      description: {
        en: "Bathrooms receive special attention with UV sanitization",
        si: "නාන කාමර UV සනීපාරක්ෂාව සමඟ විශේෂ අවධානයක් ලබා ගනී",
      },
      details: {
        en: "Complete bathroom sanitization including UV light treatment for maximum hygiene assurance.",
        si: "උපරිම සනීපාරක්ෂක සහතිකය සඳහා UV ආලෝක ප්‍රතිකාර ඇතුළුව සම්පූර්ණ නාන කාමර සනීපාරක්ෂාව.",
      },
      time: "90 min",
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: { en: "Final Inspection", si: "අවසාන පරීක්ෂණය" },
      description: {
        en: "Quality team conducts thorough inspection",
        si: "ගුණාත්මක කණ්ඩායම සම්පූර්ණ පරීක්ෂණයක් සිදු කරයි",
      },
      details: {
        en: "Our quality assurance team performs a detailed checklist inspection before approving the room.",
        si: "කාමරය අනුමත කිරීමට පෙර අපගේ ගුණාත්මක සහතික කණ්ඩායම විස්තරාත්මක පරීක්ෂණ ලැයිස්තු පරීක්ෂණයක් සිදු කරයි.",
      },
      time: "120 min",
      color: "from-indigo-400 to-purple-400",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
  ]

  const certifications = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: { en: "WHO Guidelines", si: "WHO මාර්ගෝපදේශ" },
      description: { en: "Following WHO protocols", si: "WHO ප්‍රොටෝකෝල අනුගමනය" },
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: { en: "Certified Products", si: "සහතික නිෂ්පාදන" },
      description: { en: "Hospital-grade only", si: "රෝහල් ශ්‍රේණියේ පමණයි" },
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: { en: "100% Guarantee", si: "100% සහතිකය" },
      description: { en: "Satisfaction assured", si: "තෘප්තිමත් බව සහතිකයි" },
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Header />

      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-br from-green-500 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 py-12 md:py-16 relative">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/20 mb-2">
              <Shield className="h-4 w-4" />
              <span className="font-medium">{t("language") === "si" ? "සනීපාරක්ෂිත" : "Sanitized"}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              {t("language") === "si" ? "අපගේ පිරිසිදු කිරීමේ ක්‍රියාවලිය" : "Our Cleaning Process"}
            </h1>
            <p className="text-green-100 max-w-lg mx-auto text-sm md:text-base leading-relaxed px-4">
              {t("language") === "si"
                ? "සෑම අමුත්තෙකුගේ පිටවීමෙන් පසුව අපි කරන සම්පූර්ණ පිරිසිදු කිරීමේ ක්‍රියාවලිය"
                : "Our comprehensive cleaning process after every guest checkout"}
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps - Mobile First Design */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              {t("language") === "si" ? "6 පියවර ක්‍රියාවලිය" : "6-Step Process"}
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              {t("language") === "si" ? "ඔබගේ ආරක්ෂාව සඳහා අපි අනුගමනය කරන ක්‍රමය" : "The method we follow for your safety"}
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {cleaningSteps.map((step, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-0">
                  {/* Step Header */}
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                  >
                    <div className="flex items-center gap-3">
                      {/* Step Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center flex-shrink-0`}
                      >
                        {step.icon}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-800 text-sm md:text-base truncate">
                            {step.title[t("language") === "si" ? "si" : "en"]}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 flex-shrink-0"
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            {step.time}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                          {step.description[t("language") === "si" ? "si" : "en"]}
                        </p>
                      </div>

                      {/* Expand Icon */}
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                          expandedStep === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedStep === index && (
                    <div className={`px-4 pb-4 ${step.bgColor} border-t border-gray-100`}>
                      <div className="pt-3">
                        <p className={`text-xs md:text-sm leading-relaxed ${step.textColor}`}>
                          {step.details[t("language") === "si" ? "si" : "en"]}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications - Simplified Mobile */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              {t("language") === "si" ? "අපගේ සහතික" : "Our Standards"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                    {cert.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">
                    {cert.title[t("language") === "si" ? "si" : "en"]}
                  </h3>
                  <p className="text-gray-600 text-xs">{cert.description[t("language") === "si" ? "si" : "en"]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Mobile Optimized */}
      <section className="py-12 bg-gradient-to-br from-warm-500 to-sunset-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {t("language") === "si" ? "ඔබගේ සෞඛ්‍යය අපගේ වගකීමයි" : "Your Health is Our Priority"}
            </h2>
            <p className="text-warm-100 mb-6 text-sm md:text-base leading-relaxed px-4">
              {t("language") === "si"
                ? "අපි සෑම කාමරයක්ම ඔබගේ නිවස වැනි ආරක්ෂිත ස්ථානයක් බවට පත් කිරීමට කැපවී සිටිමු"
                : "We're committed to making every room as safe as your own home"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="secondary" className="bg-white text-warm-600 hover:bg-warm-50 h-11">
                <Link href="/#rooms" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  {t("language") === "si" ? "කාමර බලන්න" : "View Rooms"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 h-11">
                <Link href="/">{t("language") === "si" ? "මුල් පිටුවට" : "Back to Home"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
