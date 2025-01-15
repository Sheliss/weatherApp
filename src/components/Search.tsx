import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import {
  ErrorMessage,
  SearchButton,
  SearchInput,
  SearchRow,
} from "./styles/Search.styled";
import { useState } from "react";

type Props = {
  getWeather: (city: string) => void;
  getWeatherByCoords: () => void;
  errorMessage: string;
  clearError: () => void;
};

const Search = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearchClick = () => {
    props.getWeather(inputValue);
    setInputValue("");
  };
  return (
    <SearchRow>
      <SearchButton onClick={() => props.getWeatherByCoords()}>
        <FaMapMarkerAlt />
      </SearchButton>
      <SearchInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city name..."
        onKeyDown={(e) => (e.key === "Enter" ? handleSearchClick() : "")}
      ></SearchInput>
      <SearchButton onClick={() => handleSearchClick()}>
        <FaSearch />
      </SearchButton>
      {props.errorMessage === "OK" ? (
        ""
      ) : (
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      )}
    </SearchRow>
  );
};
export default Search;
