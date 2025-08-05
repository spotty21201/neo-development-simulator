"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Map, Grid3X3, Plus, Settings } from "lucide-react"

export default function SubdivisionPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Land Subdivision</h1>
            <p className="text-muted-foreground">
              Divide your site into lots and tracts for development
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Subdivision
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grid3X3 className="h-5 w-5" />
                Auto Subdivision
              </CardTitle>
              <CardDescription>
                Automatically divide site based on parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-8 text-muted-foreground">
                <Map className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Auto subdivision tool coming soon</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Manual Subdivision
              </CardTitle>
              <CardDescription>
                Manually define lot boundaries and areas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-8 text-muted-foreground">
                <Map className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Manual subdivision tool coming soon</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Current Lots</CardTitle>
            <CardDescription>
              Manage your subdivided lots
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Map className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No lots defined yet. Create your first subdivision to get started.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}