import React, {useEffect} from "react";
import PropTypes from "prop-types";
import UsersList from "./UsersList";
import {connect} from "react-redux";
import {
    unfollow, follow, getCountUsers, getUsersCardsSC
} from '../../../middlewares/users';
import {getUsers, getPagesSize, getTotalUsersCount, 
        getIsFetchingFollowOrUnfollowIdList,
        getIsAuth, getDefaultAvatarSrc, getIsFetchingGetUsersCards, getIsFetchingGetUsersCount} from "../../../selectors/users-selectors";
import {startCommunication} from "../../../middlewares/dialogs";



const UsersListContainer = (props) => {
  const {pagesSize, totalUsersCount, users,
         isFetchingFollowOrUnfollowIdList, follow,
         unfollow, defaultAvatarSrc, isAuth, startCommunication,
      isFetchingGetUsersCards, isFetchingGetUsersCount,
      getUsersCardsSC} = props;



    return (<UsersList totalUsersCount={totalUsersCount}
                       pagesSize={pagesSize}
                       users={users}
                       isFetchingFollowOrUnfollowIdList={isFetchingFollowOrUnfollowIdList}
                       getUsersCardsSC={getUsersCardsSC}
                       isFetchingGetUsersCount={isFetchingGetUsersCount}
                       isFetchingGetUsersCards={isFetchingGetUsersCards}
                       follow={follow} 
                       unfollow={unfollow} 
                       defaultAvatarSrc={defaultAvatarSrc}
                       isAuth={isAuth}
                       startCommunication={startCommunication} />); 
}

UsersListContainer.propTypes = {
  currentPage: PropTypes.number,
  pagesSize: PropTypes.number,
  totalUsersCount: PropTypes.number,
  users: PropTypes.array,
  isFetchingFollowOrUnfollowIdList: PropTypes.array,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  defaultAvatarSrc: PropTypes.string,
  isAuth: PropTypes.bool,
  startCommunication: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
          users: getUsers(state),
          pagesSize: getPagesSize(state),
          totalUsersCount: getTotalUsersCount(state),
          isFetchingFollowOrUnfollowIdList: getIsFetchingFollowOrUnfollowIdList(state),
          isFetchingGetUsersCards: getIsFetchingGetUsersCards(state),
          isFetchingGetUsersCount: getIsFetchingGetUsersCount(state),
          isAuth: getIsAuth(state),
          defaultAvatarSrc: getDefaultAvatarSrc(state),
         }
}

const actionCreators = {
  follow,
  unfollow,
  startCommunication,
    getCountUsers,
    getUsersCardsSC
}

export default connect(mapStateToProps, actionCreators)(UsersListContainer);