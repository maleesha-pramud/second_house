"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="text-xs"
      >
        EN
      </Button>
      <Button
        variant={language === "si" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("si")}
        className="text-xs"
      >
        සිං
      </Button>
    </div>
  )
}
