import { COUNTRIES_DATA } from './countries-data';

interface CountryData {
  [code: string]: string;
}

class Iso31661a2 {
  private static countries: CountryData = COUNTRIES_DATA;

  getCountry(code: string): string | undefined {
    return Iso31661a2.countries[code];
  }

  getCode(country: string): string | null {
    if (country == null) {
      return null;
    }
    const values = Object.values(Iso31661a2.countries);
    const idx = values.indexOf(country);
    return idx !== -1 ? Object.keys(Iso31661a2.countries)[idx] : null;
  }

  getCountries(): string[] {
    return Object.values(Iso31661a2.countries);
  }

  getCodes(): string[] {
    return Object.keys(Iso31661a2.countries);
  }

  getData(): CountryData {
    return Iso31661a2.countries;
  }
}

let singleton: Iso31661a2 | null = null;

export = (() => {
  if (singleton === null) {
    singleton = new Iso31661a2();
  }
  return singleton;
})();