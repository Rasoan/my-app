import React from "react";
import style from "../Users.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import PreloaderServerUpload from "../../Preloaders/PreloaderServerUpload";
import ButtonFollowUnfollow from "../../ButtonFollowUnfollow";
let classNames = require('classnames');

const UserItem = ({followed, follow, unfollow, isFetchingFollowOrUnfollowIdList, 
                   photo, name, defaultAvatarSrc, id, navlinkTo, isAuth,
                   startCommunication}) => {
  let buttonText = followed ? "Удалить из друзей": "Добавить в друзья";
  let styleButton =  classNames({ [style.deleteFriendButton]: followed }, { [style.addFriendButton]: !followed });
  let isFetching = isFetchingFollowOrUnfollowIdList.some(element => element === id) ? <PreloaderServerUpload /> : null;
  let avatarSrc = photo ? photo: defaultAvatarSrc;

  return (
            <div className={style.UserItemContainer}>
              <NavLink to={navlinkTo}>
                <img className={style.photo} src={avatarSrc} />
                <p className={style.name}>{name}</p>
              </NavLink>
              <div>
                <p>{""}</p>
                <p>{""}</p>
                {isFetching || isAuth &&  <ButtonFollowUnfollow follow={follow}
                                                                unfollow={unfollow}
                                                                friend={followed}
                                                                userId={id} />}
                <button onClick={() => startCommunication(id)}>Начать диалог</button>
              </div>
            </div>
          
          );
};

UserItem.propTypes = {
  followed: PropTypes.bool,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  isFetchingFollowOrUnfollowIdList: PropTypes.bool,
  photo: PropTypes.string,
  name: PropTypes.string,
  defaultAvatarSrc: PropTypes.string,
  id: PropTypes.number,
  navlinkTo: PropTypes.string,
  isAuth: PropTypes.bool,
  startCommunication: PropTypes.func,
}

export default UserItem;