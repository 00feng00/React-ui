import React from 'react';
import styles from './style.css'
import pageRedux from '../pageRedux'
import {Link} from 'react-router-dom'

import {
    Toast,
    Button,
    Bubble,
    Calender,
    WinkBlank,
    UpdownBlank,
    Accordion,
    AddressInput
} from '../../component/dist/reactUI.min'

export class TestPacking extends React.Component {
    constructor(props) {
        super()
        this.state = {}
    }

    componentWillMount() {

    }

    async componentDidMount() {


    }


    render() {
        var self = this
        var accordionIndex = this.props.getStore("app.accordionIndex")
        return <div className={styles.home}>
            <WinkBlank>
                <UpdownBlank>
                    <Button
                        onClick={() => {
                            Toast.success("ok")
                        }}>test Toast
                    </Button>
                </UpdownBlank>

                <UpdownBlank>
                    <Bubble menus={() => {
                        return <Button
                            onClick={() => {
                                Toast.success("ok")
                            }}>test Toast
                        </Button>
                    }}>
                        <Button>test Bubble</Button>
                    </Bubble>
                </UpdownBlank>
                <UpdownBlank>
                    <Button
                        onClick={() => {
                            this.setState({Calender_visiable: true})
                        }}>test Calender
                    </Button>
                    <Calender visible={this.state.Calender_visiable}
                              type={"one"}
                              onConfirm={() => {
                                  this.setState({Calender_visiable: false})
                              }}
                    />
                </UpdownBlank>
                <UpdownBlank>
                    <Accordion title={"test 手风琴"}>
                        test<br/> 手风琴<br/> Accordion<br/>
                    </Accordion>
                </UpdownBlank>
                <UpdownBlank>
                    <AddressInput
                        onChange={(e) => {
                            this.setState({AddressInput: e})
                        }}
                    >地址选择:{this.state.AddressInput}</AddressInput>
                </UpdownBlank>
            </WinkBlank>


        </div>
    }
}

export default pageRedux(TestPacking)