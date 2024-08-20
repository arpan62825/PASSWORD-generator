const passwordCharacters = [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Uppercase letters
    ..."abcdefghijklmnopqrstuvwxyz", // Lowercase letters
    ..."0123456789", // Numbers
    ..."!@#$%^&*()_+-=[]{}|;:',.<>?/", // Special characters
];

const genBtn = document.querySelector(".generate-btn");
let outPut1 = document.querySelector(".output_1");

genBtn.addEventListener("click", () => {
    let randomPassword = "";
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        randomPassword += passwordCharacters[randomIndex];
        outPut1.textContent = randomPassword;
    }
    outPut1.textContent = randomPassword;
    console.log(randomPassword);
});
