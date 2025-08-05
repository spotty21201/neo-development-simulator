"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Share2, Eye, Calendar } from "lucide-react"

export default function ReportsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports & Exports</h1>
            <p className="text-muted-foreground">
              Generate comprehensive reports and export data
            </p>
          </div>
          <Button className="gap-2">
            <FileText className="h-4 w-4" />
            Generate Report
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Report Templates
              </CardTitle>
              <CardDescription>
                Pre-configured report formats
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Feasibility Study</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive development analysis</p>
                  </div>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Compliance Report</h4>
                    <p className="text-sm text-muted-foreground">Zoning regulation compliance summary</p>
                  </div>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Development Summary</h4>
                    <p className="text-sm text-muted-foreground">Key metrics and statistics</p>
                  </div>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export Options
              </CardTitle>
              <CardDescription>
                Export data in various formats
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  PDF
                </Button>
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  CSV
                </Button>
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Excel
                </Button>
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  JSON
                </Button>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Export your data for further analysis in external tools or for sharing with stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>
              Your previously generated reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Downtown Development Feasibility Study",
                  type: "PDF",
                  date: "2024-01-15",
                  size: "2.4 MB",
                  status: "completed"
                },
                {
                  name: "Zoning Compliance Analysis",
                  type: "PDF",
                  date: "2024-01-12",
                  size: "1.8 MB",
                  status: "completed"
                },
                {
                  name: "Site Data Export",
                  type: "CSV",
                  date: "2024-01-10",
                  size: "245 KB",
                  status: "completed"
                }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <h4 className="font-medium">{report.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Badge variant="outline">{report.type}</Badge>
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {report.date}
                        </span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="gap-1">
                      <Eye className="h-3 w-3" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <Download className="h-3 w-3" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <Share2 className="h-3 w-3" />
                      Share
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}