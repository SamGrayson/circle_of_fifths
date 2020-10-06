import { Component } from 'react'
import Styles from '../styles/Circle.module.css'
import { Scale } from "@tonaljs/tonal";

class Circle extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedKey: null,
            active: null,
            prev: null,
            next: null,
            nextNext: null,
        }
        // This binding is necessary to make `this` work in the callback
        this.setKeyStates = this.setKeyStates.bind(this);
    }
    async setKeyStates(e) {
        // Set Active Key
        await this.setState(
            { 
                selectedKey: e.currentTarget.attributes['note-key'].value,
                active: e.currentTarget.attributes['note-key'].value,
                prev: e.currentTarget.attributes['prev-key'].value,
                next: e.currentTarget.attributes['next-key'].value,
                nextNext: e.currentTarget.attributes['next-next-key'].value 
            }
        )
        this.props.set_selected_key(this.state.selectedKey)
    }

    determine_class_order(key) {
        if (key === this.state.prev) {
            return `${Styles.key} ${Styles.prev}`
        }
        if (key === this.state.next) {
            return `${Styles.key} ${Styles.next}`
        }
        if (key === this.state.nextNext) {
            return `${Styles.key} ${Styles.nextNext}`
        }
        if (key === this.state.active) {
            return `${Styles.key} ${Styles.active}`
        }
        return Styles.key
    }

    render() {
        return (
            <div className={Styles.circle_wrap}>
                <ul className={Styles.circle_of_fifths}>
                    <li className={this.determine_class_order('C')} onClick={this.setKeyStates} note-key='C' prev-key='F' next-key='G' next-next-key='D'>
                        <div className={Styles.major}>c</div>
                        <div className={Styles.minor}>a</div>
                        <div className={Styles.sig}><span className={Styles.accidental}>&#x266e;</span></div>
                    </li>
                    <li className={this.determine_class_order('G')} onClick={this.setKeyStates} note-key='G' prev-key='C' next-key='D' next-next-key='A'>
                        <div className={Styles.major}>g</div>
                        <div className={Styles.minor}>e</div>
                        <div className={Styles.sig}>1<span className={Styles.accidental}>&#x266f;</span></div>
                    </li>
                    <li className={this.determine_class_order('D')} onClick={this.setKeyStates} note-key='D' prev-key='G' next-key='A' next-next-key='E'>
                        <div className={Styles.major}>d</div>
                        <div className={Styles.minor}>b</div>
                        <div className={Styles.sig}>2<span className={Styles.accidental}>&#x266f;</span></div>
                    </li>
                    <li className={this.determine_class_order('A')} onClick={this.setKeyStates} note-key='A' prev-key='D' next-key='E' next-next-key='B'>
                        <div className={Styles.major}>a</div>
                        <div className={Styles.minor}>f<span className={Styles.accidental}>&#x266f;</span></div>
                        <div className={Styles.sig}>3<span className={Styles.accidental}>&#x266f;</span></div>
                    </li>
                    <li className={this.determine_class_order('E')} onClick={this.setKeyStates} note-key='E' prev-key='A' next-key='B' next-next-key='Gb'>
                        <div className={Styles.major}>e</div>
                        <div className={Styles.minor}>c<span className={Styles.accidental}>&#x266f;</span></div>
                        <div className={Styles.sig}>4<span className={Styles.accidental}>&#x266f;</span></div>
                    </li>
                    <li className={this.determine_class_order('B')} onClick={this.setKeyStates} note-key='B' prev-key='E' next-key='Gb' next-next-key='Db'>
                        <div className={Styles.major}>b</div>
                        <div className={Styles.minor}>g<span className={Styles.accidental}>&#x266f;</span></div>
                        <div className={Styles.sig}>5<span className={Styles.accidental}>&#x266f;</span></div>
                    </li>
                    <li className={this.determine_class_order('Gb')} onClick={this.setKeyStates} note-key='Gb' prev-key='B' next-key='Db' next-next-key='Ab'>
                        <div className={Styles.major}>g<span className={Styles.accidental}>&#x266d;</span></div>
                        <div className={Styles.minor}>d<span className={Styles.accidental}>&#x266f;</span></div>
                        <div className={Styles.sig}>6<span className={Styles.accidental}>&#x266d;</span></div>
                    </li>
                    <li className={this.determine_class_order('Db')} onClick={this.setKeyStates} note-key='Db' prev-key='Gb' next-key='Ab' next-next-key='Eb'>
                        <div className={Styles.major}>d<span className={Styles.accidental}>&#x266d;</span></div>
                        <div className={Styles.minor}>b<span className={Styles.accidental}>&#x266d;</span></div>
                        <div className={Styles.sig}>5<span className={Styles.accidental}>&#x266d;</span></div>
                    </li>
                    <li className={this.determine_class_order('Ab')} onClick={this.setKeyStates} note-key='Ab' prev-key='Db' next-key='Eb' next-next-key='Bb'>
                        <div className={Styles.major}>a<span className={Styles.accidental}>&#x266d;</span></div>
                        <div className={Styles.minor}>f</div>
                        <div className={Styles.sig}>4<span className={Styles.accidental}>&#x266d;</span></div>
                    </li>
                    <li className={this.determine_class_order('Eb')} onClick={this.setKeyStates} note-key='Eb' prev-key='Ab' next-key='Bb' next-next-key='F'>
                        <div className={Styles.major}>e<span className={Styles.accidental}>&#x266d;</span></div>
                        <div className={Styles.minor}>c</div>
                        <div className={Styles.sig}>3<span className={Styles.accidental}>&#x266d;</span></div>
                    </li>
                    <li className={this.determine_class_order('Bb')} onClick={this.setKeyStates} note-key='Bb' prev-key='Eb' next-key='F' next-next-key='C'>
                        <div className={Styles.major}>b<span className={Styles.accidental}>&#x266d;</span></div>
                        <div className={Styles.minor}>g</div>
                        <div className={Styles.sig}>2<span className={Styles.accidental}>&#x266d;</span></div>
                    </li>
                    <li className={this.determine_class_order('F')} onClick={this.setKeyStates} note-key='F' prev-key='Bb' next-key='C' next-next-key='G'>
                        <div className={Styles.major}>f</div>
                        <div className={Styles.minor}>d</div>
                        <div className={Styles.sig}>1<span className={Styles.accidental}>&#x266d;</span></div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Circle