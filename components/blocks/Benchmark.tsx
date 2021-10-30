import { Component } from 'react';

class Benchmark extends Component {
  render() {
    return (
      <section className="generic-block" style={{ textAlign: 'center' }}>
        <div className="mid">
          <div className="block-content">
            <h3>Extreme Performance</h3>
            <p>
              Since Fiber is built on top of Fasthttp, your apps will enjoy
              unmatching performance! Don't believe us? Here's a benchmark that
              proves how Fiber shines compared to other frameworks:
            </p>
            <img
              src="/assets/images/benchmark-pipeline.png"
              alt="Benchmark graph"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Benchmark;
