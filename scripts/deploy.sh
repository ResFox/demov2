#!/bin/bash

# GameX Website Deployment Script
# This script prepares the project for deployment to Vercel

echo "🚀 Starting GameX Website Deployment Process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Run linting
echo "🔍 Running linter..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️ Linting failed, but continuing with deployment..."
fi

echo "🎉 Project is ready for deployment!"
echo ""
echo "🌐 Deploy to Vercel:"
echo "   1. Push your code to GitHub"
echo "   2. Go to vercel.com and import your repository"
echo "   3. Vercel will automatically detect Next.js and deploy"
echo ""
echo "🔧 Or use Vercel CLI:"
echo "   npm i -g vercel"
echo "   vercel"
echo ""
echo "✨ Your GameX website is ready to go live!"
