"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Building, 
  Map, 
  Calculator, 
  CheckCircle, 
  Plus, 
  TrendingUp,
  FileText,
  Users
} from "lucide-react"

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome to Neo Development Simulator - Your urban planning companion
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Scenarios</CardTitle>
              <Map className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                +4 from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">
                +5% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total GFA</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M</div>
              <p className="text-xs text-muted-foreground">
                m² across all projects
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Projects */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>
                Your latest urban planning projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Downtown Mixed-Use Development",
                    location: "Central Business District",
                    status: "active",
                    area: "5.2 ha",
                    scenarios: 3
                  },
                  {
                    name: "Waterfront Residential Complex",
                    location: "Harbor District",
                    status: "planning",
                    area: "3.8 ha",
                    scenarios: 2
                  },
                  {
                    name: "Tech Park Expansion",
                    location: "Innovation Zone",
                    status: "active",
                    area: "12.1 ha",
                    scenarios: 5
                  },
                  {
                    name: "Green Community",
                    location: "Suburban Area",
                    status: "completed",
                    area: "8.5 ha",
                    scenarios: 4
                  }
                ].map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {project.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {project.location} • {project.area}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={project.status === "active" ? "default" : project.status === "completed" ? "secondary" : "outline"}>
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {project.scenarios} scenarios
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Get started with your planning workflow
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start gap-2" variant="outline">
                <Map className="h-4 w-4" />
                Define Site Data
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <Building className="h-4 w-4" />
                Set Zoning Rules
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <Calculator className="h-4 w-4" />
                Calculate GFA
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <CheckCircle className="h-4 w-4" />
                Check Compliance
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <FileText className="h-4 w-4" />
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Features</CardTitle>
            <CardDescription>
              Comprehensive tools for urban planning and development simulation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-start gap-3">
                <Map className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Land Subdivision</h4>
                  <p className="text-sm text-muted-foreground">
                    Auto or manual lot division with precise area calculations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Zoning Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time validation against KDB, KLB, and height regulations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calculator className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">GFA Calculator</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced massing and floor area calculations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Scenario Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Compare multiple development options side-by-side
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}