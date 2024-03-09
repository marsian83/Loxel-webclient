export const locales = [
  {
    locale: "en-US",
    currency: "USD",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (United States) - US Dollar
  {
    locale: "en-GB",
    currency: "GBP",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (United Kingdom) - British Pound
  {
    locale: "en-IN",
    currency: "INR",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (India) - Indian Rupee
  {
    locale: "en-CA",
    currency: "CAD",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (Canada) - Canadian Dollar
  {
    locale: "en-AU",
    currency: "AUD",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (Australia) - Australian Dollar
  {
    locale: "en-NZ",
    currency: "NZD",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (New Zealand) - New Zealand Dollar
  {
    locale: "en-SG",
    currency: "SGD",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (Singapore) - Singapore Dollar
  {
    locale: "en-ZA",
    currency: "ZAR",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (South Africa) - South African Rand
  {
    locale: "en-JM",
    currency: "JMD",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (Jamaica) - Jamaican Dollar
  {
    locale: "en-PH",
    currency: "PHP",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (Philippines) - Philippine Peso
  {
    locale: "en-MY",
    currency: "MYR",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // English (Malaysia) - Malaysian Ringgit
] as const;

export type LocaleAndCurrency = (typeof locales)[number];
export type Locale = LocaleAndCurrency["locale"];
