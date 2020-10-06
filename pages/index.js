import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Circle from './Circle'
import Card from './Card'
import { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  static async getInitialProps({req, query}) {
    let session = req && req.session ? req.session : null
    let url = req && req.headers && req.headers.host ? 'http://'+req.headers.host : window.location.origin
    const info = await axios({
        method: 'get',
        url: `${url}/api/scale`,
        credentials: 'same-origin',
        data: {'session':session}
    })
    return {
      scale_data: info.data,
    }
  }

  async get_key_info(key) {
    const info = await axios({
      method: 'post',
      data: {key: key},
      url: `/api/key`
    })
    this.setState({
      key_info: info.data || {}
    })
    console.log(this.state.key_info)
  }

  constructor(props) {
    super(props);
    this.state = {
      scale_data: this.props.scale_data,
      selected_key: null,
      pentatonic_mode: false,
      key_info: null
    }
  }

  set_selected_key = (key) => {
    console.log("KEY: ", key)
    // Set key
    this.setState({selected_key: key})
    // Get key info
    this.get_key_info(key)
  };

  set_pentatonic_mode = () => {
    const current_state = this.state.pentatonic_mode
    this.setState({pentatonic_mode: !current_state})
  }

  render() { 
    return(
      <div className={styles.container}>
        <Head>
          <title>CIRCLE OF FIFTHS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Circle of FIFTHS
          </h1>

          <div className={styles.directions}>
            <i>Select a note on the circle to see chords in a key.</i>
          </div>

          <div className={styles.grid}>
            <Card scale="MAJOR" selected_key={this.state.selected_key} key_info={this.state.key_info} scale_data={this.state.scale_data['major']} pentatonic_mode={this.state.pentatonic_mode}></Card>
            <Card scale="MINOR" selected_key={this.state.selected_key} key_info={this.state.key_info} scale_data={this.state.scale_data['minor']} pentatonic_mode={this.state.pentatonic_mode}></Card>
            <Circle set_selected_key={this.set_selected_key.bind(this)}></Circle>
          </div>

          <div>
            <h2>ALL MODES</h2>
          </div>
          <div className={styles.grid}>
            <Card scale="IONIAN" selected_key={this.state.selected_key} key_info={this.state.key_info} scale_data={this.state.scale_data['ionian']} pentatonic_mode={this.state.pentatonic_mode}></Card>
            <Card scale="DORIAN" selected_key={this.state.selected_key} key_info={this.state.key_info} scale_data={this.state.scale_data['dorian']} pentatonic_mode={this.state.pentatonic_mode}></Card>
            <Card scale="PHRYGIAN" selected_key={this.state.selected_key} key_info={this.state.key_info} scale_data={this.state.scale_data['phrygian']} pentatonic_mode={this.state.pentatonic_mode}></Card>
            <Card scale="LYDIAN" selected_key={this.state.selected_key} key_info={this.state.key_info} scale_data={this.state.scale_data['lydian']} pentatonic_mode={this.state.pentatonic_mode}></Card>
            <Card scale="MIXOLYDIAN" selected_key={this.state.selected_key} key_info={this.state.key_info} scale_data={this.state.scale_data['mixolydian']} pentatonic_mode={this.state.pentatonic_mode}></Card>
            <Card scale="AOELIAN" selected_key={this.state.selected_key} key_info={this.state.key_info} scale_data={this.state.scale_data['aoelian']} pentatonic_mode={this.state.pentatonic_mode}></Card>
            <Card scale="LOCRIAN" selected_key={this.state.selected_key} key_info={this.state.key_info} scale_data={this.state.scale_data['locrian']} pentatonic_mode={this.state.pentatonic_mode}></Card>
          </div>

          <div>
            <h2>More Settings</h2>
            <hr></hr>
            <a className={this.state.pentatonic_mode ? `btn_active` : `btn`} onClick={this.set_pentatonic_mode}>PENTATONIC MODE</a>
          </div>
        </main>

        <footer className={styles.footer}>
          <i>circle of fifths reference <a href="https://codepen.io/76sagor/pen/pNZbvg">codepen</a></i>
        </footer>
      </div>
    )
  }
}

export default Home