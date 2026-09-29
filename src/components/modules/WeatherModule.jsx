import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { CloudSun, Cloud, Droplets, Wind, Thermometer, AlertTriangle, CheckCircle2, Eye, Umbrella, RefreshCw } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

// Demo weather data (Open-Meteo style, labeled as demo)
const DEMO_WEATHER = {
  location: 'Khanna, Punjab',
  current: { temp: 31, feelsLike: 34, humidity: 62, wind: 14, windDir: 'NW', condition: 'Partly Cloudy', icon: '⛅', pressure: 1008, visibility: 8, uvIndex: 7 },
  hourly: [
    { time: '6am', temp: 24, rain: 0, humidity: 70 }, { time: '9am', temp: 27, rain: 0, humidity: 65 },
    { time: '12pm', temp: 31, rain: 0, humidity: 58 }, { time: '3pm', temp: 33, rain: 15, humidity: 72 },
    { time: '6pm', temp: 29, rain: 25, humidity: 80 }, { time: '9pm', temp: 26, rain: 5, humidity: 75 }
  ],
  daily: [
    { day: 'Mon', high: 32, low: 22, rain: 10, condition: '⛅', spray: true },
    { day: 'Tue', high: 28, low: 20, rain: 35, condition: '🌧️', spray: false },
    { day: 'Wed', high: 26, low: 19, rain: 50, condition: '🌧️', spray: false },
    { day: 'Thu', high: 30, low: 21, rain: 5, condition: '🌤️', spray: true },
    { day: 'Fri', high: 33, low: 23, rain: 0, condition: '☀️', spray: true },
    { day: 'Sat', high: 35, low: 24, rain: 0, condition: '☀️', spray: true },
    { day: 'Sun', high: 31, low: 22, rain: 8, condition: '⛅', spray: true }
  ],
  farmAdvice: [
    { day: 'Mon', advice: 'Good spray window 7-10am. Apply fungicide for rust protection.', ok: true },
    { day: 'Tue', advice: 'Rain forecasted afternoon. Avoid any spraying today.', ok: false },
    { day: 'Wed', advice: 'Heavy rain (50mm). Field operations not possible.', ok: false },
    { day: 'Thu', advice: 'Post-rain inspection. Check for lodging and disease.', ok: true },
    { day: 'Fri', advice: 'Excellent conditions. Irrigate morning. Apply top-dress fertilizer.', ok: true },
    { day: 'Sat', advice: 'Hot and dry. Soil moisture check advised. Morning irrigation.', ok: true },
    { day: 'Sun', advice: 'Light clouds. Monitor for aphid activity in cool morning.', ok: true }
  ]
};

