import { init } from '@rematch/core';
import {signin} from './signin.model'


const store = init({
    signin,
})

export default store