import { useState } from "react";
import { CurrentWeather } from "../types";
import Search from "./Search";
import {
  Spinner,
  SpinnerContainer,
  WeatherInnerStyled,
} from "./styles/Weather.styled";
import WeatherMain from "./WeatherMain";

const WeatherInner = () => {
  const api: string = "a24d1a2d1f579fd23347851d7b97f47a";
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({
    city: "none",
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

  const getWeather = async (city: string) => {
    if (city === "") {
      return;
    }

    setIsLoading(true);

    const uri =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      api +
      "&units=metric";

    try {
      const res = await fetch(uri);
      const data = await res.json();

      setCurrentWeather({
        city: data.name,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: Math.round(data.main.humidity),
        windSpeed: Math.round(data.wind.speed),
        pressure: data.main.pressure,
      });
      setIsLoading(false);
      setIsWeather(true);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  return (
    <WeatherInnerStyled>
      <Search getWeather={getWeather}></Search>
      {isWeather ? <WeatherMain weather={currentWeather}></WeatherMain> : ""}
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        ""
      )}
    </WeatherInnerStyled>
  );
};
export default WeatherInner;
