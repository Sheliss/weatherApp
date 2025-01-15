import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { SearchButton, SearchInput, SearchRow } from "./styles/Search.styled";
import { useState } from "react";

type Props = {
  getWeather: (city: string) => void;
  getWeatherByCoords: () => void;
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
      ></SearchInput>
      <SearchButton onClick={() => handleSearchClick()}>
        <FaSearch />
      </SearchButton>
    </SearchRow>
  );
};
export default Search;
