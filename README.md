# Weather Application

A modern, real-time weather application built with React and WeatherAPI. Features dynamic backgrounds based on time of day, geolocation support, and a beautiful glassmorphism UI design.

## 🌟 Features

- 🔍 **Search by City** - Look up weather for any city worldwide
- 📍 **Geolocation** - Automatically detect your location and display weather
- 🌅 **Dynamic Background** - Changes based on day/night cycle
- 💾 **Real-time Data** - Current temperature, humidity, wind speed, pressure
- 📱 **Responsive Design** - Works on all devices
- ✨ **Glassmorphism UI** - Modern, elegant design with blur effects
- ⏰ **Last Updated** - Shows when data was last fetched

## 🛠️ Technologies Used

- **Frontend:** React 18, JavaScript ES6+
- **API:** WeatherAPI.com
- **Styling:** CSS3 (Glassmorphism, Animations)
- **Features:** Geolocation API, Fetch API

## 🚀 Getting Started

### Installation
```bash
npm install
npm start
```

Opens http://localhost:3000 in your browser

### Usage

1. **Search by City**
   - Enter any city name and click "Search" or press Enter
   - View real-time weather data

2. **Use Geolocation**
   - Click the 📍 button
   - Allow location access
   - Automatically fetches weather for your location

3. **View Details**
   - Temperature and weather condition
   - Feels like temperature
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure
   - Last updated time

## 📦 Project Structure
```
src/
├── App.js       (Main component with weather logic)
├── App.css      (Styling with glassmorphism)
└── index.js     (React entry point)
```

## 🎨 Design Highlights

- **Glassmorphism Effect** - Semi-transparent cards with blur
- **Dynamic Backgrounds** - Bright blue (day), dark blue (night)
- **Smooth Animations** - Fade-in, slide-up transitions
- **Hover Effects** - Interactive elements
- **Mobile Optimized** - Responsive grid layout

## 📊 API Integration

Uses **WeatherAPI.com** free tier:
- 1 Million calls per month
- Real-time weather data
- Location detection
- Weather condition icons

## 🔐 Environment

API Key stored in `App.js`:
```javascript
const API_KEY = '7d41b65d4cd548e89c2185510260401';
```

## 💡 Learning Outcomes

- RESTful API consumption
- Geolocation API implementation
- React Hooks (useState, useEffect)
- Dynamic styling based on data
- Error handling and validation
- Responsive web design

## 🌍 Live Features

- **Search**: Any city worldwide
- **Geolocation**: Browser-based location detection
- **Real-time**: Current conditions updated instantly
- **Icons**: Weather condition icons from OpenWeather

## 📱 Responsive Breakpoints

- Desktop: Full layout
- Tablet: Adjusted spacing
- Mobile: Single column, optimized text sizes

## 🎓 University Project

Created as a demonstration of:
- API integration skills
- React component development
- Modern UI/UX design principles
- Real-world application development

## Author

mffffwbg-bit

## License

MIT
```

**Kaydet, push et:**
```
git add README.md
git commit -m "Add Weather App README documentation"
git push