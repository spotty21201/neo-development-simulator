"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Building, Plus, TrendingUp } from "lucide-react"

export default function GFAPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">GFA Calculator</h1>
            <p className="text-muted-foreground">
              Calculate Gross Floor Area and building massing
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Building
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Site Summary
              </CardTitle>
              <CardDescription>
                Overall development metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Site Area</span>
                  <span className="font-medium">10,000 m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total GFA</span>
                  <span className="font-medium">25,000 m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">FAR Achieved</span>
                  <span className="font-medium">2.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Building Coverage</span>
                  <span className="font-medium">40%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Buildings
              </CardTitle>
              <CardDescription>
                Building count and types
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Buildings</span>
                  <Badge variant="secondary">5</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Towers</span>
                  <Badge variant="outline">2</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Podiums</span>
                  <Badge variant="outline">3</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Mid-rise</span>
                  <Badge variant="outline">0</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Efficiency
              </CardTitle>
              <CardDescription>
                Development efficiency metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Efficiency Ratio</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Floor Plate</span>
                  <span className="font-medium">1,200 m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Max Height</span>
                  <span className="font-medium">120 m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Floors</span>
                  <span className="font-medium">45</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Building Details</CardTitle>
            <CardDescription>
              Individual building specifications and calculations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Building className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No buildings added yet. Add your first building to start calculating GFA.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}