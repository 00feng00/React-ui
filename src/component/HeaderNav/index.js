import styles from './style.css'
import {getHistory} from "../../util/uitls";

const HeaderNav = (props) => {
    var clickBack = props.clickBack
    return <div className={styles.header} style={{position: "fixed", ...props.myStyle}}>
        {
            getHistory().length != 0 && <div className={styles.gobakc}
                                             onClick={() => {
                                                 if (clickBack) {
                                                     clickBack()
                                                 } else {
                                                     if (getHistory().length == 0) {
                                                         location.href = "/"
                                                     } else {
                                                         getHistory().goBack()
                                                     }
                                                 }
                                             }}
            >
                返回
            </div>
        }
        <div className={styles.name}>{props.title}</div>


    </div>
}
HeaderNav.defaultProps = {
    myStyle: {}
}
export default HeaderNav