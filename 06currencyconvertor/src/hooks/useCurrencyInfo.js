import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        );
        const json = await res.json();
        setData(json[currency]);
      } catch (error) {
        console.error("API ERROR:", error);
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
