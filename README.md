weather-app/
│
├── app/
│   ├── components/
│   │   ├── LoginForm.tsx
│   │   └── WeatherCard.tsx
│   │
│   ├── routes/
│   │   ├── _auth.login.tsx
│   │   └── _protected.dashboard.tsx
│   │
│   ├── services/
│   │   ├── auth.server.ts
│   │   ├── db.server.ts
│   │   └── weather.server.ts
│   │
│   ├── utils/
│   │   └── session.server.ts
│   │
│   └── root.tsx
│
├── prisma/
│   └── schema.prisma
│
├── public/
│   └── weather-icons/
│
├── package.json
├── remix.config.js
└── tsconfig.json