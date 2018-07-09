export default Reducer

function Reducer (state, action) {
  const reducer = ({
    SET_VIEW,

  })[action.type]

  return (reducer && reducer(state, action)) || state
}

function SET_VIEW (state, action) {
  return { ...state, view: action.text }
}

