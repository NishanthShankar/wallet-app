export const request = (state) => state.merge({fetching: true, error: null})

export const success = (state) => state.merge({fetching: false, error: null})

export const successWithInfo = (key) => (state, action) =>
  state.merge({[key]: action[key], fetching: false, error: null})

export const successWithData = (state, action) => {
  return state.merge({data: action.data, fetching: false, error: null})
}

export const failure = (state, {error}) =>
  state.merge({fetching: false, error})
