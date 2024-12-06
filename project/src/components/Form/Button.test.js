import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button component', () => {
    it('test children element', () => {
        render(<Button text="Click"/>);
        const button = screen.getByRole('button', {name: /click/i});
        expect(button).toBeInTheDocument();
    });

    it('test onClick', () => {
        const handleClick = jest.fn();
        render(<Button text="Click" onClick={handleClick}/>);
        const button = screen.getByRole('button', {name: /click/i});
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('test disabled', () => {
        render(<Button text="Click" disabled={true}/>);
        const button = screen.getByRole('button', {name: /click/i});
        expect(button).toBeDisabled();
    });
});
