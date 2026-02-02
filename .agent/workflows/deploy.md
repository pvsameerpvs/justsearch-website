---
description: Build and Deployment Workflow
---

This workflow guides you through building and preparing the application for deployment.

### 1. Build the application
Run the build command to generate the production bundle:
```bash
npm run build
```

### 2. Preview the build
Test the production build locally:
```bash
npm run start
```

### 3. Deployment
Deploy to Vercel (recommended):
```bash
npx vercel
```