export default function WeatherModule() {
  const { mode, farmProfile } = useApp();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [retrying, setRetrying] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/weather');
      if (res.ok) {
        const data = await res.json();
        setWeather(data);
      } else {
        throw new Error('Weather API error');
      }
    } catch (err) {
      // Use demo data if offline
      setWeather(DEMO_WEATHER);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchWeather(); }, []);

  const today = weather?.daily[0];
  const sprayOk = today?.spray;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <CloudSun className="w-7 h-7 text-sky-600" /> Weather
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            {weather?.location || farmProfile?.village || 'Your Farm'} • <span className="text-amber-600 font-semibold text-xs">Demo Data</span>
          </p>
        </div>
        <button onClick={fetchWeather} className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/30 text-sky-600 hover:bg-sky-100 transition-colors border border-sky-200 dark:border-sky-800">
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map(i => <div key={i} className="h-32 rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />)}
        </div>
      ) : weather ? (
        <>
          {/* Current Conditions */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-6xl mb-2">{weather.current.icon}</div>
                <div className="text-5xl font-black">{weather.current.temp}°C</div>
                <div className="text-sky-200 font-semibold mt-1">{weather.current.condition}</div>
                <div className="text-sm text-sky-200 mt-0.5">Feels like {weather.current.feelsLike}°C</div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { icon: Droplets, label: 'Humidity', val: `${weather.current.humidity}%` },
                  { icon: Wind, label: 'Wind', val: `${weather.current.wind} km/h ${weather.current.windDir}` },
                  { icon: Eye, label: 'Visibility', val: `${weather.current.visibility} km` },
                  { icon: Thermometer, label: 'UV Index', val: weather.current.uvIndex }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-white/15 backdrop-blur rounded-xl p-2.5">
                      <Icon className="w-3.5 h-3.5 mb-0.5 text-sky-200" />
                      <div className="text-[10px] text-sky-200">{item.label}</div>
                      <div className="font-bold text-xs">{item.val}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Spray Window */}
            <div className={`flex items-center gap-3 p-3 rounded-xl ${sprayOk ? 'bg-emerald-500/30 border border-emerald-400/40' : 'bg-red-500/30 border border-red-400/40'}`}>
              {sprayOk ? <CheckCircle2 className="w-5 h-5 text-emerald-300" /> : <AlertTriangle className="w-5 h-5 text-red-300" />}
              <div>
                <div className="font-bold text-sm">{sprayOk ? '✓ Good Spray Window Today' : '✗ Not Safe to Spray Today'}</div>
                <div className="text-xs text-sky-200">{sprayOk ? 'Wind <15 km/h, No rain forecast, Humidity suitable' : 'Rain expected or wind too high for effective spray'}</div>
              </div>
            </div>
          </div>

          {/* Hourly Chart */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-extrabold text-slate-900 dark:text-white mb-4">Today's Hourly Forecast</h3>
            <ResponsiveContainer width="100%" height={160}>
              <AreaChart data={weather.hourly}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="temp" domain={[15, 40]} tick={{ fontSize: 10 }} unit="°" />
                <YAxis yAxisId="rain" orientation="right" domain={[0, 60]} tick={{ fontSize: 10 }} unit="mm" />
                <Tooltip />
                <Area yAxisId="temp" type="monotone" dataKey="temp" stroke="#f59e0b" fill="#fef3c7" strokeWidth={2} name="Temp °C" />
                <Area yAxisId="rain" type="monotone" dataKey="rain" stroke="#3b82f6" fill="#dbeafe" strokeWidth={2} name="Rain mm" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* 7-Day Forecast */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-extrabold text-slate-900 dark:text-white">7-Day Forecast</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {weather.daily.map((d, i) => (
                <div key={i} className="flex items-center gap-4 px-5 py-3">
                  <div className="w-10 font-bold text-slate-700 dark:text-slate-300 text-sm">{d.day}</div>
                  <div className="text-2xl">{d.condition}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 text-xs text-blue-600">
                      <Umbrella className="w-3 h-3" /> {d.rain}mm
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{d.high}° / <span className="text-slate-400">{d.low}°</span></div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${d.spray ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400'}`}>
                    {d.spray ? '✓ Spray' : '✗ No Spray'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Farm Advice per Day */}
          {mode === 'detailed' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-extrabold text-slate-900 dark:text-white">Farm Action Line</h3>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {weather.farmAdvice.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 px-5 py-3">
                    <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${a.ok ? 'bg-emerald-500' : 'bg-red-500'}`}>
                      {a.ok ? <CheckCircle2 className="w-2.5 h-2.5 text-white" /> : <AlertTriangle className="w-2.5 h-2.5 text-white" />}
                    </span>
                    <div>
                      <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{weather.daily[i]?.day}: </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{a.advice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <CloudSun className="w-16 h-16 text-slate-200 dark:text-slate-700 mx-auto mb-4" />
          <p className="text-slate-500 dark:text-slate-400 mb-4">Unable to load weather data. Check your connection.</p>
          <button onClick={fetchWeather} className="px-6 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 transition-colors">Retry</button>
        </div>
      )}
    </div>
  );
}
