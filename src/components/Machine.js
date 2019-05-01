import { Machine } from 'xstate';

const WeatherMachine = Machine({
    initial: 'search',
    states: {
        start:{
            on: {
                Search: 'loading'
            }
        },
        error:{
            on: {
                search: 'loading'
            }
        },
        display:{
            on:{
                success: 'display',
                failure: 'error'
            }
        }
    }
})

export default WeatherMachine;