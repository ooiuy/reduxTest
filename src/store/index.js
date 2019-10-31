import {createStore} from 'redux'
import {reducers} from './redusers'

export const store = createStore(reducers)