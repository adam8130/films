import { createStore } from 'redux'




const reducer = (prevState={
    comminglist: [],
    showinglist: [],
    TabbarIsTrue: true,
    cityId: 440300,
}, action={})=>{
    let newState = {...prevState}
    switch(action.type){
        case 'comminglist':
            newState.comminglist = action.payload
            return newState
        case 'showinglist':
            newState.showinglist = action.payload
            return newState
        case 'TabbarIsTrue':
            newState.TabbarIsTrue = action.value
            return newState
        case 'city':
            console.log(action.value);
            newState.cityId = action.value
            newState.showinglist = []
            newState.comminglist = []
            return newState
        default:
            return prevState
    }
}

const store = createStore(reducer)

export default store
