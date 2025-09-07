# NationPeek 🌍
A beautiful web application that allows users to discover countries and their capital city weather information with an elegant glassmorphism design.

## Features
- 🔍 Search for any country by name
- 📍 Use geolocation to find your current country
- 🌤️ Display current weather for capital cities
- 🕐 Show local time for countries
- 📊 Display country statistics (population, region, area)
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- ✨ Modern glassmorphism UI

## API Services Used

- **REST Countries API**: For country information (free, no key required)
- **OpenWeatherMap API**: For weather data (requires free API key)
- **BigDataCloud API**: For reverse geocoding (free, no key required)

## Features Breakdown
### Country Information
- Country name and flag
- Capital city
- Population (formatted)
- Region and subregion
- Total area
- Local time with timezone

### Weather Information
- Current temperature
- Weather description with icon
- "Feels like" temperature
- Humidity percentage
- Wind speed

⚠️ **Important Notes:**
- Client-side API keys are visible to users
- OpenWeatherMap free tier has rate limits
- For production apps, use server-side proxy
- Users must grant permission for geolocation
- HTTPS is required for geolocation in most browsers
