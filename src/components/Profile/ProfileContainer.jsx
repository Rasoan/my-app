import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile,
        startFetching,
        stopFetching} from "../../redux/profile-reducer";
                 
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.startFetching();
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then(response => {
           this.props.setUserProfile(response.data);
           this.props.stopFetching();
    });
  }
  render() {
    return (
            <Profile {...this.props} profile={this.props.profile} />
           );
  };
}

let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  }
)

export default connect(mapStateToProps,{
                                        setUserProfile,
                                        startFetching,
                                        stopFetching
                                       }
                                         )(ProfileContainer);
