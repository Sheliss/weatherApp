import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { SearchButton, SearchInput, SearchRow } from "./styles/Search.styled";
import { useState } from "react";

type Props = {
  getWeather: (city: string) => void;
};

const Search = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = () => {
    props.getWeather(inputValue);
    setInputValue("");
  };
  return (
    <SearchRow>
      <SearchButton>
        <FaMapMarkerAlt />
      </SearchButton>
      <SearchInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city name..."
      ></SearchInput>
      <SearchButton onClick={() => handleClick()}>
        <FaSearch />
      </SearchButton>
    </SearchRow>
  );
};
export default Search;
