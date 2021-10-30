import { Component } from 'react';

class SupportBlock extends Component {
  render() {
    return (
      <section className="generic-block faint reverse">
        <div className="mid">
          <div className="right">
            <h3>Help &amp; Support</h3>
            <p>
              Join a community of developers who are passionate about Fiber. Ask
              questions, share your creation, and have fun in our{' '}
              <strong>Discord server</strong>.
            </p>
          </div>
          <div className="left" style={{ textAlign: 'center' }}>
            <iframe
              src="https://discordapp.com/widget?id=704680098577514527&theme=dark"
              width="350"
              height="300"
              frameBorder="0"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default SupportBlock;
