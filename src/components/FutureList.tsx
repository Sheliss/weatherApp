import { WeatherList } from "../types";
import {
  FutureImg,
  FutureImgContainer,
  FutureItem,
  FutureListStyled,
  FutureSubtitle,
  FutureTemp,
  FutureTitle,
} from "./styles/FutureCards.styled";

type Props = {
  weatherInfo: Array<WeatherList>;
};

const getDay = (date: string) => {
  const day = new Date(date).toString().substring(0, 3);
  switch (day) {
    case "Sun":
      return "Sunday";
    case "Mon":
      return "Monday";
    case "Tue":
      return "Tuesday";
    case "Wed":
      return "Wednesday";
    case "Thu":
      return "Thursday";
    case "Fri":
      return "Friday";
    case "Sat":
      return "Saturday";
  }
  return day;
};

const getTime = (date: string) => {
  const time = new Date(date).toString().substring(16, 21);
  return time;
};

const FutureList = (props: Props) => {
  return (
    <FutureListStyled>
      {props.weatherInfo.slice(1).map((i) => (
        <FutureItem key={i.date}>
          <FutureTitle>{getDay(i.date)}</FutureTitle>
          <FutureSubtitle>{getTime(i.date)}</FutureSubtitle>
          <FutureTemp>{i.temp + `°`}</FutureTemp>
          <FutureImgContainer>
            <FutureImg
              src={`https://openweathermap.org/img/wn/` + i.icon + `.png`}
              alt="weather icon"
            />
          </FutureImgContainer>
        </FutureItem>
      ))}
    </FutureListStyled>
  );
};
export default FutureList;
