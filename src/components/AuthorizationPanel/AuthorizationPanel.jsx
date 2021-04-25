import React from "react";
import PropTypes from "prop-types";
import style from "./AuthorizationPanel.module.scss";
import ButtonAuthorization from '../ButtonAuthorization';
import {SIGN_IN_IMG, SIGN_UP_IMG, LOG_OUT_IMG} from '../../constants/Authorization';

const AuthorizationPanel = (props) => {
  const {isAuth, authorizationInfo, logOut} = props;
    return (<div className={style.authorizationPanelWrapper}>
              {isAuth && <div className={style.authorizationPanelInfo}>
                <p className={style.infoText}>{"Айди: " + authorizationInfo.userId}</p>
                <p className={style.infoText}>{"Логин: " + authorizationInfo.login}</p>
                <p className={style.infoText}>{"Почта: " + authorizationInfo.email}</p>
              </div>}
              {isAuth && <div className={style.authorizationPanel}>
                <ButtonAuthorization text={"Выйти"}
                                     onClickF={logOut}
                                     srcImg={LOG_OUT_IMG}
                                     isAuth={isAuth} />
              </div>}
              {!isAuth && <div className={style.authorizationPanel}>
                <ButtonAuthorization text={"Войти"}
                                     srcImg={SIGN_IN_IMG}
                                     isAuth={isAuth} />
                <ButtonAuthorization text={"Зарегестрироваться"}
                                     srcImg={SIGN_UP_IMG}
                                     isAuth={isAuth} />
              </div>}
            </div>);
};

AuthorizationPanel.propTypes = {
  isAuth: PropTypes.bool.isRequired, 
  authorizationInfo: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
}

export default AuthorizationPanel;