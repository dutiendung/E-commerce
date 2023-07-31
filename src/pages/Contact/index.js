import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "LA - Contact";
  }, []);
  return <div></div>;
}

export default Contact;
