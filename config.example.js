// config.example.js
// Example configuration file - copy this to config.js and add your API keys

const CONFIG = {
    // OpenWeatherMap API Key
    // Get your free API key from: https://openweathermap.org/api
    WEATHER_API_KEY: 'YOUR_OPENWEATHERMAP_API_KEY_HERE',
    
    // Other configuration options
    DEFAULT_UNITS: 'metric', // metric, imperial, kelvin
    REQUEST_TIMEOUT: 10000,  // 10 seconds
    
    // API Endpoints
    ENDPOINTS: {
        WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
        COUNTRIES: 'https://restcountries.com/v3.1',
        GEOCODING: 'https://api.bigdatacloud.net/data/reverse-geocode-client'
    }
};

// Export configuration (for module systems)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Make available globally (for browser)
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}