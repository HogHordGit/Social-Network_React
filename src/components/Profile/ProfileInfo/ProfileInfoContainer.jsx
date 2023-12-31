import "./ProfileInfo.module.css";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";

const mapStateToProps = (state) => {
    return {
        info: state.profilePage.userData
    };
};

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;