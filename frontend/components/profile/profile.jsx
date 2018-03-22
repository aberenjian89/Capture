import React from  'react'
import {Link} from 'react-router-dom'
import Discover from './discover'
import Gallery from './gallery'
import Settings from './settings';


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {display: <Gallery CurrentUser={this.props.CurrentUser}/>,
                      UserImgs: ""};
        this.logout = this.logout.bind(this);
        this.switch = this.switch.bind(this);
    }


    componentWillMount(){

        if (Object.keys(this.props.UserImgs).length <= 0){
            this.props.FetchUserImgs(this.props.CurrentUser.id)
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({UserImgs: nextProps.UserImgs})
    }





    logout(){
        debugger;
        return this.props.Logout()
            .then(() => this.props.history.push("/"))
    }

    switch(name){
        if (name === "discover"){
           return () => this.setState({display: <Discover/>})
        }else if (name === "gallery"){
           return () => this.setState({display: <Gallery  CurrentUser={this.props.CurrentUser} UserImgs={this.props.UserImgs}/>})
        }else if (name === "profile"){
           return () => this.setState({display: <Settings CurrentUser={this.props.CurrentUser}/>})
        }
    }




    render(){
        return (
            <div className="profile-container">
                <div className="nav-profile">
                    <div className="logo">
                        <span><Link to="/">PEXCEL</Link></span>
                    </div>
                    <div className="link-container">
                        <ul>
                            <li><span onClick={this.switch("discover")}>Discover</span></li>
                            <li><span onClick={this.switch("gallery")}>Gallery</span></li>
                            <li><span onClick={this.switch("upload")}>Upload</span></li>
                            <li><span onClick={this.switch("profile")}>Profile</span></li>
                            <li onClick={this.logout}><span>Logout</span></li>
                        </ul>
                    </div>
                </div>
                {this.state.display}
            </div>
        )
    }
}






export default Profile;