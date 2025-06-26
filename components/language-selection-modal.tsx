"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Languages, Check } from "lucide-react"

interface LanguageSelectionModalProps {
  onLanguageSelect: (language: "en" | "si") => void
}

export function LanguageSelectionModal({ onLanguageSelect }: LanguageSelectionModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "si">("en")

  useEffect(() => {
    // Check if language preference exists in localStorage
    const savedLanguage = localStorage.getItem("language")
    const hasVisited = localStorage.getItem("hasVisited")

    if (!savedLanguage && !hasVisited) {
      setIsOpen(true)
    }
  }, [])

  const handleLanguageSelect = (language: "en" | "si") => {
    setSelectedLanguage(language)
  }

  const handleConfirm = () => {
    localStorage.setItem("language", selectedLanguage)
    localStorage.setItem("hasVisited", "true")
    onLanguageSelect(selectedLanguage)
    setIsOpen(false)
  }

  const languages = [
    {
      code: "en",
      name: "English",
      nativeName: "English",
      flag: "🇺🇸",
      description: "Continue in English",
    },
    {
      code: "si",
      name: "Sinhala",
      nativeName: "සිංහල",
      flag: "🇱🇰",
      description: "සිංහලෙන් ඉදිරියට යන්න",
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-md mx-auto" hideCloseButton>
        <DialogHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-warm-500 to-sunset-600 rounded-full flex items-center justify-center">
            <Languages className="h-8 w-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-sage-800">Welcome to Second Home</DialogTitle>
          <p className="text-sage-600 mt-2">Please select your preferred language</p>
          <p className="text-sage-600 text-sm">කරුණාකර ඔබේ භාෂාව තෝරන්න</p>
        </DialogHeader>

        <div className="space-y-3">
          {languages.map((language) => (
            <Card
              key={language.code}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedLanguage === language.code
                  ? "ring-2 ring-warm-500 bg-gradient-to-r from-warm-50 to-sunset-50"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => handleLanguageSelect(language.code as "en" | "si")}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{language.flag}</span>
                    <div>
                      <h3 className="font-semibold text-sage-800">{language.nativeName}</h3>
                      <p className="text-sm text-sage-600">{language.description}</p>
                    </div>
                  </div>
                  {selectedLanguage === language.code && (
                    <div className="w-6 h-6 bg-warm-500 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-4">
          <Button
            onClick={handleConfirm}
            className="w-full h-12 bg-gradient-to-r from-warm-500 to-sunset-500 hover:from-warm-600 hover:to-sunset-600 text-white font-medium"
          >
            {selectedLanguage === "en" ? "Continue" : "ඉදිරියට යන්න"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
