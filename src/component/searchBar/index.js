import React from 'react'
import styles from './style.css'
import {Link} from 'react-router-dom'
import Drawing from "../drawing";
import MyIconImage from "../MyIconImage";

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            visible: false,
            isFocus: false,
            value: ""
        }
    }

    render() {
        var self = this
        return <div className={styles.searchBar} style={{...this.props.myStyle}}>
            <MyIconImage
                myStyle={{width: 20, height: 20}}
                image={"https://f.cangg.cn:82/data/20190171451284578.png"}></MyIconImage>
            <input type="text" className={styles.input}
                   value={this.state.value}
                   onFocus={() => {
                       this.setState({
                           isFocus: true
                       })
                   }}
                   onChange={(e) => {
                       this.setState({
                           value: e.target.value
                       })
                   }}
                   onBlur={() => {
                       this.setState({
                           isFocus: false
                       })
                   }}
                   placeholder={"搜索"}
            />
            {
                this.state.value && <MyIconImage
                    onClick={() => {
                        this.setState({value: ""})
                    }}
                    myStyle={{width: 20, height: 20}}
                    image={"https://f.cangg.cn:82/data/20190171451357187.png"}></MyIconImage>
            }
        </div>
    }
}

export default SearchBar