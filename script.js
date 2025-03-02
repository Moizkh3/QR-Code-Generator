let imgBox = document.getElementById("imgBox"); 
let qrText = document.getElementById("qrText");
let qrImage = document.getElementById("qrImage");

function generateQR() {
    if (qrText.value.trim() === "") {
        alert("Please enter a valid text or URL!");
        return;
    }
    
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
    
    // Ensure the animation plays even if the QR code is regenerated
    imgBox.classList.remove("show-img"); 
    setTimeout(() => {
        imgBox.classList.add("show-img");
    }, 100); 
}
