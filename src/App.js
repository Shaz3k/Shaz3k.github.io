import React from "react";
import * as THREE from "three";
import CLOUDS from "vanta/src/vanta.clouds.js";
import "./styles.css";
import {AnimatedText} from './AnimatedText.tsx';

class App extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = CLOUDS({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      speed: 0.20
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return (
      <div style={{ height: "100vh", width: "100%", top: "0", left: "0", bottom: "0", right: "0", overflow: "auto", position: "fixed", display: "grid", "align-content": "center", "alignItems": "start"}} ref={this.vantaRef}>
      <h1>Hi, I'm Shazil.</h1>
      <AnimatedText/>
      <h3>I'm currently working on this website. Stay tuned 😄</h3>

      <nav>
  
            <a aria-label="My LinkedIn Profile" target="_blank" href="https://www.linkedin.com/in/shazil-r/">
              <i class="glass icon fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a aria-label="My Github Profile" target="_blank" href="https://github.com/Shazil-r">
              <i class="glass icon fa fa-github-alt" aria-hidden="true"></i>
            </a>
            <a aria-label="My Résumé" target="_blank" href="Resume New.pdf">
              <i class="glass icon fa fa fa-file-pdf-o" aria-hidden="true"></i>
            </a>
            <a aria-label="Send Email" href="mailto:srazzaq@uwaterloo.ca" target="_blank"
              ><i class="glass icon fa fa-envelope"></i
            ></a>
  
  
      </nav>
    </div>
    );
  }
}

export default App;
