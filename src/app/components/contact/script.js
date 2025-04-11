document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("p9xJY2r5AbCdEfG7H"); // ✅ Initialize EmailJS properly

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // ✅ Prevent default form submission

    console.log("sendMail function triggered!"); // ✅ Debugging Step 1

    let name = document.getElementById("name").value.trim();
    let user_email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    console.log("Form values:", { name, user_email, subject, message }); // ✅ Debugging Step 2

    if (!name || !user_email || !subject || !message) {
      alert("❗ Please fill out all fields before submitting.");
      return;
    }

    // ✅ Sending email using EmailJS
    emailjs.send("service_w6ihe8h", "template_bdmdnev", {
      name: name,
      user_email: user_email,
      subject: subject,
      message: message,
    })
      .then(response => {
        console.log("EmailJS Response:", response); // ✅ Debugging Step 3
        alert("✅ Email sent successfully!");
        document.getElementById("contact-form").reset(); // ✅ Reset form after success
      })
      .catch(error => {
        console.error("EmailJS Error:", error); // ✅ Debugging Step 4
        alert("❌ Error sending email. Please try again.");
      });
  });
});



//

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("p9xJY2r5AbCdEfG7H"); // ✅ Initialize EmailJS properly

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // ✅ Prevents default form submission

    console.log("sendMail function triggered!"); // ✅ Debugging Step 1

    let name = document.getElementById("name").value.trim();
    let user_email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    console.log("Form values:", { name, user_email, subject, message }); // ✅ Debugging Step 2

    if (!name || !user_email || !subject || !message) {
      alert("❗ Please fill out all fields before submitting.");
      return;
    }

    // ✅ Sending email using EmailJS
    emailjs.sendForm("service_w6ihe8h", "template_bdmdnev", this)
      .then(response => {
        console.log("EmailJS Response:", response); // ✅ Debugging Step 3
        alert("✅ Successful! Message Sent."); // ✅ Success Alert Message
        document.getElementById("contact-form").reset(); // ✅ Reset form after success
      })
      .catch(error => {
        console.error("EmailJS Error:", error); // ✅ Debugging Step 4
        alert("❌ Error sending email. Please try again.");
      });
  });
});
