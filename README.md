# No-as-a-Service Frontend

A React + Vite frontend for the No-as-a-Service API that displays random rejection reasons.

## Features

- 🎨 Modern React frontend built with Vite
- 🎯 Displays API responses in real-time
- 📱 Responsive design with dark/light mode support
- 🔄 Loading states and error handling
- 🎭 Beautiful UI with gradients and animations

## Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Make sure the backend API is running:**
   ```bash
   # In the parent directory
   npm start
   ```

The frontend will be available at `http://localhost:5173` and will proxy API requests to the backend running on `http://localhost:3000`.

## API Integration

The frontend calls the `/no` endpoint and displays:
- The rejection reason text
- The full JSON response
- Loading and error states

Example API response:
```json
{
  "reason": "I'm at peace with saying no."
}
```

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- React 18
- Vite 5
- Modern CSS with CSS Variables
- Fetch API for HTTP requests
