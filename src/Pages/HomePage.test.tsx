import {beforeEach, describe, it} from 'vitest';
import {render, screen }from '@testing-library/react';

import { HomePage } from './HomePage';

beforeEach(()=>render(<HomePage/>))
describe('HomPage component' , ()=>{
    it ('should have a heading with the text MovieFlix', ()=>{
        // render(<HomePage/>);
        screen.getByRole('heading' , {name: 'MovieFlix'})
    })
})