import "./FormStyle.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="mailto:yashparmar1073@gmail.com" method="post" enctype="text/plain">
            <label>
                Your Name
            </label>
            <input type="text"></input>
            <label>
                Email
            </label>
            <input type="email"></input>
            <label>
                Subject
            </label>
            <input type="text"></input>
            <label>
                Message
            </label>
            <textarea rows={6} cols={20} placeholder="Type Your Message Here"></textarea>
            <button className="btn"> Submit</button>
        </form>
    </div>
  )
}

export default Form