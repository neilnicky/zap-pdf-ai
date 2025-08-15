import QRCode from "qrcode";
import fs from "fs";

const pdfUrl =
  "https://drive.google.com/uc?export=download&id=17IQ354u4e196Nd-HZXC6By-nGU6b_wEP";

const exportName = "hidDen_menu_highRes";

QRCode.toFile(
  exportName,
  pdfUrl,
  {
    width: 1000,
    margin: 2,
  },
  (err) => {
    if (err) throw err;
    console.log("High-res QR code saved as qr.png");
  }
);
