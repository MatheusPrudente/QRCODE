function gerarQRCode() {
  let inputUsuario = document.querySelector("textarea").value;
  let googleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&choe=UTF-8&chld=H&chl=';

  let conteudoQRCode = googleChartApi + encodeURIComponent(inputUsuario);
  document.querySelector("#QRCodeImage").src = conteudoQRCode;

}