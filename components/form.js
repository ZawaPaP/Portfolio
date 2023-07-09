import {useState} from 'react';
import Modal from './modal'

export default function Form() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendMail = async event => {
      event.preventDefault()
      await fetch('/api/send', {
        body: JSON.stringify({
          email: event.target.email.value,
          message: event.target.message.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then((res) => {
        if (res.status === 200) {
          setIsModalOpen(true);
        }
      });
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className="container mt-5">
        <form onSubmit={sendMail}>
          <div className="mb-3">
            <label htmlFor="email">email address</label>
            <input id="email" name="email" type="email" className="form-control" placeholder="name@example.com" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label"></label>
            <textarea id="message" name="message" className="form-control" required rows="3" placeholder='Message'></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    )
  }