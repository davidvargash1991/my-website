import React, { Component } from "react";
import styles from "./responsive.module.scss";
import cx from "classnames";
import responsiveImg from "icons/responsive.png";
import { ILanguageProps } from "data/strings";

interface IResponsiveState {
  animateClassImg: string;
  animateClassText: string;
}

class Responsive extends Component<ILanguageProps> {
  private ref = React.createRef<HTMLImageElement>();
  public state: IResponsiveState = {
    animateClassImg: "",
    animateClassText: "",
  };
  private listenToScroll = () => {
    if (this.ref.current && this.state.animateClassImg === "") {
      const bounding = this.ref.current.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        this.setState({
          animateClassImg: styles.animateImg,
          animateClassText: styles.animateText,
        });
      }
    }
  };
  public componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }
  public render() {
    const { strings } = this.props;
    const { animateClassImg, animateClassText } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            ref={this.ref}
            className={cx(styles.img, animateClassImg)}
            src={responsiveImg}
            alt="responsive"
          />
          <div>
            <div className={cx(styles.text, animateClassText)}>
              {strings.responsiveText}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Responsive;
