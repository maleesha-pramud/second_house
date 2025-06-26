"use client"

import { Construction, Clock, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RoomsConstructionOverlay() {
    return (
        <div className="absolute inset-0 bg-black/25 backdrop-blur-sm z-10 flex items-center justify-center p-4">
            <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white">
                <CardContent className="p-8 text-center space-y-6">
                    {/* Icon */}
                    <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Construction className="w-8 h-8 text-orange-600" />
                        </div>
                        <div className="absolute -top-1 -right-1">
                            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                                <Wrench className="w-3 h-3 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-3 py-1">
                        <Clock className="w-3 h-3 mr-1" />
                        Under Construction
                    </Badge>

                    {/* Title */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-gray-900">
                            Rooms Section Coming Soon
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We're working hard to bring you the best room booking experience.
                            This section will be available shortly!
                        </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>Progress</span>
                            <span>75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-500 ease-out"
                                style={{ width: '75%' }}
                            ></div>
                        </div>
                    </div>

                    {/* Estimated time */}
                    <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>Expected completion: Soon</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
