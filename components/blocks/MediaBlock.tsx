import styles from './MediaBlock.module.scss';
import { Component } from 'react';
import { MediaLinkItem } from '../../typings';
import MediaLink from '../media-link/MediaLink';

class MediaBlock extends Component {
  private readonly items: MediaLinkItem[] = [
    {
      url: "https://dev.to/koddr/go-fiber-by-examples-how-can-the-fiber-web-framework-be-useful-487a",
      website: "dev.to",
      title: "📖 Go Fiber by Examples: How can the Fiber Web Framework be useful?",
      author: "Vic Shóstak",
      date: "august 16, 2021"
    },
    {
      url: "https://dev.to/koddr/build-a-restful-api-on-go-fiber-postgresql-jwt-and-swagger-docs-in-isolated-docker-containers-475j",
      website: "dev.to",
      title: "📖 Build a RESTful API on Go: Fiber, PostgreSQL, JWT and Swagger docs in isolated Docker containers",
      author: "Vic Shóstak",
      date: "march 22, 2021"
    },
    {
      url: "https://dev.to/fenny/getting-started-with-fiber-36b6",
      website: "dev.to",
      title: "Getting started with Fiber ⚡",
      author: "Fenny 🔥",
      date: "june 10, 2020"
    },
    {
      url: "https://blog.logrocket.com/express-style-api-go-fiber/",
      website: "logrocket.com",
      title: "Building an Express-style API in Go with Fiber",
      author: "Alexander Nnakwue",
      date: "june 10, 2020"
    },
    {
      url: "https://vugt.me/the-road-to-web-based-authentication-with-fiber/",
      website: "vugt.me",
      title: "The road to web-based authentication with Fiber ⚡",
      author: "Thomas van Vugt",
      date: "May 20, 2020"
    },
    {
      url: "https://dev.to/koddr/fiber-v1-9-5-how-to-improve-performance-by-817-and-stay-fast-flexible-and-friendly-2dp6",
      website: "dev.to",
      title: "Fiber v1.9.6 🔥 How to improve performance by 817% and stay fast, flexible and friendly?",
      author: "Vic Shóstak",
      date: "May 12, 2020"
    },
    {
      url: "https://blog.yongweilun.me/create-a-travel-list-app-with-go-fiber-angular-mongodb-and-google-cloud-secret-manager-ck9fgxy0p061pcss1xt1ubu8t",
      website: "yongweilun.me",
      title: "🌎 Create a travel list app with Go, Fiber, Angular, MongoDB and Google Cloud Secret Manager",
      author: "Wei Lun",
      date: "April 25, 2020"
    },
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
      <section className={`generic-block faint reverse ${styles.mediaBlock}`}>
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
