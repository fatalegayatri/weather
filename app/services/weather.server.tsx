// app/services/weather.server.ts
import axios from 'axios';

const WEATHER_API_BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = process.env.WEATHER_API_KEY;

export interface WeatherData {
    location: {
        name: string;
    };
    current: {
        condition: {
            text: string;
            icon: string;
        };
        temp_c: number;
        humidity: number;
        precip_mm: number;
    };
}

export async function getWeatherForCity(city: string): Promise<WeatherData> {
    try {
        const response = await axios.get(`${WEATHER_API_BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city
            }
        });

        return response.data;
    } catch (error) {
        console.error('Weather API error:', error);
        throw new Error(`Could not fetch weather for ${city}`);
    }
}