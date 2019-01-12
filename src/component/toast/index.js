import styles from './style.css'
import {getHeight, getWidth} from "../../util/uitls";
import ReactDOMServer from 'react-dom/server'


var self = this

function MyToast() {
    this.dom = null
    return this
}

MyToast.prototype.success = (str, _options) => {

    var options = {
        timeout: 1000,
        height: 80,
        width: 120,
        ..._options,
    }
    var dom = document.querySelector("#myToast")
    if (!dom) {
        dom = document.createElement("div")
        dom.setAttribute("id", "myToast")
    }

    dom.style.position = "absolute"
    var left = getWidth() / 2 - options.width / 2
    var top = getHeight() / 2 - options.height / 2
    dom.style.top = top
    dom.style.left = left

    dom.innerHTML = ReactDOMServer.renderToStaticMarkup(<div className={styles.toast}
                                                             style={{
                                                                 width: options.width,
                                                                 minHeight: options.height
                                                             }}
    >
        <div>
            <img className={styles.image} src={"https://f.cangg.cn:82/data/20190171813157475.png"}></img>
        </div>
        <div className={styles.text}>
            {str}
        </div>
    </div>)
    document.body.appendChild(dom)
    MyToast.dom = dom

    setTimeout(() => {
        self.clear()
    }, options.timeout)
}

MyToast.prototype.fail = (str, _options) => {

    var options = {
        timeout: 1000,
        height: 80,
        width: 120,
        ..._options,
    }
    var dom = document.querySelector("#myToast")
    if (!dom) {
        dom = document.createElement("div")
        dom.setAttribute("id", "myToast")
    }

    dom.style.position = "absolute"
    var left = getWidth() / 2 - options.width / 2
    var top = getHeight() / 2 - options.height / 2
    dom.style.top = top
    dom.style.left = left

    dom.innerHTML = ReactDOMServer.renderToStaticMarkup(<div className={styles.toast}
                                                             style={{
                                                                 width: options.width,
                                                                 minHeight: options.height
                                                             }}
    >
        <div>
            <img className={styles.image} src={"https://f.cangg.cn:82/data/20190171814245147.png"}></img>
        </div>
        <div className={styles.text}>
            {str}
        </div>
    </div>)
    document.body.appendChild(dom)
    MyToast.dom = dom

    setTimeout(() => {
        self.clear()
    }, options.timeout)
}

MyToast.prototype.loading = (str, _options) => {

    var options = {
        timeout: 1000,
        height: 80,
        width: 120,
        ..._options,
    }
    var dom = document.querySelector("#myToast")
    if (!dom) {
        dom = document.createElement("div")
        dom.setAttribute("id", "myToast")
    }

    dom.style.position = "absolute"
    var left = getWidth() / 2 - options.width / 2
    var top = getHeight() / 2 - options.height / 2
    dom.style.top = top
    dom.style.left = left

    dom.innerHTML = ReactDOMServer.renderToStaticMarkup(<div className={styles.toast}
                                                             style={{
                                                                 width: options.width,
                                                                 minHeight: options.height
                                                             }}
    >
        <div className={styles.mark}></div>
        <div>
            <img className={`${styles.image} ${styles.loadinfgImage}`}
                 src={"https://f.cangg.cn:82/data/20190171814024157.png"}></img>
        </div>
        <div className={styles.text}>
            {str}
        </div>
    </div>)
    document.body.appendChild(dom)
    MyToast.dom = dom


}


MyToast.prototype.clear = (str) => {
    MyToast.dom && MyToast.dom.remove()
}
export default (() => {
    self = new MyToast
    return self
})()
