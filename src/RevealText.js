import React, { Component } from 'react';
import './Reveal.css';

class RevealText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ revealed: true });
    }, 2000); // Adjust the delay as needed
    this.setState({ revealed: false });
  }

  render() {
    const { text } = this.props;
    const { revealed } = this.state;

    return (
      <div className="reveal-container">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`reveal-char ${revealed ? 'revealed' : ''}`}
            style={{ transitionDelay: `${index * 0.05}s` }} // Adjust the delay increment as needed
          >
            {char}
          </span>
        ))}
      </div>
    );
  }
}

export default RevealText;
