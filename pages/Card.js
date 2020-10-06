const { Component } = require("react");
import styles from '../styles/Card.module.css';
import axios from 'axios';

const romannum = ['-', 'I', 'ii', 'iii', 'IV', 'VI', 'vi', 'vii0'];

class Card extends Component {
    constructor(props) {
        super(props)
    }

    get_roman_num(order_num) {
        return romannum[order_num]
    }

    get_circle_order() {
        let order = this.props.scale_data.order
        if (this.props.pentatonic_mode && this.props.scale_data.pent_order) {
            order=this.props.scale_data.pent_order
        }
        return order.map((value, index) => {
            return <div key={index} className={`${styles[`circle_${value}`]} ${styles.small_circle}`}>{this.get_roman_num(value)}</div>
        })
    }

    set_key_info(key_info) {
        let order = this.props.scale_data.order
        if (this.props.pentatonic_mode && this.props.scale_data.pent_order) {
            order=this.props.scale_data.pent_order
        }
        let selected_key = this.props.selected_key
        if (this.props.scale_data.mode === 'aoelian') {
            selected_key = this.props.key_info[5] // Minor is the 6ths interval
        }
        return (
            <div className={styles.selection}>
                <hr></hr>
                <h4>Selected Key: {selected_key} {this.props.scale_data.parent_mode}</h4>
                <div>{ order.map((o, index)=> {
                    return <div key={index} className={`${styles[`circle_${o}`]} ${styles.small_circle}`}>{this.adjust_note(o)}</div>
                })}</div>
            </div>
        )
    }

    adjust_note(order) {
        // ['-', 'I', 'ii', 'iii', 'IV', 'VI', 'vi', 'vii0']
        const num = romannum[order]
        if (num === '-')
            return '-'
        if (num.indexOf(0) > -1) {
            return this.props.key_info[order - 1] + 'dim'
        }
        if (num == num.toUpperCase()) {
            return this.props.key_info[order - 1] + 'M'
        }
        if (num == num.toLowerCase()) {
            return this.props.key_info[order - 1].toLowerCase() + 'm'
        }
    }

    render() {
        return (
        <div className={this.props.scale_data.pentatonic_mode && this.props.scale_data.pent_order ? styles.card :`${styles.card} ${styles.invalid}`}>
            <h3>{this.props.scale}</h3>
            {this.props.scale_data.mode ? <i><small>{this.props.scale_data.mode}</small></i> : ''}
            <div><small><i>{this.props.scale_data.steps}</i></small></div>
            {this.get_circle_order()}
            {this.props.key_info ? this.set_key_info(this.props.key_info) : ''}
        </div>
      )
    }
}

export async function getStaticProps(context) {
    const info = await axios.post(`/api/scale`, {scale: scale})
    return {
        mode: info.data.mode || '-',
        order: info.data.order,
        pent_order: info.data.pent_order || null,
        steps: info.data.steps || '-'
    }
}

export default Card