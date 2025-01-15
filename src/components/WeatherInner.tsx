import { useEffect, useState } from "react";
import { CurrentWeather } from "../types";
import Search from "./Search";
import {
  WeatherInfoContainer,
  WeatherInnerStyled,
} from "./styles/Weather.styled";
import WeatherMain from "./WeatherMain";
import Spinner from "./Spinner";

const WeatherInner = () => {
  const api: string = "";
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({
    city: "unknown",
    description: "none",
    icon: "01d",
    temp: 0,
    feelsLike: 0,
    humidity: 0,
    windSpeed: 0,
    pressure: 0,
  });
  const [isWeather, setIsWeather] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWeather = async (uri: string) => {
    await fetch(uri)
      .then((res) => res.json())
      .then((res) =>
        setCurrentWeather({
          city: res.name,
          description: res.weather[0].description,
          icon: res.weather[0].icon,
          temp: Math.round(res.main.temp),
          feelsLike: Math.round(res.main.feels_like),
          humidity: Math.round(res.main.humidity),
          windSpeed: Math.round(res.wind.speed),
          pressure: res.main.pressure,
        })
      )
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
      .catch((err) => console.error(err));
  };

  const currentWeatherByCity = (city: string) => {
    setIsLoading(true);
    setIsWeather(true);

    const uri: string =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      api +
      "&units=metric";

    getWeather(uri);
  };

  const getWeatherByCoords = async () => {
    setIsLoading(true);
    setIsWeather(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const uri: string =
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
            position.coords.latitude +
            "&lon=" +
            position.coords.longitude +
            "&appid=" +
            api +
            "&units=metric";

          getWeather(uri);
        },
        (error) => {
          setIsWeather(false);
          setIsLoading(false);
          console.error(error);
        }
      );
    } else {
      setIsWeather(false);
      setIsLoading(false);
      console.error("does not work");
    }
  };

  useEffect(() => {
    getWeatherByCoords();
  }, []);

  return (
    <WeatherInnerStyled>
      <Search
        getWeatherByCoords={getWeatherByCoords}
        getWeather={currentWeatherByCity}
      ></Search>
      <WeatherInfoContainer>
        {isLoading ? <Spinner /> : ""}
        {isWeather ? (
          <WeatherMain
            visible={isLoading}
            weather={currentWeather}
          ></WeatherMain>
        ) : (
          ""
        )}
      </WeatherInfoContainer>
    </WeatherInnerStyled>
  );
};
export default WeatherInner;
