import React, { Component } from "react";
import { Footer } from "react-materialize";
class FooterTab extends Component {
  render() {
    return (
      <Footer
        className="#388e3c green darken-2"
        copyrights="&copy; 2020 Made by Dip"
        links={
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                News
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                FAQ
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Comming soon!!
              </a>
            </li>
          </ul>
        }
        //   moreLinks={
        //     <a className="grey-text text-lighten-4 right" href="#!">
        //       More Links
        //     </a>
        //   }
      >
        <h5 className="white-text">WEON news</h5>
        <p className="grey-text text-lighten-4">
          It shows latest news feed across the globe
        </p>
      </Footer>
    );
  }
}

export default FooterTab;
