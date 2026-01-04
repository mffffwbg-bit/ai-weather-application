import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '7d41b65d4cd548e89c2185510260401';

  // Arka planı değiştiren özel fonksiyon
  useEffect(() => {
    if (!weather) {
      // Varsayılan (Açılış) Rengi: Koyu Mavi
      document.body.style.background = 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)';
    } else {
      const isDay = weather.current.is_day === 1;
      if (isDay) {
        // GÜNDÜZ: Parlak Mavi/Turkuaz
        document.body.style.background = 'linear-gradient(135deg, #2980B9 0%, #6DD5FA 100%)';
      } else {
        // GECE: Siyah/Lacivert
        document.body.style.background = 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)';
      }
    }
  }, [weather]); // weather her değiştiğinde bu çalışır

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }
    await fetchData(city);
  };

  const fetchLocationWeather = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchData(`${latitude},${longitude}`);
        },
        (err) => {
          setError('Location access denied.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation not supported.');
    }
  };

  const fetchData = async (query) => {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`
      );

      if (!response.ok) throw new Error('Location not found');

      const data = await response.json();
      setWeather(data);
      setCity(data.location.name);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') fetchWeather();
  };

  return (
    <div className="App">
      <div className="weather-container">
        <h1>🌤️ Weather App</h1>

        <div className="search-section">
          <button onClick={fetchLocationWeather} className="location-button" title="Use Location">
            📍
          </button>
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button onClick={fetchWeather} className="search-button">
            Search
          </button>
        </div>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">❌ {error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>{weather.location.name}, {weather.location.country}</h2>
            
            <div className="weather-main">
              <img
                src={`https:${weather.current.condition.icon}`}
                alt={weather.current.condition.text}
                className="weather-icon"
              />
              <div className="temp-section">
                <p className="temperature">{Math.round(weather.current.temp_c)}°C</p>
                <p className="description">{weather.current.condition.text}</p>
              </div>
            </div>

            <div className="weather-details">
              <div className="detail">
                <span>Feels Like</span>
                <p>{Math.round(weather.current.feelslike_c)}°C</p>
              </div>
              <div className="detail">
                <span>Humidity</span>
                <p>{weather.current.humidity}%</p>
              </div>
              <div className="detail">
                <span>Wind Speed</span>
                <p>{Math.round(weather.current.wind_kph / 3.6)} m/s</p>
              </div>
              <div className="detail">
                <span>Pressure</span>
                <p>{Math.round(weather.current.pressure_mb)} hPa</p>
              </div>
            </div>
             <p className="last-updated">Last Updated: {weather.current.last_updated.split(' ')[1]}</p>
          </div>
        )}

        {!weather && !loading && !error && (
          <p className="placeholder">Enter a city or use 📍 to find your location</p>
        )}
      </div>
    </div>
  );
}

export default App;