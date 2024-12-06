import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from './Select';

describe('Select component', () => {
    const options = [['option1'], ['option2'], ['option3']];

    it('test options', () => {
        render(<Select options={options} value="option1" onChange={() => {}}/>);
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();

        options.forEach((option) => {
            expect(screen.getByText(option)).toBeInTheDocument();
        });
    });

    it('test selected value', () => {
        render(<Select options={options} value="option2" onChange={() => {}}/>);
        const select = screen.getByRole('combobox');
        expect(select.value).toBe('option2');
    });

    it('test onChange', () => {
        const handleChange = jest.fn();
        render(<Select options={options} value="option1" onChange={handleChange}/>);
        const select = screen.getByRole('combobox');

        fireEvent.change(select, {target: {value: 'option3'}});
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.anything()); // Проверка вызова
    });

    it('test is disabled', () => {
        render(<Select options={options} value="option1" disabled={true} onChange={() => {}}/>);
        const select = screen.getByRole('combobox');
        expect(select).toBeDisabled();
    });
});
