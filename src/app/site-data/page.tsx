"use client"

import { useState } from "react"
import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Map, 
  Save, 
  Plus, 
  X,
  Building,
  Trees,
  Home,
  Navigation
} from "lucide-react"

interface SiteData {
  name: string
  location: string
  area: string
  areaUnit: "m²" | "ha" | "acres"
  description: string
  constraints: string[]
  surroundingUses: string[]
  topography: string
  accessPoints: string[]
}

const constraintOptions = [
  "Flood Zone",
  "Heritage Building",
  "Environmental Protection",
  "Utility Easement",
  "Setback Requirements",
  "Height Restrictions",
  "View Corridors",
  "Noise Restrictions",
  "Soil Conditions",
  "Infrastructure Limits"
]

const surroundingUseOptions = [
  "Residential",
  "Commercial",
  "Office",
  "Industrial",
  "Park/Green Space",
  "Educational",
  "Healthcare",
  "Transportation",
  "Mixed-Use",
  "Retail"
]

const topographyOptions = [
  "Flat",
  "Gentle Slope",
  "Moderate Slope",
  "Steep Slope",
  "Terraced",
  "Irregular",
  "Multi-level"
]

export default function SiteDataPage() {
  const [siteData, setSiteData] = useState<SiteData>({
    name: "",
    location: "",
    area: "",
    areaUnit: "m²",
    description: "",
    constraints: [],
    surroundingUses: [],
    topography: "",
    accessPoints: []
  })

  const [newConstraint, setNewConstraint] = useState("")
  const [newSurroundingUse, setNewSurroundingUse] = useState("")
  const [newAccessPoint, setNewAccessPoint] = useState("")

  const addConstraint = (constraint: string) => {
    if (constraint && !siteData.constraints.includes(constraint)) {
      setSiteData(prev => ({
        ...prev,
        constraints: [...prev.constraints, constraint]
      }))
    }
  }

  const removeConstraint = (constraint: string) => {
    setSiteData(prev => ({
      ...prev,
      constraints: prev.constraints.filter(c => c !== constraint)
    }))
  }

  const addSurroundingUse = (use: string) => {
    if (use && !siteData.surroundingUses.includes(use)) {
      setSiteData(prev => ({
        ...prev,
        surroundingUses: [...prev.surroundingUses, use]
      }))
    }
  }

  const removeSurroundingUse = (use: string) => {
    setSiteData(prev => ({
      ...prev,
      surroundingUses: prev.surroundingUses.filter(u => u !== use)
    }))
  }

  const addAccessPoint = () => {
    if (newAccessPoint.trim()) {
      setSiteData(prev => ({
        ...prev,
        accessPoints: [...prev.accessPoints, newAccessPoint.trim()]
      }))
      setNewAccessPoint("")
    }
  }

  const removeAccessPoint = (point: string) => {
    setSiteData(prev => ({
      ...prev,
      accessPoints: prev.accessPoints.filter(p => p !== point)
    }))
  }

  const handleSave = () => {
    console.log("Saving site data:", siteData)
    // TODO: Implement save functionality
  }

  const convertArea = (value: string, fromUnit: string, toUnit: string) => {
    const numValue = parseFloat(value)
    if (isNaN(numValue)) return value

    if (fromUnit === "m²" && toUnit === "ha") return (numValue / 10000).toFixed(2)
    if (fromUnit === "m²" && toUnit === "acres") return (numValue / 4046.86).toFixed(2)
    if (fromUnit === "ha" && toUnit === "m²") return (numValue * 10000).toFixed(0)
    if (fromUnit === "ha" && toUnit === "acres") return (numValue * 2.47105).toFixed(2)
    if (fromUnit === "acres" && toUnit === "m²") return (numValue * 4046.86).toFixed(0)
    if (fromUnit === "acres" && toUnit === "ha") return (numValue / 2.47105).toFixed(2)
    return value
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Site Data</h1>
            <p className="text-muted-foreground">
              Define your project site characteristics and constraints
            </p>
          </div>
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Site Data
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Basic Information
              </CardTitle>
              <CardDescription>
                General site identification and location details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input
                  id="site-name"
                  placeholder="Enter site name"
                  value={siteData.name}
                  onChange={(e) => setSiteData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Enter site address or coordinates"
                  value={siteData.location}
                  onChange={(e) => setSiteData(prev => ({ ...prev, location: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="area">Site Area</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="0"
                    value={siteData.area}
                    onChange={(e) => setSiteData(prev => ({ ...prev, area: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area-unit">Unit</Label>
                  <Select 
                    value={siteData.areaUnit} 
                    onValueChange={(value: "m²" | "ha" | "acres") => {
                      setSiteData(prev => ({ ...prev, areaUnit: value }))
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="m²">Square meters (m²)</SelectItem>
                      <SelectItem value="ha">Hectares (ha)</SelectItem>
                      <SelectItem value="acres">Acres</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {siteData.area && (
                <div className="text-sm text-muted-foreground">
                  Equivalent to:
                  {siteData.areaUnit !== "m²" && ` ${convertArea(siteData.area, siteData.areaUnit, "m²")} m²`}
                  {siteData.areaUnit !== "ha" && ` ${convertArea(siteData.area, siteData.areaUnit, "ha")} ha`}
                  {siteData.areaUnit !== "acres" && ` ${convertArea(siteData.area, siteData.areaUnit, "acres")} acres`}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the site characteristics, current use, etc."
                  value={siteData.description}
                  onChange={(e) => setSiteData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Site Characteristics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trees className="h-5 w-5" />
                Site Characteristics
              </CardTitle>
              <CardDescription>
                Physical and environmental site attributes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Topography</Label>
                <Select 
                  value={siteData.topography} 
                  onValueChange={(value) => setSiteData(prev => ({ ...prev, topography: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select topography type" />
                  </SelectTrigger>
                  <SelectContent>
                    {topographyOptions.map(option => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Access Points</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add access point (e.g., Main Street, Highway Exit)"
                    value={newAccessPoint}
                    onChange={(e) => setNewAccessPoint(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addAccessPoint()}
                  />
                  <Button onClick={addAccessPoint} size="icon" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {siteData.accessPoints.map((point, index) => (
                    <Badge key={index} variant="secondary" className="gap-1">
                      <Navigation className="h-3 w-3" />
                      {point}
                      <button
                        onClick={() => removeAccessPoint(point)}
                        className="ml-1 hover:bg-destructive hover:text-destructive-foreground rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Surrounding Land Uses</Label>
                <Select onValueChange={addSurroundingUse} value="">
                  <SelectTrigger>
                    <SelectValue placeholder="Add surrounding land use" />
                  </SelectTrigger>
                  <SelectContent>
                    {surroundingUseOptions.map(option => (
                      <SelectItem key={option} value={option}>
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4" />
                          {option}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex flex-wrap gap-2 mt-2">
                  {siteData.surroundingUses.map((use, index) => (
                    <Badge key={index} variant="outline" className="gap-1">
                      <Building className="h-3 w-3" />
                      {use}
                      <button
                        onClick={() => removeSurroundingUse(use)}
                        className="ml-1 hover:bg-destructive hover:text-destructive-foreground rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Constraints */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Site Constraints
              </CardTitle>
              <CardDescription>
                Regulatory, physical, and environmental constraints affecting development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Known Constraints</Label>
                <Select onValueChange={addConstraint} value="">
                  <SelectTrigger>
                    <SelectValue placeholder="Add constraint" />
                  </SelectTrigger>
                  <SelectContent>
                    {constraintOptions.map(option => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex flex-wrap gap-2 mt-2">
                  {siteData.constraints.map((constraint, index) => (
                    <Badge key={index} variant="destructive" className="gap-1">
                      {constraint}
                      <button
                        onClick={() => removeConstraint(constraint)}
                        className="ml-1 hover:bg-background hover:text-foreground rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="custom-constraint">Additional Constraints</Label>
                <div className="flex gap-2">
                  <Input
                    id="custom-constraint"
                    placeholder="Add custom constraint"
                    value={newConstraint}
                    onChange={(e) => setNewConstraint(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addConstraint(newConstraint)
                        setNewConstraint("")
                      }
                    }}
                  />
                  <Button 
                    onClick={() => {
                      addConstraint(newConstraint)
                      setNewConstraint("")
                    }} 
                    size="icon" 
                    variant="outline"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {siteData.constraints.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Building className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No constraints added yet. Add constraints that may affect your development.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}