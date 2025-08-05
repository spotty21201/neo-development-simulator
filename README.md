# 🏗️ Neo Development Simulator

**Next-generation urban design platform that empowers planners and developers to simulate master plans with regulatory compliance.**

> "Simulate master plans like a zoning consultant, design like an architect, and iterate like an AI."

## ✨ Features

### 🎯 Core Capabilities
- **Site Data Management**: Comprehensive site information with constraints and characteristics
- **Zoning Rules Engine**: Complete regulatory parameters (KDB, KLB, height limits, setbacks, parking)
- **Land Subdivision**: Auto and manual lot division tools
- **Land Use Assignment**: Assign and manage different land use types
- **GFA Calculator**: Advanced Gross Floor Area calculations with building massing
- **Compliance Checker**: Real-time validation against zoning regulations
- **Report Generation**: Professional reports and data export capabilities
- **Scenario Management**: Compare multiple development options

### 🎨 User Experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Professional UI**: Clean, modern interface optimized for urban planners
- **Guided Workflow**: Step-by-step process from site data to final reports
- **Real-time Calculations**: Instant feedback on development potential
- **Interactive Dashboard**: Comprehensive project overview and statistics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/neo-development-simulator.git
   cd neo-development-simulator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your database and other configuration:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Dashboard
│   ├── site-data/         # Site data input
│   ├── zoning/            # Zoning rules configuration
│   ├── subdivision/      # Land subdivision tools
│   ├── land-use/          # Land use assignment
│   ├── gfa/               # GFA calculator
│   ├── compliance/        # Compliance checker
│   ├── reports/           # Report generation
│   └── settings/          # Application settings
├── components/
│   ├── layout/            # Layout components
│   └── ui/               # shadcn/ui components
├── lib/
│   ├── db.ts             # Database client
│   ├── socket.ts         # WebSocket logic
│   └── utils.ts          # Utility functions
└── hooks/                # Custom React hooks
```

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15** with App Router
- **TypeScript 5** for type safety
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library

### Database & ORM
- **Prisma** ORM
- **SQLite** (development)
- **PostgreSQL** (production recommended)

### State Management
- **Zustand** for client state
- **TanStack Query** for server state

### UI/UX
- **Lucide React** icons
- **Responsive design** with mobile-first approach
- **Dark/Light theme** support

### Real-time Features
- **Socket.IO** for real-time communication
- **WebSocket** support

## 📊 Key Features Overview

### 📈 Dashboard
- Project statistics and KPIs
- Recent projects overview
- Quick action buttons
- Platform features showcase

### 🗺️ Site Data Input
- Basic site information (name, location, area)
- Site characteristics (topography, access points)
- Comprehensive constraints management
- Surrounding land uses analysis
- Area unit conversions (m², ha, acres)

### 📋 Zoning Rules
- **Basic Parameters**: KDB (building coverage), KLB (FAR), open space
- **Setbacks & Height**: Height limits, setback requirements
- **Parking Requirements**: By land use type
- **Use Restrictions**: Permitted and prohibited uses
- **Additional Regulations**: Environmental, safety, and other requirements
- Built-in development potential calculator

### 🏗️ Land Subdivision
- Automatic subdivision algorithms
- Manual lot boundary definition
- Area calculations and optimization
- Visual lot management interface

### 🏘️ Land Use Assignment
- Residential, commercial, industrial, mixed-use
- Open space and infrastructure planning
- Drag-and-drop assignment interface
- Land use compatibility checking

### 🧮 GFA Calculator
- Building massing calculations
- Floor area ratio optimization
- Building typology templates (tower, podium, mid-rise)
- Height and footprint analysis
- Development yield metrics

### ✅ Compliance Checker
- Real-time validation against zoning rules
- KDB, KLB, and height compliance
- Setback and parking requirement checking
- Visual compliance indicators
- Warning and recommendation system

### 📄 Reports & Exports
- Feasibility study reports
- Compliance analysis reports
- Development summary reports
- Multiple export formats (PDF, CSV, Excel, JSON)
- Professional report templates

### ⚙️ Settings
- User profile management
- Appearance customization (theme, units, language)
- Data management and backup
- Notification preferences

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow the existing code style
- Use TypeScript for type safety
- Write clean, documented code
- Include tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Urban Planners** and **Developers** who inspired this tool
- **Next.js** team for the amazing framework
- **shadcn/ui** for the beautiful component library
- **Prisma** for the excellent ORM

## 📞 Support

For support, please open an issue in the GitHub repository or contact our development team.

---

**Built with ❤️ for the urban planning community**

Transform compliance-heavy planning into a rapid, creative, and intelligent process.