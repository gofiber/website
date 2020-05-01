import styles from './TheFooter.module.scss';
import { Component } from 'react';
import { GenericLink } from '../../typings';

class FooterLink extends Component<GenericLink> {
  render() {
    return (
      <a href={this.props.url} target="_blank">
        {this.props.text}
      </a>
    );
  }
}

const Links = {
  Fenny: () => <FooterLink url="https://github.com/fenny" text="Fenny" />,
  Contributors: () => <FooterLink url="https://github.com/gofiber/fiber/graphs/contributors" text="Contributors" />,
  ProjectLicense: () => <FooterLink url="https://github.com/gofiber/fiber/blob/master/LICENSE" text="MIT License" />,
  LogoDesigner: () => <FooterLink url="https://github.com/koddr" text="Vic Shóstak" />,
  LogoLicense: () => <FooterLink url="https://creativecommons.org/licenses/by-sa/4.0" text="Creative Commons" />,
  GitBook: () => <FooterLink url="https://gitbook.com" text="GitBook.com" />,
  WebsiteBy: () => <FooterLink url="https://sallai.me" text="József Sallai" />
};

class TheFooter extends Component {
  render() {
    return (
      <footer className={styles.mainFooter}>
        <div className="mid">
          Copyright (c) 2019-present <Links.Fenny /> and <Links.Contributors />.
          Fiber is free and open-source software licensed under the <Links.ProjectLicense />.
          Official logo was created by <Links.LogoDesigner /> and distributed under
          the <Links.LogoLicense /> license (CC BY-SA 4.0 International).
          Fiber Documentation is hosted by <Links.GitBook />. Website by <Links.WebsiteBy />.
        </div>
      </footer>
    );
  }
}

export default TheFooter;
