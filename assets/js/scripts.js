function generateQRCode() {
  let scan = document.querySelector(".scan");
  let qrCodeDiv = document.querySelector(".qr-code-container");

  scan.style.display = "block";
  qrCodeDiv.style.display = "none";

  setTimeout(() => {
    scan.style.display = "none";
    qrCodeDiv.style.display = "block";

    let data = document.querySelector("textarea").value;
    //let googleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&choe=UTF-8&chld=H&chl=';
    //let QRCode = googleChartApi + encodeURIComponent(data);

    let canva = document.querySelector("#QRCodeImage")
    QRCode.toDataURL(data).then(dataUrl => {
      canva = canva.src = dataUrl;
    })
  }, 5000);
}