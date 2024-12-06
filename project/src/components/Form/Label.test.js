import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Label from './Label';

describe('Label component', () => {
    it('test children element', () => {
        render(<Label text="Test Label"/>);
        const label = screen.getByText(/test label/i);
        expect(label).toBeInTheDocument();
    });
});
