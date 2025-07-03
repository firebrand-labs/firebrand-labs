import { CountryData } from "@/types";

export const fetchCountries = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name"
    );
    const countries: CountryData[] = await response.json();
    return countries.map((country) => country.name.common).sort();
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};
