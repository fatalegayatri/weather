// app/routes/_protected.dashboard.tsx
import { useState } from 'react';
import {
    Typography,
    Container,
    Grid,
    TextField,
    Button,
    Card,
    CardContent
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useLoaderData, Form } from '@remix-run/react';
import { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import { authenticator } from '../services/_auth.server';
import { prisma } from '../services/_db.server';
import { getWeatherForCity, WeatherData } from '../services/weather.server';

export async function loader({ request }: LoaderFunctionArgs) {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login"
    });

    const userData = await prisma.user.findUnique({
        where: { id: user.id },
        include: { cities: true }
    });

    const weatherData = await Promise.all(
        userData.cities.map(city => getWeatherForCity(city.name))
    );

    return { user, cities: userData.cities, weatherData };
}

export async function action({ request }: ActionFunctionArgs) {
    const user = await authenticator.isAuthenticated(request);
    const formData = await request.formData();
    const action = formData.get('_action');
    const cityName = formData.get('cityName');

    if (action === 'add' && cityName) {
        const existingCitiesCount = await prisma.city.count({
            where: { userId: user.id }
        });

        if (existingCitiesCount < 5) {
            await prisma.city.create({
                data: {
                    name: cityName as string,
                    userId: user.id
                }
            });
        }
    } else if (action === 'delete') {
        await prisma.city.deleteMany({
            where: {
                name: cityName as string,
                userId: user.id
            }
        });
    }

    return null;
}

export default function Dashboard() {
    const { user, cities, weatherData } = useLoaderData<typeof loader>();
    const [newCity, setNewCity] = useState('');

    return (
        <Container>
            <Typography variant="h4" sx={{ my: 2 }}>
                Welcome to the Weather App, {user.username}!
            </Typography>

            <Form method="post">
                <TextField
                    label="Add City"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    variant="outlined"
                    sx={{ mr: 2 }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    name="_action"
                    value="add"
                    disabled={cities.length >= 5}
                >
                    Add City
                </Button>
            </Form>

            <Grid container spacing={3} sx={{ mt: 2 }}>
                {weatherData.map((weather, index) => (
                    <Grid item xs={12} md={4} key={cities[index].id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{weather.location.name}</Typography>
                                <Typography>{weather.current.condition.text}</Typography>
                                <img
                                    src={weather.current.condition.icon}
                                    alt="Weather Icon"
                                />
                                <Typography>Temp: {weather.current.temp_c}°C</Typography>
                                <Typography>Humidity: {weather.current.humidity}%</Typography>
                                <Typography>Precipitation: {weather.current.precip_mm}mm</Typography>
                                <Form method="post">
                                    <input
                                        type="hidden"
                                        name="cityName"
                                        value={weather.location.name}
                                    />
                                    <Button
                                        type="submit"
                                        name="_action"
                                        value="delete"
                                        color="error"
                                        startIcon={<Delete />}
                                    >
                                        Remove
                                    </Button>
                                </Form>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
