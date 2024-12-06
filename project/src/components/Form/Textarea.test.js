import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Textarea from './Textarea';

describe('Textarea component', () => {
    it('test placeholder text', () => {
        render(<Textarea placeholder="Text"/>);
        const textarea = screen.getByPlaceholderText(/text/i);
        expect(textarea).toBeInTheDocument();
    });

    it('test value prop', () => {
        render(<Textarea value="value" onChange={() => {}}/>);
        const textarea = screen.getByDisplayValue(/value/i);
        expect(textarea).toBeInTheDocument();
    });

    it('test onChange', () => {
        const handleChange = jest.fn();
        render(<Textarea value="" onChange={handleChange}/>);
        const textarea = screen.getByRole('textbox');

        fireEvent.change(textarea, {target: {value: 'New text'}});
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.anything());
    });
});
