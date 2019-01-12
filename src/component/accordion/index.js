import {useState, useEffect} from 'react';
import styles from './style.css'
import MyIconImage from "../MyIconImage";
import Text from "../Text";


import {Spring, Transition} from 'react-spring'
import {TimingAnimation, Easing} from 'react-spring/dist/addons'

const duration = 300;

const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
}


const transitionStyles = {
    entering: {opacity: 0,},
    entered: {opacity: 1,},
};


const Accordion = (props) => {
    var [open, setOpen] = useState(props.isOpen)
    return <div className={styles.Accordion} {...props}>
        <div className={styles.title}
             style={{borderBottom: open ? "none" : '1px solid #eee'}}
             onClick={() => {
                 props.onSelect()
                 setOpen(!open)
             }}>
            <Text className={styles.text}>
                {props.title}
            </Text>
            <MyIconImage
                myStyle={{width: 18, height: 18, transition: "all .2s ease", transform: `rotate(${open ? 180 : 0}deg)`}}
                image={"https://f.cangg.cn:82/data/20190181645525774.png"}/>
        </div>
        <div className={styles.wrapperChildren}>
            <Transition
                impl={TimingAnimation}
                config={{duration: 100}}
                from={{opacity: 0, transform: " translateY(-500px)"}}
                enter={{opacity: 1, transform: " translateY(0px)",}}
                leave={{opacity: 0, transform: " translateY(-500px)",}}
            >
                {open && ((styles) => {
                    return <div style={{...styles}}>
                        {props.children}
                    </div>
                })}
            </Transition>

        </div>


    </div>
}
Accordion.defaultProps = {
    title: "",
    isOpen: false,
    onSelect() {
    }
}
export default Accordion