import React from 'react';

import style from "./Dialogs.module.css";

import DialogLinkSection from "./DialogLink/DialogLinkSection";
import DialogSectionContainer from "./DialogSection/DialogSectionContainer";

const Dialogs = (props) => {

    const state = props.store.getState();

    return (
        <section>

            <h2 className={style.title}>Dialogs</h2>

            <div className={style.holder}>

                <div className={style.left_side}>

                    <DialogLinkSection dialogData={state.dialogsPage.dialogData}/>

                </div>

                <div className={style.right_side}>

                    <DialogSectionContainer store={state}
                                            dispatch={props.store.dispatch}/>

                </div>
            </div>

        </section>
    );
}

export default Dialogs;