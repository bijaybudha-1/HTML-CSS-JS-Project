const generate = document.getElementById("generate-btn");

generate.addEventListener("click", (e) => {
    e.preventDefault()
    const ssid = document.getElementById("ssid").value;
    const password = document.getElementById("password").value;
    const encryption = document.getElementById("encryption").value;

    let wifiConfig = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
    document.getElementById("qr-code").innerHTML = "";

    new QRCode(document.getElementById("qr-code"), {
        text: wifiConfig,
        width: 200,
        height: 200
    });
});


const downloadBtn = document.getElementById("download-btn");
const printBtn = document.getElementById("print-btn");

downloadBtn.addEventListener("click", () => {
    let qrImage = document.querySelector("#qr-code canvas");

    if (qrImage) {
        let url = qrImage.toDataURL("image/png");
        let link = document.createElement("a");
        link.href = url;
        link.download = "wifi_qr.png";
        link.click();
    } else {
        alert("Please generate a QR code first!");
    }
});

// printBtn.addEventListener("click", () => {
//     let qrImage = document.querySelector("#qr-code canvas");

//     if (qrImage) {
//         let dataURL = qrImage.toDataURL("image/png");
//         let win = window.open("");
//         win.document.write(`<img src="${dataURL}" onload="window.print(); window.close();" />`);
//     }else {
//             alert("Please generate a QR code first!");
//     }
// });

printBtn.addEventListener("click", () => {
    let qrImage = document.querySelector("#qr-code canvas");

    if (qrImage) {
        let dataURL = qrImage.toDataURL("image/png");
        let win = window.open("");
        win.document.write(`<img src="${dataURL}" onload="window.print();" />`);
    } else {
        alert("Please generate a QR code first!");
    }
});
