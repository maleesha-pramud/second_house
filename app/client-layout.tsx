"use client"

import type React from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { LanguageSelectionModal } from "@/components/language-selection-modal"
import { useLanguage } from "@/contexts/language-context"

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { setLanguage } = useLanguage()

  return (
    <>
      <LanguageSelectionModal onLanguageSelect={setLanguage} />
      {children}
    </>
  )
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  )
}
