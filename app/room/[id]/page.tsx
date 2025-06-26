import Link from "next/link"
import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { getRoomById, getRooms } from "@/lib/rooms-data"
import { RoomDetailClient } from "./room-detail-client";

export async function generateStaticParams() {
  const rooms = getRooms()

  return rooms.map((room) => ({
    id: room.id,
  }))
}

interface RoomDetailPageProps {
  params: {
    id: string
  }
}

export default function RoomDetailPage({ params }: RoomDetailPageProps) {
  const room = getRoomById(params.id)

  if (!room) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-50 to-sunset-50">
        <ScrollToTop />
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sage-600 mb-4">Room Not Found</p>
            <Button
              asChild
              className="bg-gradient-to-r from-warm-500 to-sunset-500 hover:from-warm-600 hover:to-sunset-600"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return <RoomDetailClient room={room} />
}
