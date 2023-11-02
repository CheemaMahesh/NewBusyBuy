import React from "react";
import styles from "../Styles/Home.module.css"


export default function Home(){
    return(
        <div className={styles.Home}>
                <div className={styles.discountDiv}>
                    <div className={styles.dLeft}>
                            <div className={styles.dLeftT}>FLAT &#8377;400 OFF</div>
                            <div className={styles.dLeftb}> ON YOUR FIRST ORDER +FREE SHIPPING*</div>
                    </div>
                    <div className={styles.dRight}></div>
                </div>
        </div>
    )
}