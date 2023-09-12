import "./PostSection.module.css";
import PostSection from "./PostSection";
import {
    addProfileActionCreator,
    updateProfileActionCreator
} from "../../../redux/reducers/profile-reducer";
import {connect} from "react-redux";
import PostExample from "../PostExample/PostExample";


const mapStateToProps = (state) => {

    const postElements = state.profilePage.postsData
        .map(post => <PostExample message={post.text} numLike={post.likes} numDislike={post.dislikes} key={post.id}/>);

    return {
        newPostText: state.profilePage.newPostText,
        postElements
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateProfileActionCreator(text));
        },
        addPost: () => {
            dispatch(addProfileActionCreator());
        }
    };
};

const PostSectionContainer = connect(mapStateToProps, mapDispatchToProps)(PostSection);

export default PostSectionContainer;