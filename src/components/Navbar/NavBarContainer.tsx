import {AppRootStateType} from '../../state/reduxStore';
import {connect} from 'react-redux';
import {NavBar} from './NavBar';


export type NavBarPropsPage = {
    friendsData:Array<{ id: number, name: string , img: string }>
}




const mapStateToProps=(state:AppRootStateType)=>{
    return {
        friendsData:state.SiteBar.friendsData
    }
}


export const NavBarContainer=connect(mapStateToProps, {})(NavBar)
