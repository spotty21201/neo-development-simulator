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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Building, 
  Save, 
  Plus, 
  X,
  Calculator,
  Ruler,
  Trees,
  Scale,
  AlertTriangle,
  Info
} from "lucide-react"

interface ZoningRules {
  name: string
  description: string
  kdb: number // Building coverage percentage
  klb: number // Floor Area Ratio (FAR)
  heightLimit: number // Maximum height in meters
  heightLimitFloors: number // Maximum height in floors
  openSpace: number // Minimum open space percentage
  setbacks: {
    front: number
    rear: number
    side: number
    street: number
  }
  parkingRequirements: {
    residential: number
    commercial: number
    office: number
    industrial: number
  }
  useRestrictions: string[]
  additionalRegulations: string[]
}

const useRestrictionOptions = [
  "Residential Only",
  "Commercial Only",
  "Mixed-Use Allowed",
  "Industrial Prohibited",
  "Retail Restricted",
  "Office Space Limited",
  "Height Restrictions",
  "Density Limits",
  "Affordable Housing Required",
  "Green Building Standards"
]

const additionalRegulationOptions = [
  "Environmental Impact Assessment Required",
  "Traffic Study Needed",
  "Public Consultation Mandatory",
  "Heritage Impact Assessment",
  "Landscape Requirements",
  "Sustainability Standards",
  "Accessibility Compliance",
  "Fire Safety Regulations",
  "Utility Infrastructure Standards",
  "Stormwater Management"
]

