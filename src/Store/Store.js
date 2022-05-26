import { createStore } from 'redux'




const reducer = (prevState={
    comminglist: [],
    showinglist: [],
    TabbarIsTrue: true
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
        default:
            return prevState
    }
}

const store = createStore(reducer)

export default store
