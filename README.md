# SHOP.CO - Modern E-Commerce Store

A modern, responsive e-commerce web application built with Next.js 16, featuring a clean UI, shopping cart functionality, and real-time product browsing.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [API Configuration](#-api-configuration)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [License](#-license)

## ✨ Features

- **Product Browsing**: Browse through curated collections including New Arrivals and Top Selling items
- **Shopping Cart**: Add, remove, and manage product quantities with persistent cart storage
- **Responsive Design**: Fully responsive UI that works seamlessly on mobile, tablet, and desktop
- **Product Categories**: Browse by dress style (Casual, Formal, Party, Gym)
- **Customer Reviews**: View testimonials from happy customers with interactive carousel
- **Star Ratings**: Visual product ratings with half-star support
- **Brand Showcase**: Featured brand partners display
- **Discount System**: Automatic discount calculations and promo code support
- **State Management**: Persistent cart state using Zustand with localStorage
- **Image Optimization**: Next.js Image component for optimized loading

## 🛠 Tech Stack

- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI Library**: [React 19.2](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand 5](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd shop-co
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and configure your API URL:
```env
NEXT_PUBLIC_API_DUMMY_URL=https://dummyjson.com
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔌 API Configuration

This project supports multiple e-commerce APIs. Configure the API endpoint in your `.env.local` file:

### Supported APIs

**DummyJSON** (Default):
```env
NEXT_PUBLIC_API_DUMMY_URL=https://dummyjson.com
```

**FakeStore API** (Alternative):
```env
NEXT_PUBLIC_API_DUMMY_URL=https://fakestoreapi.com
```

The application automatically normalizes different API response formats to ensure compatibility.


## 📁 Project Structure

```
shop-co/
├── app/                    # Next.js app directory
│   ├── cart/              # Cart page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── cart/              # Cart components
│   ├── home/              # Home page sections
│   ├── layout/            # Layout components (Navbar, Footer)
│   └── shared/            # Reusable components
├── lib/
│   └── api.ts             # API integration
├── store/
│   └── cartStore.ts       # Zustand cart state
├── types/
│   └── index.ts           # TypeScript types
└── public/                # Static assets
```

## 💡 Usage

### Adding Products to Cart

Click the "Add to Cart" button on any product card. The cart state persists across sessions using localStorage.

### Managing Cart

Navigate to `/cart` to:
- View all cart items
- Update quantities using +/- buttons
- Remove items
- Apply promo codes
- View order summary with discounts

### Browsing Products

- **New Arrivals**: Latest product additions
- **Top Selling**: Most popular items
- **Browse by Style**: Filter by Casual, Formal, Party, or Gym wear

## 🏗 Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build and starts the server.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and React
