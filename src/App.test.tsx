import * as React from 'react';
import App from './App';
import { render } from '@testing-library/react';

describe('App', () => {
    test('matches snapshot', () => {
        expect(render(<App />)).toMatchSnapshot();
    })

    test('render and rerender', () => {
            const { getByText, rerender } = render(<App optionalText={'Demo'} />); 

            expect(getByText('Demo')).toBeDefined();

            rerender(<App optionalText={'Demo2'} />);

            expect(getByText('Demo2')).toBeDefined();


    })
});