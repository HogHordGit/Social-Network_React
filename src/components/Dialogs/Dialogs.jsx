import React from 'react';

import style from "./Dialogs.module.css";

import DialogSectionContainer from "./DialogSection/DialogSectionContainer";
import DialogLinkSectionContainer from "./DialogLink/DialogLinkSectionContainer";

const Dialogs = (props) => {

    return (
        <section>

            <h2 className={style.title}>Dialogs</h2>

            <div className={style.holder}>

                <div className={style.left_side}>

                    <DialogLinkSectionContainer />

                </div>

                <div className={style.right_side}>

                    <DialogSectionContainer />

                </div>
            </div>

        </section>
    );
}

export default Dialogs;