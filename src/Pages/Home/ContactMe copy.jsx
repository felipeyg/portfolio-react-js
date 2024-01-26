import { useState } from "react"
import emailjs from '@emailjs/browser'

function ContactMe() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();
  }

    const templateParams = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      message: message,
    };

    emailjs.send('service_suf3gw9', 'template_54ob94r', templateParams, 'erNBFg_gBxE-Qv88r')
    .then((result) => {
      console.log(result.text);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
    }, (err) => {
      console.log("Error: ", err);
    });

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Me mande uma mensagem, estou sempre disponível para conversar.
        </p>
      </div>
      
      <form className="form" onSubmit={() => {}}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setFirstName(e.target.value)}
          value={first_name}
        />
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setLastName(e.target.value)}
          value={last_name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />


      </form>
      <form className="contact--form--container" onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input 
              type="text"
              className="contact--input text.md" 
              name="first-name"
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
              value={first_name}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input 
              type="text"
              className="contact--input text.md" 
              name="last-name"
              id="last-name"
              onChange={(e) => setLastName(e.target.value)}
              value={last_name}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input 
              type="email"
              className="contact--input text.md" 
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input 
              type="number"
              className="contact--input text.md" 
              name="phone-number"
              id="phone-number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phone_number}
              required
            />
          </label>
        </div>
        {/* <label htmlFor="choose-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select 
              name="choose-topic"
              id="choose-topic"
              className="contact--input text.md" 
              required
            >
              <option>Select One...</option>
              <option>Item 1...</option>
              <option>Item 2...</option>
              <option>Item 3...</option>
            </select>
          </label> */}
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea 
              className="contact--input text.md" 
              id="message"
              rows="8"
              placeholder="Type your message here..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </label>
          <label htmlFor="checkbox" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox"/>
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <input className="btn btn-primary contact--form--btn" type="submit" value="Submit" />
          </div>
      </form>
    </section>
  )
}

export default ContactMe;