document.addEventListener("DOMContentLoaded", function () {
    const sendOtpButton = document.getElementById("sendOtpButton");
    const verifyOtpButton = document.getElementById("verifyOtpButton");

    const otpArea = document.getElementById("otpArea");
    const resultMessage = document.getElementById("resultMessage");

    const emailInput = document.getElementById("adminEmail");
    const otpInput = document.getElementById("otpInput");

    const correctEmail = "admin@mtms.ac.uk";
    const correctOTP = "123456";

    // Send OTP
    sendOtpButton.addEventListener("click", function () {
        if (emailInput.value === correctEmail) {
            otpArea.style.display = "block";
            resultMessage.innerText = "OTP sent to your email!";
            resultMessage.style.color = "#257423";
        } else {
            resultMessage.innerText = "Email not found!";
            resultMessage.style.color = "red";
        }
    });

    // Verify OTP
    verifyOtpButton.addEventListener("click", function () {
        if (otpInput.value === correctOTP) {
            resultMessage.innerHTML = "✅ Verified! Your password is <strong>Admin@123</strong>";
            resultMessage.style.color = "#257423";
        } else {
            resultMessage.innerText = "❌ Incorrect OTP.";
            resultMessage.style.color = "red";
        }
    });
});