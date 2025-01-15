import { WeatherList } from "../types";
import FutureList from "./FutureList";
import {
  WeatherMainContainer,
  CityName,
  Description,
  ImageContainer,
  Image,
  Temperature,
  CardsContainer,
  FutureCardsContainer,
} from "./styles/Weather.styled";
import WeatherInfoCard from "./WeatherInfoCard";

type Props = {
  visible: boolean;
  cityName: string;
  weatherListArray: Array<WeatherList>;
};

const WeatherMain = (props: Props) => {
  return (
    <>
      <WeatherMainContainer
        visible={props.visible === false ? "visible" : "hidden"}
      >
        <CityName key={props.cityName}>{props.cityName}</CityName>
        <Description key={props.weatherListArray[0].description}>
          {props.weatherListArray[0].description}
        </Description>
        <ImageContainer key={props.weatherListArray[0].icon}>
          <Image
            src={
              `https://openweathermap.org/img/wn/` +
              props.weatherListArray[0].icon +
              `@2x.png`
            }
            alt="weather icon"
          ></Image>
        </ImageContainer>
        <Temperature key={props.weatherListArray[0].temp}>
          {props.weatherListArray[0].temp}°
        </Temperature>
        <CardsContainer>
          <WeatherInfoCard
            text="Feels Like"
            value={props.weatherListArray[0].feelsLike + `°`}
          ></WeatherInfoCard>
          <WeatherInfoCard
            text="Humidity"
            value={props.weatherListArray[0].humidity + `%`}
          ></WeatherInfoCard>
          <WeatherInfoCard
            text="Wind"
            value={props.weatherListArray[0].windSpeed + ` m/s`}
          ></WeatherInfoCard>
          <WeatherInfoCard
            text="Pressure"
            value={props.weatherListArray[0].pressure + ` hPa`}
          ></WeatherInfoCard>
        </CardsContainer>
        <FutureCardsContainer>
          <FutureList weatherInfo={props.weatherListArray}></FutureList>
        </FutureCardsContainer>
      </WeatherMainContainer>
    </>
  );
};
export default WeatherMain;
