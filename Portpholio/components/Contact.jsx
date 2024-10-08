

const Contact = () => {
  return (
    <>
    <div className="contact-bg">
    <h2 style={{ textAlign: "center", fontSize: "60px", color:"white"}}>Contact Us</h2>

     <div class="contact-container pic-container" >
       
        <form class="contact-form">
            <div class="form-group">
                <label for="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required></input>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div class="form-group">
                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required></input>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="submit-button">Submit</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default Contact