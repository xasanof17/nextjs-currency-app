"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { CurrencyContext } from "@/context/CurrencyProvider";
import {
  ThemeToggle,
  InputAmount,
  SwitchCurrency,
  SelectCurrency,
} from "@components";
import axios from "axios";
import { useState, useEffect, useContext, FormEvent } from "react";

export default function HomePage() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [currencies, setCurrencies] = useState([]);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  const {
    firstAmount,
    setFirstAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
  } = useContext(CurrencyContext);

  const url = "https://currency-exchange.p.rapidapi.com";
  const exchangeRateUrl = "https://v6.exchangerate-api.com/v6";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(true);
        const currencies = await axios.get(
          `${exchangeRateUrl}/${
            process.env.NEXT_PUBLIC_EXCHANGE_API as string
          }/codes`
        );
        const currencyCodes = currencies.data.supported_codes.map(
          (currency: string) => currency[0]
        );

        setCurrencies(currencyCodes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(false);
      }
    };
    fetchData();
  }, []);

  const handleExchangeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const exchange = await axios.get(
      `${exchangeRateUrl}/${process.env.NEXT_PUBLIC_EXCHANGE_API}/pair/${fromCurrency}/${toCurrency}`
    );
    if (exchange) {
      const data = exchange.data.conversion_rate;
      setExchangeRate(data);
    } else {
      const exchange = await axios.get(`${url}/exchange`, {
        method: "GET",
        params: {
          from: fromCurrency,
          to: toCurrency,
          q: firstAmount,
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST as string,
        },
      });
      setExchangeRate(exchange.data);
    }
  };

  return (
    <section className="flex min-h-screen flex-1 items-center justify-center">
      <div className="fixed right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="mx-4 w-full max-w-3xl rounded-xl bg-slate-100 px-3 py-5 dark:bg-slate-900 md:p-10">
        {!loaded ? (
          <>
            <h1 className="text-center text-xl font-semibold tracking-normal sm:text-2xl">
              Stay Ahead with Accurate Conversions
            </h1>
            <form
              onSubmit={handleExchangeSubmit}
              onChange={handleExchangeSubmit}
              className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4"
            >
              <InputAmount
                firstAmount={firstAmount}
                setFirstAmount={setFirstAmount}
              />
              <SelectCurrency
                value={fromCurrency}
                options={currencies}
                setValue={setFromCurrency}
                label="salom"
              />
              <SwitchCurrency
                fromCurrency={fromCurrency}
                setFromCurrency={setFromCurrency}
                toCurrency={toCurrency}
                setToCurrency={setToCurrency}
              />
              <SelectCurrency
                value={toCurrency}
                options={currencies}
                setValue={setToCurrency}
                label="salom"
              />
            </form>
          </>
        ) : (
          <Skeleton className="h-full w-full p-10" />
        )}
        {exchangeRate && (
          <h2 className="mt-4 flex flex-col text-center md:text-start">
            <span className="text-base font-semibold text-foreground">
              {firstAmount} {fromCurrency} =
            </span>
            <span className="tabuler-nums text-3xl font-bold tracking-tight text-foreground sm:tracking-wide">{`${exchangeRate} ${toCurrency}`}</span>
          </h2>
        )}
      </div>
    </section>
  );
}
