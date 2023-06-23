export default function Form() {
    const registerUser = async event => {
      event.preventDefault()
   
      const res = await fetch('/api/send', {
        body: JSON.stringify({
          email: event.target.email.value,
          message: event.target.message.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
   
      const result = await res.json()
    }
   
    return (
      <div className="container mt-5">
        <form onSubmit={registerUser}>
          <div className="mb-3">
            <label htmlFor="email">email address</label>
            <input id="email" name="email" type="email" className="form-control" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label"></label>
            <textarea id="message" name="message" className="form-control" rows="3">Text</textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }