import { CurrentWeather } from "../types";
import {
  WeatherMainContainer,
  CityName,
  Description,
  ImageContainer,
  Image,
  Temperature,
  CardsContainer,
} from "./styles/Weather.styled";
import WeatherInfoCard from "./WeatherInfoCard";

type Props = {
  weather: CurrentWeather;
  visible: boolean;
};

const WeatherMain = (props: Props) => {
  return (
    <>
      <WeatherMainContainer visible={props.visible}>
        <CityName>{props.weather.city}</CityName>
        <Description>{props.weather.description}</Description>
        <ImageContainer>
          <Image
            src={
              `https://openweathermap.org/img/wn/` +
              props.weather.icon +
              `@2x.png`
            }
            alt="weather icon"
          ></Image>
        </ImageContainer>
        <Temperature>{props.weather.temp}°</Temperature>
        <CardsContainer>
          <WeatherInfoCard
            text="Feels Like"
            value={props.weather.feelsLike + `°`}
          ></WeatherInfoCard>
          <WeatherInfoCard
            text="Humidity"
            value={props.weather.humidity + `%`}
          ></WeatherInfoCard>
          <WeatherInfoCard
            text="Wind"
            value={props.weather.windSpeed + ` m/s`}
          ></WeatherInfoCard>
          <WeatherInfoCard
            text="Pressure"
            value={props.weather.pressure + ` hPa`}
          ></WeatherInfoCard>
        </CardsContainer>
      </WeatherMainContainer>
    </>
  );
};
export default WeatherMain;
