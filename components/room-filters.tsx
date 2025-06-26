"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface RoomFiltersProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export function RoomFilters({ searchTerm, setSearchTerm, activeFilter, setActiveFilter }: RoomFiltersProps) {
  const { t } = useLanguage()

  const filters = [
    { key: "all", label: t("home.filter.all") },
    { key: "available", label: t("home.filter.available") },
    { key: "kitchen", label: t("home.filter.kitchen") },
    { key: "ac", label: t("home.filter.ac") },
    { key: "budget", label: t("home.filter.budget") },
    { key: "luxury", label: t("home.filter.luxury") },
  ]

  const FilterButtons = () => (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilter === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter(filter.key)}
          className="text-sm h-9"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder={t("home.search.placeholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 text-base"
        />
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:block">
        <FilterButtons />
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden flex items-center justify-between">
        <h2 className="text-lg font-semibold">Available Rooms</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto">
            <SheetHeader>
              <SheetTitle>{t("home.filter.title")}</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <FilterButtons />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
