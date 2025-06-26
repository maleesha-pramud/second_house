"use client"

import Link from "next/link"
import { Home, MapPin, Menu, Shield, Lock } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { LocationModal } from "./location-modal"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-bold text-xl">
            <div className="bg-gradient-to-br from-warm-500 to-sunset-600 text-white p-2.5 rounded-xl shadow-lg">
              <Home className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg leading-tight bg-gradient-to-r from-warm-600 to-sunset-600 bg-clip-text text-transparent">
                Second Home
              </span>
              <span className="text-sm text-sage-600 font-normal leading-tight">Horana</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:text-warm-600 transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/#rooms" className="text-sm font-medium hover:text-warm-600 transition-colors">
              {t("nav.rooms")}
            </Link>
            <Link
              href="/cleaning"
              className="text-sm font-medium hover:text-warm-600 transition-colors flex items-center gap-1"
            >
              <Shield className="h-4 w-4" />
              {t("language") === "si" ? "පිරිසිදුකම" : "Cleaning"}
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium hover:text-warm-600 transition-colors flex items-center gap-1"
            >
              <Lock className="h-4 w-4" />
              {t("language") === "si" ? "පෞද්ගලිකත්වය" : "Privacy"}
            </Link>
            <LocationModal />
            <div className="flex items-center gap-1 text-sm text-sage-600 bg-sage-50 px-3 py-1.5 rounded-full">
              <MapPin className="h-4 w-4" />
              <span>Horana, Sri Lanka</span>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile Location Button */}
            <div className="md:hidden">
              <LocationModal />
            </div>

            <LanguageSwitcher />

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="hover:bg-warm-50">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>{t("language") === "si" ? "මෙනුව" : "Navigation Menu"}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium hover:text-warm-600 transition-colors">
                    {t("nav.home")}
                  </Link>
                  <Link href="/#rooms" className="text-lg font-medium hover:text-warm-600 transition-colors">
                    {t("nav.rooms")}
                  </Link>
                  <Link
                    href="/cleaning"
                    className="text-lg font-medium hover:text-warm-600 transition-colors flex items-center gap-2"
                  >
                    <Shield className="h-5 w-5" />
                    {t("language") === "si" ? "පිරිසිදුකම" : "Cleaning Process"}
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-lg font-medium hover:text-warm-600 transition-colors flex items-center gap-2"
                  >
                    <Lock className="h-5 w-5" />
                    {t("language") === "si" ? "පෞද්ගලිකත්වය" : "Privacy & Security"}
                  </Link>
                  <div className="pt-4 border-t border-sage-100">
                    <LocationModal />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-sage-600">
                    <MapPin className="h-4 w-4" />
                    <span>Horana, Sri Lanka</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
