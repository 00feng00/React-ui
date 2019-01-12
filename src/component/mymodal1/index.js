import PropTypes from 'prop-types';
import {getHeight, getWidth} from "../../util/uitls";
import {Spring, Transition} from 'react-spring'
import {TimingAnimation, Easing} from 'react-spring/dist/addons'


var ReactDOMServer = require('react-dom/server');

var self = this

const duration = 300;

const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: {opacity: 0,},
    entered: {opacity: 1,},
};
import cssstyles from './style.css'

export class MyModal extends React.Component {
    constructor(props) {
        super()
        this.state = {
            visiable: props.visiable
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.visiable != this.props.visiable) {
    //         this.setState({
    //             visiable: nextProps.visiable
    //         })
    //     }
    //
    // }

    render() {
        var self = this
        var top = this.props.top;

        var height = this.props.height
        var width = this.props.width
        var top = getHeight() / 2 - height / 2;
        var left = window.innerWidth / 2 - width / 2;

        return <Transition
            impl={TimingAnimation}
            config={{duration: 300}}
            from={{opacity: 0, transform: " translateY(500px)"}}
            enter={{opacity: 1, transform: " translateY(0px)", top, left}}
            leave={{opacity: 0, transform: " translateY(500px)",}}
        >
            {
                this.props.visiable &&
                ((styles) => {
                    return <div className={cssstyles.mymodal}>
                        {
                            self.props.mark && <div className={cssstyles.mark} onClick={() => {
                                setTimeout(() => {
                                    self.props.onClose()
                                }, 300)
                                self.setState({visiable: false})
                            }
                            }></div>
                        }
                        <div className={cssstyles.bodyContent}
                             style={{
                                 ...styles,
                             }}
                        >
                            <div className={cssstyles.main}
                                 style={{
                                     minHeight: height,
                                     width: width,
                                 }}
                            >
                                {this.props.children}
                            </div>

                            {
                                this.props.footer && <div className={cssstyles.footer}>
                                    <div className={`${cssstyles.btn} ${cssstyles.mainBtn}`}
                                         onClick={() => {
                                             self.props.onClose()
                                         }}
                                    >确定
                                    </div>
                                    <div className={`${cssstyles.btn} ${cssstyles.cancelBtn}`}
                                         onClick={() => {
                                             self.props.onClose()
                                         }}
                                    >取消
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                })
            }
        </Transition>
        /*  if (this.state.visiable) {

          } else {
              return <div></div>
          }*/

    }
}

MyModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}
MyModal.defaultProps = {
    mark: true,
    visiable: false,
    height: 100,
    width: getWidth() / 2,
    footer: true,
    bottom: false,
    top: false,
}

export default MyModal

