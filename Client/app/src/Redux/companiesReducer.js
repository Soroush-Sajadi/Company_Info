
  const initialState =  []

  export const companiesReducer = (state = initialState , action) => {
    switch(action.type) {
      case "COMPANIES_DATA": {
        return action.payload
      }
      default: 
        return state
    }
  }