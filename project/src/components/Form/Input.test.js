import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input component', () => {
    it('test placeholder text', () => {
        render(<Input placeholder="Test placeholder"/>);
        const input = screen.getByPlaceholderText(/test placeholder/i);
        expect(input).toBeInTheDocument();
    });

    it('test value prop', () => {
        render(<Input value="test value" onChange={() => {}}/>);
        const input = screen.getByDisplayValue(/test value/i);
        expect(input).toBeInTheDocument();
    });

    it('test onChange', () => {
        const handleChange = jest.fn();
        render(<Input value="" onChange={handleChange}/>);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'New value'}});
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