export default function ZoningPage() {
  const [zoningRules, setZoningRules] = useState<ZoningRules>({
    name: "",
    description: "",
    kdb: 0,
    klb: 0,
    heightLimit: 0,
    heightLimitFloors: 0,
    openSpace: 0,
    setbacks: {
      front: 0,
      rear: 0,
      side: 0,
      street: 0
    },
    parkingRequirements: {
      residential: 0,
      commercial: 0,
      office: 0,
      industrial: 0
    },
    useRestrictions: [],
    additionalRegulations: []
  })

  const [newUseRestriction, setNewUseRestriction] = useState("")
  const [newRegulation, setNewRegulation] = useState("")

  const addUseRestriction = (restriction: string) => {
    if (restriction && !zoningRules.useRestrictions.includes(restriction)) {
      setZoningRules(prev => ({
        ...prev,
        useRestrictions: [...prev.useRestrictions, restriction]
      }))
    }
  }

  const removeUseRestriction = (restriction: string) => {
    setZoningRules(prev => ({
      ...prev,
      useRestrictions: prev.useRestrictions.filter(r => r !== restriction)
    }))
  }

  const addRegulation = (regulation: string) => {
    if (regulation && !zoningRules.additionalRegulations.includes(regulation)) {
      setZoningRules(prev => ({
        ...prev,
        additionalRegulations: [...prev.additionalRegulations, regulation]
      }))
    }
  }

  const removeRegulation = (regulation: string) => {
    setZoningRules(prev => ({
      ...prev,
      additionalRegulations: prev.additionalRegulations.filter(r => r !== regulation)
    }))
  }

  const handleSave = () => {
    console.log("Saving zoning rules:", zoningRules)
    // TODO: Implement save functionality
  }

  const calculateMaxBuildingArea = (siteArea: number) => {
    return (siteArea * zoningRules.kdb) / 100
  }

  const calculateMaxGFA = (siteArea: number) => {
    return siteArea * zoningRules.klb
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Zoning Rules</h1>
            <p className="text-muted-foreground">
              Define regulatory parameters and development constraints
            </p>
          </div>
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Zoning Rules
          </Button>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Parameters</TabsTrigger>
            <TabsTrigger value="setbacks">Setbacks & Height</TabsTrigger>
            <TabsTrigger value="parking">Parking</TabsTrigger>
            <TabsTrigger value="restrictions">Restrictions</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Zoning Information
                  </CardTitle>
                  <CardDescription>
                    Basic zoning identification and description
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="zoning-name">Zoning Name</Label>
                    <Input
                      id="zoning-name"
                      placeholder="e.g., R1 Residential, C2 Commercial"
                      value={zoningRules.name}
                      onChange={(e) => setZoningRules(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the zoning purpose and intent"
                      value={zoningRules.description}
                      onChange={(e) => setZoningRules(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Density Parameters */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5" />
                    Density Parameters
                  </CardTitle>
                  <CardDescription>
                    Building coverage and floor area ratios
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="kdb" className="flex items-center gap-2">
                      KDB (Building Coverage)
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="kdb"
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        placeholder="0"
                        value={zoningRules.kdb || ""}
                        onChange={(e) => setZoningRules(prev => ({ ...prev, kdb: parseFloat(e.target.value) || 0 }))}
                      />
                      <span className="text-sm text-muted-foreground">%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Maximum percentage of site area that can be built upon
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="klb" className="flex items-center gap-2">
                      KLB (Floor Area Ratio - FAR)
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </Label>
                    <Input
                      id="klb"
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="0"
                      value={zoningRules.klb || ""}
                      onChange={(e) => setZoningRules(prev => ({ ...prev, klb: parseFloat(e.target.value) || 0 }))}
                    />
                    <p className="text-xs text-muted-foreground">
                      Ratio of total floor area to site area
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="open-space" className="flex items-center gap-2">
                      Minimum Open Space
                      <Trees className="h-4 w-4 text-muted-foreground" />
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="open-space"
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        placeholder="0"
                        value={zoningRules.openSpace || ""}
                        onChange={(e) => setZoningRules(prev => ({ ...prev, openSpace: parseFloat(e.target.value) || 0 }))}
                      />
                      <span className="text-sm text-muted-foreground">%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Minimum percentage of site that must remain open
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Quick Calculator
                </CardTitle>
                <CardDescription>
                  Estimate maximum development potential based on current rules
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label>Site Area (m²)</Label>
                    <Input
                      type="number"
                      placeholder="10000"
                      id="site-area-calc"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Max Building Area</Label>
                    <div className="p-3 bg-muted rounded-md">
                      <span className="font-mono text-lg">
                        {calculateMaxBuildingArea(10000).toLocaleString()} m²
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Max GFA</Label>
                    <div className="p-3 bg-muted rounded-md">
                      <span className="font-mono text-lg">
                        {calculateMaxGFA(10000).toLocaleString()} m²
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="setbacks" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Height Limits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Ruler className="h-5 w-5" />
                    Height Limits
                  </CardTitle>
                  <CardDescription>
                    Maximum building height restrictions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="height-meters">Height Limit (meters)</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="height-meters"
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="0"
                        value={zoningRules.heightLimit || ""}
                        onChange={(e) => setZoningRules(prev => ({ ...prev, heightLimit: parseFloat(e.target.value) || 0 }))}
                      />
                      <span className="text-sm text-muted-foreground">m</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="height-floors">Height Limit (floors)</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="height-floors"
                        type="number"
                        min="0"
                        placeholder="0"
                        value={zoningRules.heightLimitFloors || ""}
                        onChange={(e) => setZoningRules(prev => ({ ...prev, heightLimitFloors: parseInt(e.target.value) || 0 }))}
                      />
                      <span className="text-sm text-muted-foreground">floors</span>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium">Note:</p>
                        <p>Building height is typically limited by the more restrictive of the two measurements (meters or floors).</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Setbacks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Ruler className="h-5 w-5" />
                    Setback Requirements
                  </CardTitle>
                  <CardDescription>
                    Minimum distances from property lines
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="setback-front">Front Setback</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="setback-front"
                          type="number"
                          min="0"
                          step="0.1"
                          placeholder="0"
                          value={zoningRules.setbacks.front || ""}
                          onChange={(e) => setZoningRules(prev => ({
                            ...prev,
                            setbacks: { ...prev.setbacks, front: parseFloat(e.target.value) || 0 }
                          }))}
                        />
                        <span className="text-sm text-muted-foreground">m</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="setback-rear">Rear Setback</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="setback-rear"
                          type="number"
                          min="0"
                          step="0.1"
                          placeholder="0"
                          value={zoningRules.setbacks.rear || ""}
                          onChange={(e) => setZoningRules(prev => ({
                            ...prev,
                            setbacks: { ...prev.setbacks, rear: parseFloat(e.target.value) || 0 }
                          }))}
                        />
                        <span className="text-sm text-muted-foreground">m</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="setback-side">Side Setback</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="setback-side"
                          type="number"
                          min="0"
                          step="0.1"
                          placeholder="0"
                          value={zoningRules.setbacks.side || ""}
                          onChange={(e) => setZoningRules(prev => ({
                            ...prev,
                            setbacks: { ...prev.setbacks, side: parseFloat(e.target.value) || 0 }
                          }))}
                        />
                        <span className="text-sm text-muted-foreground">m</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="setback-street">Street Setback</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="setback-street"
                          type="number"
                          min="0"
                          step="0.1"
                          placeholder="0"
                          value={zoningRules.setbacks.street || ""}
                          onChange={(e) => setZoningRules(prev => ({
                            ...prev,
                            setbacks: { ...prev.setbacks, street: parseFloat(e.target.value) || 0 }
                          }))}
                        />
                        <span className="text-sm text-muted-foreground">m</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="parking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Parking Requirements
                </CardTitle>
                <CardDescription>
                  Minimum parking spaces per unit or area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="parking-residential">Residential</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="parking-residential"
                          type="number"
                          min="0"
                          step="0.1"
                          placeholder="0"
                          value={zoningRules.parkingRequirements.residential || ""}
                          onChange={(e) => setZoningRules(prev => ({
                            ...prev,
                            parkingRequirements: { ...prev.parkingRequirements, residential: parseFloat(e.target.value) || 0 }
                          }))}
                        />
                        <span className="text-sm text-muted-foreground">spaces/unit</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parking-commercial">Commercial</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="parking-commercial"
                          type="number"
                          min="0"
                          step="0.1"
                          placeholder="0"
                          value={zoningRules.parkingRequirements.commercial || ""}
                          onChange={(e) => setZoningRules(prev => ({
                            ...prev,
                            parkingRequirements: { ...prev.parkingRequirements, commercial: parseFloat(e.target.value) || 0 }
                          }))}
                        />
                        <span className="text-sm text-muted-foreground">spaces/100m²</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="parking-office">Office</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="parking-office"
                          type="number"
                          min="0"
                          step="0.1"
                          placeholder="0"
                          value={zoningRules.parkingRequirements.office || ""}
                          onChange={(e) => setZoningRules(prev => ({
                            ...prev,
                            parkingRequirements: { ...prev.parkingRequirements, office: parseFloat(e.target.value) || 0 }
                          }))}
                        />
                        <span className="text-sm text-muted-foreground">spaces/100m²</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parking-industrial">Industrial</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="parking-industrial"
                          type="number"
                          min="0"
                          step="0.1"
                          placeholder="0"
                          value={zoningRules.parkingRequirements.industrial || ""}
                          onChange={(e) => setZoningRules(prev => ({
                            ...prev,
                            parkingRequirements: { ...prev.parkingRequirements, industrial: parseFloat(e.target.value) || 0 }
                          }))}
                        />
                        <span className="text-sm text-muted-foreground">spaces/100m²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="restrictions" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Use Restrictions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Use Restrictions
                  </CardTitle>
                  <CardDescription>
                    Permitted and prohibited land uses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Use Restrictions</Label>
                    <Select onValueChange={addUseRestriction} value="">
                      <SelectTrigger>
                        <SelectValue placeholder="Add use restriction" />
                      </SelectTrigger>
                      <SelectContent>
                        {useRestrictionOptions.map(option => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {zoningRules.useRestrictions.map((restriction, index) => (
                        <Badge key={index} variant="secondary" className="gap-1">
                          {restriction}
                          <button
                            onClick={() => removeUseRestriction(restriction)}
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

              {/* Additional Regulations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Additional Regulations
                  </CardTitle>
                  <CardDescription>
                    Other regulatory requirements and standards
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Additional Regulations</Label>
                    <Select onValueChange={addRegulation} value="">
                      <SelectTrigger>
                        <SelectValue placeholder="Add regulation" />
                      </SelectTrigger>
                      <SelectContent>
                        {additionalRegulationOptions.map(option => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {zoningRules.additionalRegulations.map((regulation, index) => (
                        <Badge key={index} variant="outline" className="gap-1">
                          {regulation}
                          <button
                            onClick={() => removeRegulation(regulation)}
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
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}