import React from 'react';

import style from "./Dialogs.module.css";

import DialogLinkSection from "./DialogLink/DialogLinkSection";
import DialogSectionContainer from "./DialogSection/DialogSectionContainer";
import StoreContext from "../../StoreContext";

const Dialogs = (props) => {

    return (
        <section>

            <h2 className={style.title}>Dialogs</h2>

            <div className={style.holder}>

                <div className={style.left_side}>

                    <StoreContext.Consumer>
                        {
                            (store) => {
                                const state = store.getState();

                                return <DialogLinkSection dialogData={state.dialogsPage.dialogData}/>
                            }
                        }
                    </StoreContext.Consumer>

                </div>

                <div className={style.right_side}>

                    <DialogSectionContainer />

                </div>
            </div>

        </section>
    );
}

export default Dialogs;