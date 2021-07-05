let qrcode =  document.querySelector(".img");
let qrtext = document.querySelector(".textarea");
let qrbtn = document.querySelector(".button");

qrbtn.addEventListener("click" , generateQR);



function generateQR() {
    let size = "1000*1000"
    let data = qrtext.Value;
    let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

    let url = `${baseURL}?data=${data}&size=${size}`;

    qrcode.src = url;
}