# Weather Application

A modern, real-time weather application built with React and WeatherAPI. Features dynamic backgrounds based on time of day, geolocation support, and a beautiful glassmorphism UI design with secure API key management.

## 🌟 Features

- 🔍 **Search by City** - Look up weather for any city worldwide
- 📍 **Geolocation** - Automatically detect your location and display weather
- 🌅 **Dynamic Background** - Changes based on day/night cycle
- 💾 **Real-time Data** - Current temperature, humidity, wind speed, pressure
- 📱 **Responsive Design** - Works on all devices
- ✨ **Glassmorphism UI** - Modern, elegant design with blur effects
- ⏰ **Last Updated** - Shows when data was last fetched
- 🔐 **Secure API Key** - Environment variables for sensitive data

## 🛠️ Technologies Used

- **Frontend:** React 18, JavaScript ES6+
- **API:** WeatherAPI.com
- **Styling:** CSS3 (Glassmorphism, Animations)
- **Features:** Geolocation API, Fetch API
- **Security:** Environment variables (.env)

## 🚀 Getting Started

### Installation
```bash
npm install
npm start
```

Opens http://localhost:3000 in your browser

### Environment Setup

Create a `.env` file in the root directory:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

Get your free API key from [WeatherAPI.com](https://www.weatherapi.com)

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

## 🔐 Security

- **API Key Protection** - Stored in `.env` file
- **Not in Repository** - `.gitignore` excludes sensitive data
- **Environment Variables** - `process.env.REACT_APP_WEATHER_API_KEY`
- **Best Practice** - Never commit API keys to version control

## 📊 API Integration

Uses **WeatherAPI.com** free tier:
- 1 Million calls per month
- Real-time weather data
- Location detection
- Weather condition icons

## 💡 Learning Outcomes

- RESTful API consumption
- Geolocation API implementation
- React Hooks (useState, useEffect)
- Dynamic styling based on data
- Environment variable management
- Security best practices
- Error handling and validation
- Responsive web design

## 🌍 Live Features

- **Search**: Any city worldwide
- **Geolocation**: Browser-based location detection
- **Real-time**: Current conditions updated instantly
- **Icons**: Weather condition icons from WeatherAPI
- **Day/Night Themes**: Automatic background changes

## 📱 Responsive Breakpoints

- Desktop: Full layout with all details
- Tablet: Adjusted spacing and sizing
- Mobile: Single column, optimized text sizes

## 🎓 University Project

Created as a demonstration of:
- API integration skills
- React component development
- Modern UI/UX design principles
- Security and best practices
- Real-world application development

## 📝 Notes

- API key resets monthly (1M calls)
- Geolocation requires user permission
- Weather data updates in real-time
- Background transitions are smooth

## Author

mffffwbg-bit

## License

MIT
