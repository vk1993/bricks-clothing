import { init } from '@rematch/core';
import models from '../model'

const store = init({
    models,
})

export default store