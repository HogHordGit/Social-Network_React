import {connect} from "react-redux";
import FriendsSection from "./FriendsSection";
import FriendsItem from "./FriendsItem/FriendsItem";

const mapStateToProps = (state) => {

    const navFriends = state.navbarData.navFriends.map(item => <FriendsItem img={item.img} name={item.name} key={item.id}/>);

    return ({
        navFriends
    });
};

export const FriendsSectionContainer = connect(mapStateToProps)(FriendsSection);