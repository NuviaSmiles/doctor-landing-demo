# Doctor Landing Demo

A modern, responsive doctor landing page built with Next.js 15, TypeScript, Material-UI, and Tailwind CSS. This project demonstrates a professional healthcare provider interface with patient management capabilities.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with Turbopack, TypeScript, and React 19
- **Professional UI**: Material-UI components with custom theming
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Patient Management**: Comprehensive patient data tables and detail views
- **Code Quality**: ESLint, Prettier, and Husky for consistent code formatting
- **Type Safety**: Full TypeScript implementation
- **Form Handling**: React Hook Form with Zod validation

## 🛠 Tech Stack

### Core Technologies
- **Next.js 15.5.0** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Libraries
- **Material-UI (MUI) 7.3.1** - React component library
- **Material React Table 3.2.1** - Advanced data table component
- **MUI X Data Grid 8.10.2** - Professional data grid
- **MUI X Date Pickers 8.10.2** - Date/time selection components

### Form & Validation
- **React Hook Form 7.62.0** - Performant forms with minimal re-renders
- **Zod 4.1.1** - TypeScript-first schema validation
- **@hookform/resolvers 5.2.1** - Form validation resolvers

### Development Tools
- **ESLint 9** - Code linting
- **Prettier 3.6.2** - Code formatting
- **Husky 9.1.7** - Git hooks
- **lint-staged 16.1.5** - Run linters on staged files

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd doctor-landing-demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
doctor-landing-demo/
├── .husky/                 # Git hooks configuration
│   ├── pre-commit         # Pre-commit hook for linting
│   └── _/                 # Husky internal files
├── public/                # Static assets
│   ├── logo.svg
│   ├── globe.svg
│   └── ...
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   ├── globals.css    # Global styles
│   │   ├── patients/      # Patient management pages
│   │   ├── all-patients/  # All patients view
│   │   ├── patient/[id]/  # Individual patient details
│   │   ├── reports/       # Analytics pages
│   │   └── settings/      # Settings pages
│   ├── components/        # Reusable components
│   │   ├── Layout.tsx     # Main layout wrapper
│   │   ├── Sidebar.tsx    # Navigation sidebar
│   │   ├── PatientsTable.tsx # Data table component
│   │   ├── PatientDetail.tsx # Patient detail view
│   │   └── ThemeProvider.tsx # MUI theme provider
│   ├── data/              # Data and types
│   │   └── mockData.ts    # Mock patient data
│   └── theme/             # Theme configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
└── README.md              # This file
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production with Turbopack |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint on all files |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 🔧 Development Setup

### Code Quality Tools

The project uses several tools to maintain code quality:

#### ESLint Configuration
- **eslint.config.mjs** - Modern ESLint flat config
- **@typescript-eslint/eslint-plugin** - TypeScript-specific rules
- **eslint-config-next** - Next.js recommended rules
- **eslint-config-prettier** - Disable conflicting Prettier rules

#### Prettier Configuration
- **.prettierrc** - Code formatting rules
- **eslint-plugin-prettier** - ESLint integration

#### Git Hooks (Husky)
- **Pre-commit hook** - Runs `lint-staged` before each commit
- **lint-staged** - Runs ESLint and Prettier on staged files only

### TypeScript Configuration

The project uses strict TypeScript configuration:
- **tsconfig.json** - TypeScript compiler options
- **tsconfig.tsbuildinfo** - Incremental compilation cache

### Styling

#### Tailwind CSS
- **tailwind.config.ts** - Tailwind configuration
- **postcss.config.mjs** - PostCSS configuration
- **globals.css** - Global styles and Tailwind directives

#### Material-UI
- **ThemeProvider.tsx** - Custom MUI theme with brand colors
- **Layout.tsx** - MUI theme wrapper

## 🎨 Customization

### Theme Colors

The project uses a custom color palette defined in the MUI theme:

```typescript
// Primary colors
primary: {
  main: '#00346D', // Deep Blue
  light: '#0177FF', // Bright Blue
  dark: '#00A2FF', // Light Blue
}

// Text colors
text: {
  primary: '#071941', // Dark Blue
  secondary: '#666666',
}
```

### Component Customization

All components are built with customization in mind:
- **PatientsTable.tsx** - Configurable data table with filtering
- **PatientDetail.tsx** - Modular patient information display
- **Sidebar.tsx** - Customizable navigation menu

## 📊 Data Management

### Mock Data Structure

The project includes comprehensive mock data in `src/data/mockData.ts`:

```typescript
interface Patient {
  id: string;
  name: string;
  age: number;
  sex: 'Male' | 'Female';
  status: 'Pending' | 'In Review' | 'Cleared' | 'Disqualified';
  category: 'CAT 1' | 'CAT 2' | 'CAT 3' | 'CAT 4';
  surgeryDate: string;
  proposedTreatment: 'Upper' | 'Lower' | 'Upper and Lower';
  center: string;
  vitals: {
    height: number;
    weight: number;
    bmi: number;
    bp: string;
    hr: number;
    spo2: number;
    date: string;
  };
  aiCallouts: string[];
  aiRecommendations: Array<{
    recommendation: string;
    reason: string;
  }>;
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- **Netlify** - Static site hosting
- **AWS Amplify** - AWS hosting solution
- **Self-hosted** - Any Node.js server

### Build Commands

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run quality checks**
   ```bash
   npm run lint
   npm run format:check
   ```
5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Code Style Guidelines

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

### Commit Message Convention

Use conventional commit messages:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions or changes
- `chore:` - Build process or auxiliary tool changes

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

#### Node Modules Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors
```bash
# Clear TypeScript cache
rm -rf .next tsconfig.tsbuildinfo
npm run build
```

#### ESLint/Prettier Issues
```bash
# Fix all linting issues
npm run lint:fix

# Format all files
npm run format
```

### Development Tips

1. **Use VS Code Extensions**:
   - ESLint
   - Prettier
   - TypeScript and JavaScript Language Features
   - Tailwind CSS IntelliSense

2. **Enable Format on Save** in VS Code:
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
   ```

3. **Use the Browser DevTools** for responsive design testing

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Hook Form Documentation](https://react-hook-form.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](#-troubleshooting)
2. Search existing [issues](../../issues)
3. Create a new issue with detailed information

---

**Happy coding! 🎉**
