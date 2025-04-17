import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../styles/App.module.scss";

const currencies = ['USD', 'EUR', 'RUB', 'BYN', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY'];

const Converter = () => {
    const [inputAmount, setInputAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [rates, setRates] = useState({});
    const [result, setResult] = useState(0);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(
                    `https://api.exchangerate-api.com/v4/latest/USD`
                );
                const filteredRates = Object.fromEntries(
                    Object.entries(response.data.rates).filter(([key]) =>
                        currencies.includes(key)
                    )
                );
                setRates({ USD: 1, ...filteredRates });
            } catch (error) {
                console.error('Ошибка при загрузке курсов:', error.message);
                if (error.response) {
                    console.error('Статус ошибки:', error.response.status);
                    console.error('Данные ошибки:', error.response.data);
                } else {
                    console.error('Ошибка сети:', error.message);
                }
            }
        };
        fetchRates();
    }, []);

    useEffect(() => {
        if (rates[fromCurrency] && rates[toCurrency] && inputAmount) {
            const amountInBaseCurrency = inputAmount / rates[fromCurrency];
            const convertedAmount = amountInBaseCurrency * rates[toCurrency];
            setResult(convertedAmount);
        }
    }, [inputAmount, fromCurrency, toCurrency, rates]);

    return (

            <div className={styles.converter}>
                <div className={styles.rates}>
                    <h2 className={styles.Text}>Курс 1 {fromCurrency} к другим валютам:</h2>
                    <ul className={styles.Text}>
                        {Object.entries(rates).map(([currency, rate]) => {
                            if (currency === fromCurrency) return null;
                            const convertedRate = rates[fromCurrency] ? (rate / rates[fromCurrency]).toFixed(4) : 0;
                            return (
                                <li key={currency} className={styles.rateItem}>
                                    1 {fromCurrency} = {convertedRate} {currency}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <p className={styles.Text}>
                    Введите сумму и выберите валюту, чтобы получить эквивалент в другой валюте.
                </p>
                <div className={styles.wrapper}>
                    <div className={styles.input__wrapper}>
                        <input
                            className={styles.Input}
                            type="text"
                            placeholder='Введите количество'
                            value={inputAmount}
                            onChange={(e) => setInputAmount(e.target.value)}
                        />
                        <select
                            className={styles.selection}
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.ans__wrapper}>
                        <p className={styles.Input}>
                            {result.toFixed(2)} {toCurrency}
                        </p>
                        <select
                            className={styles.selection}
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
    );
};

export default Converter;