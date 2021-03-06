import {authAPI, profileAPI, securityAPI} from "../api/api";
import {DEFAULT_USER_ID} from "../constants/Authorization";
import {setUserDataAC, getCaptchaAC, setPhotosAuthUserAC} from '../redux/actions/creators/auth-creator';
import {openMainControlPanel,
    openQuestPageControlPanel,
    openOwnerPageControlPanel} from "./app";

export const authMe = () => {
    return async (dispatch) => {
        const response = await authAPI.getAuthMe();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            let action = setUserDataAC(String(id), email, login, true);
            dispatch(action);
            const responseProfile = await profileAPI.getProfile(id );
            if (responseProfile.status === 200) {
                action = setPhotosAuthUserAC(responseProfile.data.photos);
                dispatch(action);
            }
            openMainControlPanel(dispatch, true);
        }

        if (response.data.resultCode === 2) {
            let action = setUserDataAC(String(DEFAULT_USER_ID));
            dispatch(action);
        }

        return response.data;
    }
}

export const signIn = (email, password, rememberMe = null, captcha) => {
    return async (dispatch) => {
        const response = await authAPI.signIn(email, password,
            rememberMe, captcha);
        if (response.data.resultCode === 0) {
            authMe()(dispatch);
        }
        else {
            const responseCaptcha = await securityAPI.getCaptchaUrl();
            const action = getCaptchaAC(responseCaptcha.data.url);
            dispatch(action);
        }
        return response;
    }
}

export const signUp = () => {
    return (dispatch) => {
    }
}

export const logOut = () => {
    return async (dispatch, getState) => {
        let response = await authAPI.logOut();
        if (response.data.resultCode === 0) {
            let action = setUserDataAC(DEFAULT_USER_ID);
            dispatch(action);
            action = setPhotosAuthUserAC({small: null, large: null});
            dispatch(action);
            openMainControlPanel(dispatch, false);
            openOwnerPageControlPanel(dispatch, false);
            openQuestPageControlPanel(dispatch, false);
        }
        return response;
    }
}