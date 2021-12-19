import {render ,screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Card from './Card'
import {Event} from '../../redux/slice/event.slice'

describe('Card component',()=>{
    it('renders without errors',()=>{
        const testData: Event ={
            name:'',
            date:'',
            id:'',
            imageSrc:'',
            description:'',
            address:'',
            category:[],
            seets:1
        }
       render(
            <Provider store={store}>
        <Card event={testData}/>
        </Provider>
    )})
        it('renders event title and date',()=>{
            const testData:Event={
                name:'gsdfd',
                date:'',
            id:'',
            imageSrc:'',
            description:'',
            address:'',
            category:[],
            seets:1
            }
        })
})