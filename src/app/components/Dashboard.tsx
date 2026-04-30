import { Link } from "react-router";
import {
  LayoutDashboard,
  Network,
  Target,
  TrendingUp,
  Search,
  Bell,
  User,
  CheckCircle2,
  Clock,
  Wrench,
  Map,
  LogOut,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";

export function Dashboard() {
  const summaryStats = [
    {
      title: "Completed Activities",
      value: "12",
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Pending Activities",
      value: "3",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      title: "Overall Progress",
      value: "68%",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      progress: 68,
    },
  ];

  const recentActivities = [
    { title: "Basic Network Topology", status: "Completed", time: "2 hours ago" },
    { title: "IP Configuration Practice", status: "Completed", time: "1 day ago" },
    { title: "Cable Wiring Challenge", status: "In Progress", time: "Just now" },
  ];

  const featureCards = [
    {
      title: "Workspace",
      description: "Access your workspace tools and saved sessions.",
      icon: Wrench,
      path: "/workspace",
    },
    {
      title: "Challenges",
      description: "Review and attempt available challenges.",
      icon: Target,
      path: "/challenges",
    },
    {
      title: "Roadmap",
      description: "Track your learning path and milestones.",
      icon: Map,
      path: "/roadmap",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Network className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">NetSim</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <Link to="/dashboard" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-medium">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          
          <Link to="/challenges" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <Target className="w-5 h-5" />
            Challenges
          </Link>

          <Link to="/workspace" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <Wrench className="w-5 h-5" />
            Workspace
          </Link>

          <Link to="/roadmap" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <Map className="w-5 h-5" />
            Roadmap
          </Link>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-200 space-y-1">
          <Link to="/profile" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <User className="w-5 h-5" />
            Profile
          </Link>
          <Link to="/login" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search simulations, challenges..."
                  className="pl-10 h-10 bg-gray-50 border-gray-200"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
              </button>
              <Link to="/profile" className="flex items-center gap-3 pl-4 border-l border-gray-200 hover:opacity-80 transition-opacity">
                <div className="text-right">
                  <div className="font-semibold text-gray-900 text-sm">John Doe</div>
                  <div className="text-xs text-gray-500">Student</div>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-auto p-8">
          <div className="space-y-6">
            {/* Welcome Section */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
              <p className="text-gray-600">Here's your learning progress and upcoming tasks</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {summaryStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600">{stat.title}</p>
                          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                          {stat.progress !== undefined && (
                            <Progress value={stat.progress} className="h-2 mt-2" />
                          )}
                        </div>
                        <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Main Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureCards.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Link key={index} to={feature.path}>
                    <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </span>
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="space-y-1">
                          <div className="font-semibold text-gray-900">{activity.title}</div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            {activity.time}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${activity.status === "Completed" ? "text-green-600" : "text-orange-600"}`}>
                            {activity.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Learning Progress */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <span>•</span>
                          </div>
                          <span className="font-medium text-gray-700">Device Connections</span>
                        </div>
                        <span className="text-gray-900 font-semibold">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                            <span>•</span>
                          </div>
                          <span className="font-medium text-gray-700">Cable Wiring</span>
                        </div>
                        <span className="text-gray-900 font-semibold">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                            <span>•</span>
                          </div>
                          <span className="font-medium text-gray-700">IP Configuration</span>
                        </div>
                        <span className="text-gray-900 font-semibold">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
