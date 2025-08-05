"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from "lucide-react"

export default function CompliancePage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Compliance Checker</h1>
            <p className="text-muted-foreground">
              Validate your development against zoning regulations
            </p>
          </div>
          <Button className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Run Compliance Check
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Compliant Requirements
              </CardTitle>
              <CardDescription>
                Requirements that meet zoning standards
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Building Coverage (KDB)</span>
                  </div>
                  <Badge variant="secondary">35% / 40%</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Floor Area Ratio (KLB)</span>
                  </div>
                  <Badge variant="secondary">2.3 / 2.5</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Open Space</span>
                  </div>
                  <Badge variant="secondary">65% / 60%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                Non-Compliant Issues
              </CardTitle>
              <CardDescription>
                Requirements that exceed zoning limits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span className="font-medium">Height Limit</span>
                  </div>
                  <Badge variant="destructive">135m / 120m</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span className="font-medium">Front Setback</span>
                  </div>
                  <Badge variant="destructive">8m / 10m</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Warnings & Recommendations
            </CardTitle>
            <CardDescription>
              Areas that need attention or optimization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-800">Parking Requirements</p>
                  <p className="text-sm text-yellow-700">
                    Current parking provision meets minimum requirements but may be insufficient for peak demand.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-800">Building Separation</p>
                  <p className="text-sm text-yellow-700">
                    Consider increasing distance between Tower A and Tower B for better light and ventilation.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Overall Compliance Status</CardTitle>
            <CardDescription>
              Summary of compliance across all requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">75%</div>
                <div className="text-sm text-muted-foreground">Overall Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">3</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">2</div>
                <div className="text-sm text-muted-foreground">Violations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">2</div>
                <div className="text-sm text-muted-foreground">Warnings</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}