'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { Progress } from '@/components/ui/progress'

// Sample data for charts
const quarterlyData = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 72 },
  { month: 'Mar', value: 68 },
  { month: 'Apr', value: 80 },
  { month: 'May', value: 85 },
  { month: 'Jun', value: 90 },
  { month: 'Jul', value: 95 },
  { month: 'Aug', value: 88 },
  { month: 'Sep', value: 100 },
  { month: 'Oct', value: 105 },
  { month: 'Nov', value: 110 },
  { month: 'Dec', value: 120 },
]

const regionData = [
  { region: 'North', q1: 45, q2: 55, q3: 65, q4: 75 },
  { region: 'South', q1: 60, q2: 70, q3: 75, q4: 80 },
  { region: 'East', q1: 50, q2: 60, q3: 70, q4: 85 },
  { region: 'West', q1: 70, q2: 75, q3: 80, q4: 90 },
  { region: 'Central', q1: 55, q2: 65, q3: 75, q4: 82 },
]

const performanceData = [
  { name: 'Completed', value: 75 },
  { name: 'Remaining', value: 25 },
]

const COLORS = ['#00D9A3', '#0066FF', '#00C4FF']

const activities = [
  { id: 1, name: 'Data Import', status: 'Complete', progress: 100 },
  { id: 2, name: 'Analysis Pipeline', status: 'In Progress', progress: 65 },
  { id: 3, name: 'Report Generation', status: 'Pending', progress: 30 },
  { id: 4, name: 'Export Ready', status: 'Complete', progress: 100 },
]

export function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <section className="py-12 px-6 bg-background">
      <div className="container mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <TabsList className="bg-card border border-border mb-8 p-1 rounded-lg inline-flex">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="crm">CRM</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
          </TabsList>

          {/* Overview Tab Content */}
          <TabsContent value="overview" className="space-y-8">
            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Metric Card 1 */}
              <Card className="p-6 bg-card border-border card-shadow">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">Data Loaded</p>
                  <p className="text-4xl font-bold text-primary">$1.2M</p>
                  <p className="text-xs text-muted-foreground">Total volume processed</p>
                </div>
              </Card>

              {/* Metric Card 2 */}
              <Card className="p-6 bg-card border-border card-shadow">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">Conversions</p>
                  <p className="text-4xl font-bold text-secondary">15,000</p>
                  <p className="text-xs text-muted-foreground">Successful transactions</p>
                </div>
              </Card>

              {/* Metric Card 3 */}
              <Card className="p-6 bg-card border-border card-shadow">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">Growth Rate</p>
                  <p className="text-4xl font-bold text-secondary">18%</p>
                  <p className="text-xs text-muted-foreground">Quarter over quarter</p>
                </div>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Line Chart - Quarterly Growth */}
              <Card className="p-6 bg-card border-border card-shadow">
                <h3 className="text-lg font-semibold mb-4">Quarterly Growth</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2e3347" />
                    <XAxis
                      dataKey="month"
                      stroke="#A0A4B8"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis
                      stroke="#A0A4B8"
                      style={{ fontSize: '12px' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#00D9A3"
                      strokeWidth={3}
                      dot={{ fill: '#00D9A3', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Bar Chart - Sales by Region */}
              <Card className="p-6 bg-card border-border card-shadow">
                <h3 className="text-lg font-semibold mb-4">Sales Performance by Region</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={regionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2e3347" />
                    <XAxis
                      dataKey="region"
                      stroke="#A0A4B8"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis
                      stroke="#A0A4B8"
                      style={{ fontSize: '12px' }}
                    />
                    <Bar dataKey="q1" fill="#0066FF" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="q2" fill="#00D9A3" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="q3" fill="#00C4FF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Bottom Row: Donut Chart and Activities Table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Donut Chart */}
              <Card className="p-6 bg-card border-border card-shadow">
                <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={performanceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {performanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-sm text-muted-foreground">Complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Remaining</span>
                  </div>
                </div>
              </Card>

              {/* Recent Activities Table */}
              <Card className="p-6 bg-card border-border card-shadow">
                <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{activity.name}</span>
                        <span className="text-xs text-muted-foreground">{activity.status}</span>
                      </div>
                      <Progress
                        value={activity.progress}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Placeholder for other tabs */}
          <TabsContent value="analytics">
            <Card className="p-12 bg-card border-border card-shadow text-center">
              <p className="text-muted-foreground">Analytics view coming soon...</p>
            </Card>
          </TabsContent>
          <TabsContent value="crm">
            <Card className="p-12 bg-card border-border card-shadow text-center">
              <p className="text-muted-foreground">CRM view coming soon...</p>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <Card className="p-12 bg-card border-border card-shadow text-center">
              <p className="text-muted-foreground">Projects view coming soon...</p>
            </Card>
          </TabsContent>
          <TabsContent value="finance">
            <Card className="p-12 bg-card border-border card-shadow text-center">
              <p className="text-muted-foreground">Finance view coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
