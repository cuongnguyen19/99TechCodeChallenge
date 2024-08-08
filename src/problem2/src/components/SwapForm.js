import React, { useState } from 'react';
import CurrencySelect from './CurrencySelect';
import { currencies } from '../data/currencies';
import { Form, SelectWrapper, Label, InputWrapper, Input, Button, Error, Result } from '../styles/styles';

const SwapForm = () => {
    const [fromCurrency, setFromCurrency] = useState(null);
    const [toCurrency, setToCurrency] = useState(null);
    const [amount, setAmount] = useState('');
    const [exchangeRate, setExchangeRate] = useState(null);
    const [error, setError] = useState('');

    const handleSwap = () => {
        if (!fromCurrency || !toCurrency || !amount) {
            setError('Please fill out all fields');
            return;
        }
        const fromPrice = currencies.find(curr => curr.currency === fromCurrency.value).price;
        const toPrice = currencies.find(curr => curr.currency === toCurrency.value).price;
        const rate = (fromPrice / toPrice).toFixed(6);
        setExchangeRate(rate);
        setError('');
    };

    return (
        <Form>
            <SelectWrapper>
                <Label>From</Label>
                <CurrencySelect value={fromCurrency} onChange={setFromCurrency} />
            </SelectWrapper>
            <SelectWrapper>
                <Label>To</Label>
                <CurrencySelect value={toCurrency} onChange={setToCurrency} />
            </SelectWrapper>
            <InputWrapper>
                <Label>Amount</Label>
                <Input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
            </InputWrapper>
            {error && <Error>{error}</Error>}
            <Button onClick={handleSwap}>Swap</Button>
            {exchangeRate && (
                <Result>
                    {amount} {fromCurrency.value} = {(amount * exchangeRate).toFixed(6)} {toCurrency.value}
                </Result>
            )}
        </Form>
    );
};

export default SwapForm;