import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import bgrImg from "~/assets/contact/contact-img.jpg";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);
function Contact() {
  useEffect(() => {
    document.title = "LA - Contact";
  }, []);

  // Form Validation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const nameRef = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const validateAll = () => {
    const msg = {};
    if (name.trim() === "") {
      msg.nameInput = "*Please enter your name";
      nameRef.current.focus();
    } else if (name.trim().split(" ").length < 2) {
      msg.nameInput = "*Please enter your full name (both first and last)";
    }

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim() === "") {
      msg.emailInput = "*Please enter your email";
    } else if (!email.match(mailformat)) {
      msg.emailInput = "*Please enter a valid email address";
    }

    if (message.trim() === "") {
      msg.messageInput = "*Please share something";
    }

    setErrorMsg(msg);
    if (msg.length > 0) {
      return false;
    } else return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidate = validateAll();
    const data = {
      name,
      email,
      message,
    };
    // data handle...
    if (!isValidate) return;
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("background")}>
          <img src={bgrImg} alt="contactImg" />
        </div>
        <div className={cx("grid wide")}>
          <div className={cx("content")}>
            <div className={cx("row")}>
              <div className={cx("col l-6 m-12 c-12 ")}>
                <div className={cx("messenger")}>
                  <div className={cx("inner")}>
                    <h3>Get In Touch</h3>
                    <form className={cx("form")} onSubmit={handleSubmit}>
                      <div className={cx("form-item")}>
                        <label htmlFor="name" className={cx("label")}>
                          Your full name
                        </label>{" "}
                        <br />
                        <input
                          id="name"
                          className={cx("input")}
                          ref={nameRef}
                          onChange={(e) => handleNameChange(e)}
                        />
                        <p className={cx("error-msg")}>{errorMsg.nameInput}</p>
                      </div>
                      <div className={cx("form-item")}>
                        <label htmlFor="email" className={cx("label")}>
                          Your email
                        </label>{" "}
                        <br />
                        <input
                          id="email"
                          className={cx("input")}
                          onChange={(e) => handleEmailChange(e)}
                        />
                        <p className={cx("error-msg")}>{errorMsg.emailInput}</p>
                      </div>
                      <div className={cx("form-item")}>
                        <label htmlFor="messenger" className={cx("label")}>
                          Message
                        </label>{" "}
                        <br />
                        <textarea
                          id="messenger"
                          className={cx("textarea")}
                          onChange={(e) => handleMessageChange(e)}
                        />
                        <p className={cx("error-msg")}>
                          {errorMsg.messageInput}
                        </p>
                      </div>
                      <button className={cx("btn-submit")} type="submit">
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={cx("col l-6 m-12 c-12")}>
                <div className={cx("address")}>
                  <div className={cx("address-list")}>
                    <div className={cx("address-item")}>
                      <h3>New York</h3>
                      <p>
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </p>
                    </div>
                    <div className={cx("address-item")}>
                      <h3>Canada</h3>
                      <p>
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </p>
                    </div>
                    <div className={cx("address-item")}>
                      <h3>Lon Don</h3>
                      <p>
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
