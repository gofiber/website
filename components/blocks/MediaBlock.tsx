import styles from './MediaBlock.module.scss';
import { Component } from 'react';
import { MediaLinkItem } from '../../typings';
import MediaLink from '../media-link/MediaLink';

class MediaBlock extends Component {
  private readonly items: MediaLinkItem[] = [
    {
      url: "https://tutorialedge.net/golang/basic-rest-api-go-fiber/",
      website: "tutorialedge.net",
      title: "Building a Basic REST API in Go using Fiber",
      author: "Elliot Forbes",
      date: "April 23, 2020"
    },
    {
      url:
        "https://dev.to/jozsefsallai/creating-fast-apis-in-go-using-fiber-59m9",
      website: "dev.to",
      title: "Creating Fast APIs In Go Using Fiber",
      author: "József Sallai",
      date: "April 7, 2020"
    },
    {
      url:
        "https://dev.to/koddr/are-sure-what-your-lovely-web-framework-running-so-fast-2jl1",
      website: "dev.to",
      title: "Is switching from Express to Fiber worth it? 🤔",
      author: "Vic Shóstak",
      date: "April 1, 2020"
    },
    {
      url:
        "https://dev.to/koddr/fiber-v1-8-what-s-new-updated-and-re-thinked-339h",
      website: "dev.to",
      title: "🚀 Fiber v1.8. What's new, updated and re-thinked?",
      author: "Vic Shóstak",
      date: "March 3, 2020"
    },
    {
      url:
        "https://dev.to/koddr/fiber-v2-is-out-now-what-s-new-and-is-he-still-fast-flexible-and-friendly-3ipf",
      website: "dev.to",
      title:
        "Fiber released v1.7! 🎉 What's new and is it still fast, flexible and friendly?",
      author: "Vic Shóstak",
      date: "February 21, 2020"
    },
    {
      url:
        "https://dev.to/koddr/welcome-to-fiber-an-express-js-styled-fastest-web-framework-written-with-on-golang-497",
      website: "dev.to",
      title:
        "Welcome to Fiber — an Express.js styled web framework written in Go with ❤️",
      author: "Vic Shóstak",
      date: "February 3, 2020"
    }
  ];

  render() {
    return (
      <section className={`generic-block ${styles.mediaBlock}`}>
        <div className={`mid ${styles.mid}`}>
          <div className="media-container">
            <h3>Media</h3>
            <div className={styles.mediaLinks}>
              {this.items.map((data, idx) => <MediaLink data={data} key={idx} />)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MediaBlock;
