"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CurrencyContext } from "@/context/CurrencyProvider";
import { SelectCurrency } from "@components";
import axios from "axios";
import Link from "next/link";
import { FormEvent, useContext, useEffect, useState } from "react";

export default function CurrenciesPage() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [currencies, setCurrencies] = useState([]);
  const [exchangeRates, setExchangeRates] = useState<null | boolean | object>(
    null
  );
  const { fromCurrency, setFromCurrency } = useContext(CurrencyContext);

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

  const handeSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const exchange = await axios.get(
      `${exchangeRateUrl}/${process.env.NEXT_PUBLIC_EXCHANGE_API}/latest/${fromCurrency}`
    );
    const data = exchange.data;
    setFromCurrency(data.base_code);
    setExchangeRates(data.conversion_rates);
  };

  return (
    <div className="w-full max-w-3xl z-10 rounded-none md:rounded-xl bg-slate-100 px-4 pb-16 md:pb-5 dark:bg-slate-900 md:p-10">
      {!loaded ? (
        <>
          <div className="flex flex-col sticky top-0 left-0 bg-inherit py-3 md:py-2 mt-3">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-lg text-foreground font-bold">
                Base Currencies
              </h1>
              {exchangeRates && (
                <Link
                  onClick={() => setExchangeRates((prev) => !prev)}
                  href="/"
                  className="lg:hidden block "
                >
                  Clear
                </Link>
              )}
            </div>
            <form
              onSubmit={handeSubmitForm}
              className="flex items-center space-x-2 md:space-x-4"
            >
              <SelectCurrency
                value={fromCurrency}
                options={currencies}
                setValue={setFromCurrency}
              />
              <Button type="submit">Submit</Button>
            </form>
          </div>
          <div className="flex flex-col">
            {exchangeRates &&
              Object.entries(exchangeRates).map(([currency, rate]) => (
                <h2 key={currency} className="mt-4 text-start">
                  <span className="tabuler-nums text-xl font-bold tracking-tight text-foreground sm:tracking-wide">{`${rate} ${currency}`}</span>
                </h2>
              ))}
          </div>
        </>
      ) : (
        <Skeleton className="w-full h-[200px] mx-4" />
      )}
    </div>
  );
}
