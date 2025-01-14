import { CardText, InfoCard } from "./styles/WeatherInfoCard.styled";

type Props = {
  text: string;
  value: string;
};

const WeatherInfoCard = (props: Props) => {
  return (
    <InfoCard>
      <CardText>{props.text}</CardText>
      <CardText>{props.value}</CardText>
    </InfoCard>
  );
};
export default WeatherInfoCard;
