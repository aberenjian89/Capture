import merge from 'lodash/merge'
import {HOME_USER_FETCH_IMAGES} from '../actions/home_gallery'


const _initState = {
    home_gallery: null
}


const HomeUserGallery = (state=_initState,action)=>{
    Object.freeze(state)
    switch (action.type){
        case HOME_USER_FETCH_IMAGES:
            return merge({},state,{home_gallery: action.data})
        default:
            return state
    }
}

export default HomeUserGallery