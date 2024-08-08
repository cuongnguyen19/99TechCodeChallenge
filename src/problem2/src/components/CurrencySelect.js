import React from 'react';
import Select from 'react-select';
import { currencies } from '../data/currencies';
import styled from 'styled-components';

const CurrencyOption = ({ label, image }) => (
    <OptionWrapper>
        <img src={image} alt={label} />
        <span>{label}</span>
    </OptionWrapper>
);

const CurrencySelect = ({ value, onChange }) => {
    // Sort options alphabetically by label
    const options = currencies
        .map(curr => ({
            value: curr.currency,
            label: curr.currency,
            image: curr.image,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

    const formatOptionLabel = ({ value, label, image }) => (
        <CurrencyOption label={label} image={image} />
    );

    return (
        <Select
            options={options}
            value={value}
            onChange={onChange}
            formatOptionLabel={formatOptionLabel}
        />
    );
};

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export default CurrencySelect;