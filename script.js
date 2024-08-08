document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = event.target.inputName.value.trim();
    const toaster = document.querySelector(".toast");
    toaster.classList.add("show");

    setTimeout(() => {
      toaster.classList.remove("show");
    }, 1500);

    if (name) {
      fetch(`https://api.genderize.io/?name=${name}`)
        .then((response) => response.json())
        .then((data) => {
          const gender = data.gender;
          const probability = data.probability;
          const genderText =
            gender === "male"
              ? "COWO"
              : gender === "female"
              ? "CEWE"
              : "BAHAYA";
          document.querySelector(".text-1").textContent = genderText;
          document.querySelector(".text-2").textContent = genderText;
          document.querySelector(".text-3").textContent = genderText;
          document.querySelector(".text-4").textContent = genderText;
          document.querySelector(".text-5").textContent = genderText;
          document.querySelector(".text-6").textContent = genderText;
          if (data.probability) {
            document.getElementById("hehe").textContent =
              probability * 100 + "%";
          } else {
            document.getElementById("hehe").textContent = "100%";
          }
        })
        .catch((error) => console.error("Error:", error));
    } else {
      alert("Please enter a valid name");
    }
  });
