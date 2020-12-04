import * as React from 'react';
import {FancyDiv} from './FancyDiv';
import { render } from '@testing-library/react';

describe('FancyDiv', () => {
    test('matches snapshot', () => {
        expect(render(<FancyDiv text={'Fancy'} />)).toMatchSnapshot();
    })

    test('render and rerender', () => {
            const { getByText, rerender } = render(<FancyDiv text={'Demo'} />); 

            expect(getByText('Demo')).toBeDefined();

            rerender(<FancyDiv text={'Demo2'} />);

            expect(getByText('Demo2')).toBeDefined();


    })
});
