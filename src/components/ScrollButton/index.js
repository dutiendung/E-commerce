import classNames from "classnames/bind";
import styles from "./ScrollButton.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function ScrollButton() {
  const [visible, setVisible] = useState(false);
  const toggleButton = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  window.onscroll = toggleButton;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={cx("wrapper")}>
      {visible && (
        <button className={cx("btn", "btn_move")} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
}

export default ScrollButton;
