import {render ,screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'

import Grid from './Grid'

describe('Grid component',()=>{
    it('renders without errors',()=>{
       render(
        <Provider store={store}>
            <Grid />
        </Provider>
    )})

})