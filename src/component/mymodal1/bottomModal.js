import PropTypes from 'prop-types';
import {getHeight, getWidth} from "../../util/uitls";
import {Spring, Transition} from 'react-spring'
import {TimingAnimation, Easing} from 'react-spring/dist/addons'


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

export class BottomModal extends React.Component {
    constructor(props) {
        super()
        this.state = {
            visiable: props.visible
        }
    }


    render() {
        var self = this
        var height = this.props.height
        var width = this.props.width
        var bottom = 0;
        var left = window.innerWidth / 2 - width / 2;
        return <Transition
            impl={TimingAnimation}
            config={{duration: 300}}
            from={{opacity: 0, transform: " translateY(500px)"}}
            enter={{opacity: 1, transform: " translateY(0px)", bottom, left}}
            leave={{opacity: 0, transform: " translateY(500px)",}}
        >
            {
                this.props.visiable &&
                ((styles) => {
                    return <div className={cssstyles.mymodal}>
                        {
                            self.props.mark && <div className={cssstyles.mark} onClick={() => {
                                self.setState({visiable: false})
                                self.props.onClose()
                            }
                            }></div>
                        }
                        <div className={cssstyles.bodyContent}
                             style={{
                                 ...styles,
                             }}
                        >
                            {
                                this.props.footer && <div className={cssstyles.footer}>
                                    <div className={`${cssstyles.btn} ${cssstyles.mainBtn}`}
                                         onClick={() => {
                                             self.props.onOk && self.props.onOk()
                                             self.props.onClose()
                                         }}
                                    >确定
                                    </div>
                                    <div className={`${cssstyles.btn} ${cssstyles.cancelBtn}`}
                                         onClick={() => {
                                             self.props.onCancel && self.props.onCancel()
                                             self.props.onClose()
                                         }}
                                    >取消
                                    </div>
                                </div>
                            }

                            <div className={cssstyles.main}
                                 style={{
                                     minHeight: height,
                                     width: width,
                                 }}
                            >
                                {this.props.children}
                            </div>


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

BottomModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}
BottomModal.defaultProps = {
    mark: true,
    visiable: false,
    height: 100,
    width: getWidth() / 2,
    footer: true,
    bottom: false,
    top: false,
}

export default BottomModal

