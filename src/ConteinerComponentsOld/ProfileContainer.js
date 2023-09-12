import StoreContext from "../StoreContext";
import {addProfileActionCreator, updateProfileActionCreator} from "../redux/reducers/profile-reducer";
import PostSection from "../components/Profile/PostSection/PostSection";

const PostSectionContainer = (props) => {

    return (

        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    const postButtonEvent = () => {
                        store.dispatch(addProfileActionCreator());
                    };

                    const onPostChange = (text) => {
                        store.dispatch(updateProfileActionCreator(text));
                    };

                    return <PostSection updateNewPostText={onPostChange}
                                        addPost={postButtonEvent}
                                        postsData={state.profilePage.postsData}
                                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>

    )
};