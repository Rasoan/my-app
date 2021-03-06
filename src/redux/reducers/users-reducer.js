import {DEFAULT_AVATAR_SRC} from "../../constants/Users";

import {FOLLOW,
UNFOLLOW,
SET_USERS,
SET_TOTAL_USERS_COUNT,
TOGGLE_IS_FETCHING,
IS_FETCHING_FOLLOW_OR_UNFOLLOW_START,
IS_FETCHING_FOLLOW_OR_UNFOLLOW_END,
FETCHING_GET_USERS_CARDS_START,
FETCHING_GET_USERS_CARDS_END,
FETCHING_GET_USERS_COUNT_START,
FETCHING_GET_USERS_COUNT_END} from '../actions/types/action-types';

let initialState = {
    users: [],
    defaultAvatarSrc: DEFAULT_AVATAR_SRC,
    pagesSize: 5,
    totalUsersCount: 0,
    isFetchingFollowOrUnfollowIdList: [],
    isFetchingGetUsersCards: false,
    isFetchingGetUsersCount: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        u.followed = true;
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        u.followed = false;
                    }
                    return u;
                }),
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_IS_FETCHING:
            if (action.isFetching) {
                return {
                    ...state,
                    isFetching: true,
                }
            } else {
                return {
                    ...state,
                    isFetching: false,
                }
            }
        case FETCHING_GET_USERS_COUNT_START: {
            return {
                ...state,
                isFetchingGetUsersCount: true,
            }
        }
        case FETCHING_GET_USERS_COUNT_END: {
            return {
                ...state,
                isFetchingGetUsersCount: false,
            }
        }
        case FETCHING_GET_USERS_CARDS_START: {
            return {
                ...state,
                isFetchingGetUsersCards: true,
            }
        }
        case FETCHING_GET_USERS_CARDS_END: {
            return {
                ...state,
                isFetchingGetUsersCards: false,
            }
        }
        case IS_FETCHING_FOLLOW_OR_UNFOLLOW_START:
            return {
                ...state,
                isFetchingFollowOrUnfollowIdList: [...state.isFetchingFollowOrUnfollowIdList, action.id],
            }
        case IS_FETCHING_FOLLOW_OR_UNFOLLOW_END:
            let isFetchingFollowOrUnfollowIdList = state.isFetchingFollowOrUnfollowIdList.filter(id => id !== action.id);
            return {
                ...state,
                isFetchingFollowOrUnfollowIdList,
            }
        default:
            return state;
    }
}
export default usersReducer;