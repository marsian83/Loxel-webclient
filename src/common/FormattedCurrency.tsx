import React from "react";
import useLocale from "../hooks/useLocale";

interface FormattedCurrencyProps {
  amount: number;
  className?: string;
}

export default function FormattedCurrency(props: FormattedCurrencyProps) {
  const { current } = useLocale();

  const formatter = new Intl.NumberFormat(current.locale, {
    style: "currency",
    currency: current.currency,
  });

  return (
    <span className={props.className}>{formatter.format(props.amount)}</span>
  );
}
