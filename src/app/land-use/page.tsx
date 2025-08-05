"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Map, Building, Home, TreePine, Car, Plus } from "lucide-react"

export default function LandUsePage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Land Use Assignment</h1>
            <p className="text-muted-foreground">
              Assign land use types to your subdivided lots
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Assign Land Use
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Residential
              </CardTitle>
              <CardDescription>
                Housing and living spaces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary">Single Family</Badge>
                <Badge variant="secondary">Multi Family</Badge>
                <Badge variant="secondary">Mixed Use</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Commercial
              </CardTitle>
              <CardDescription>
                Retail and business spaces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary">Retail</Badge>
                <Badge variant="secondary">Office</Badge>
                <Badge variant="secondary">Hotel</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TreePine className="h-5 w-5" />
                Open Space
              </CardTitle>
              <CardDescription>
                Parks and recreational areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary">Park</Badge>
                <Badge variant="secondary">Plaza</Badge>
                <Badge variant="secondary">Green Space</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Infrastructure
              </CardTitle>
              <CardDescription>
                Roads and utilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary">Roads</Badge>
                <Badge variant="secondary">Parking</Badge>
                <Badge variant="secondary">Utilities</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Industrial
              </CardTitle>
              <CardDescription>
                Manufacturing and warehousing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary">Light Industrial</Badge>
                <Badge variant="secondary">Heavy Industrial</Badge>
                <Badge variant="secondary">Warehousing</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Mixed Use
              </CardTitle>
              <CardDescription>
                Combined development types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary">Live/Work</Badge>
                <Badge variant="secondary">Retail/Office</Badge>
                <Badge variant="secondary">Residential/Commercial</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Current Land Use Assignment</CardTitle>
            <CardDescription>
              View and manage assigned land uses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Map className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No land uses assigned yet. Subdivide your site first, then assign land uses.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}