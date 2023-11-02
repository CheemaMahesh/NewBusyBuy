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
                    <div className={styles.dRight}>
                        <div className={styles.rightT}>
                                CODE:
                        </div>
                        <div className={styles.rightB}>
                                BUSYBUY400
                        </div>
                    </div>
                </div>
                <div className={styles.festivalDiv}>
                    <div className={styles.LeftW}>
                    </div>
                    <div className={styles.saleDiv}>
                        <div className={styles.saleDivT}>
                                    India's Biggest<br/>
                                    Diwali Dhamaka
                        </div>
                        <div className={styles.saleDivB}>
                                    50-90% OFF
                        </div>

                    </div>
                    <div className={styles.RightM}>
                    </div>
                </div>
        </div>
    )
}