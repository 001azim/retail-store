// this page has history of messages sent to customers
import Common from "./components/common"

export default function MESSAGELST() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_27vc988', 'template_86u9j8m', e.target, 'ljpE_38wT_cNJoG_E')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log("error",error);
      });
  }
  
  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <Common/>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message"  />
      <input type="submit" value="Send" />
    </form>
  );
}