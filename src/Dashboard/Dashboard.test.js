import { render, screen } from '@testing-library/react';
import {Dashboard} from './Dashboard';

test("Check tabs are well displayed",()=>{
    render(<Dashboard />)
    
    expect(screen.getByRole('tab', {name:/datasets/i})).toBeDefined()

    expect(screen.getByRole('tab', {name:/task reminder/i})).toBeDefined()



})