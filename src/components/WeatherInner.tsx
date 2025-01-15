import { useEffect, useState } from "react";
import { WeatherList } from "../types";
import Search from "./Search";
import {
  WeatherInfoContainer,
  WeatherInnerStyled,
} from "./styles/Weather.styled";
import WeatherMain from "./WeatherMain";
import Spinner from "./Spinner";

const WeatherInner = () => {
  const api: string = "API";
  const [cityName, setCityName] = useState<string>("unknown");
  const [weatherListArray, setWeatherListArray] = useState<Array<WeatherList>>([
    {
      description: "none",
      icon: "01d",
      temp: 0,
      feelsLike: 0,
      humidity: 0,
      windSpeed: 0,
      pressure: 0,
      date: "0",
    },
  ]);
  const [isWeather, setIsWeather] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("OK");

  const futureWeather = async (uri: string) => {
    setIsLoading(true);
    setIsWeather(true);

    await fetch(uri)
      .then((res) => res.json())
      .then((res) => {
        setCityName(res.city.name);
        setWeatherListArray([]);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        res.list.map((i) => {
          const temp: WeatherList = {
            description: i.weather[0].description,
            icon: i.weather[0].icon,
            temp: Math.round(i.main.temp),
            feelsLike: Math.round(i.main.feels_like),
            humidity: i.main.humidity,
            windSpeed: i.wind.speed,
            pressure: i.main.pressure,
            date: i.dt_txt,
          };
          setWeatherListArray((prev) => [...prev, temp]);
          setIsLoading(false);
          setIsError("OK");
        });
      })
      .catch(() => {
        setIsLoading(false);
        setIsWeather(false);
        setIsError("Can't find city");
      });
  };

  const getWeatherByCity = (city: string) => {
    if (city === "") {
      setIsError("Input is empty");
      return;
    }

    setIsLoading(true);
    setIsWeather(true);

    const uri: string =
      `https://api.openweathermap.org/data/2.5/forecast?q=` +
      city +
      `&appid=` +
      api +
      `&units=metric`;

    futureWeather(uri);
  };

  const getWeatherByCoords = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLoading(true);
          setIsWeather(true);
          setIsError("OK");
          const uri: string =
            "https://api.openweathermap.org/data/2.5/forecast?lat=" +
            position.coords.latitude +
            "&lon=" +
            position.coords.longitude +
            "&appid=" +
            api +
            "&units=metric";

          futureWeather(uri);
        },
        (error) => {
          setIsWeather(false);
          setIsLoading(false);
          switch (error.code) {
            case 1:
              setIsError("No permission for geolocation");
              break;
            case 2:
              setIsError("Geolocation not available");
              break;
            case 3:
              setIsError("Geolocation timeout");
              break;
          }
        }
      );
    } else {
      setIsWeather(false);
      setIsLoading(false);
      setIsError("Geolocation not supported");
    }
  };

  const clearError = () => {
    setIsError("OK");
  };

  useEffect(() => {
    getWeatherByCoords();
  }, []);

  return (
    <WeatherInnerStyled>
      <Search
        getWeatherByCoords={getWeatherByCoords}
        getWeather={getWeatherByCity}
        errorMessage={isError}
        clearError={clearError}
      ></Search>
      <WeatherInfoContainer>
        {isLoading ? <Spinner /> : ""}
        {isWeather ? (
          <WeatherMain
            visible={isLoading}
            cityName={cityName}
            weatherListArray={weatherListArray}
          ></WeatherMain>
        ) : (
          ""
        )}
      </WeatherInfoContainer>
    </WeatherInnerStyled>
  );
};
export default WeatherInner;
