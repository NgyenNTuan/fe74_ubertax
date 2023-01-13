var payBtn = document.getElementById("payBtn");
var billBtn = document.getElementById("billBtn");

var divThanhTien = document.getElementById("divThanhTien");
var xuatTien = document.getElementById("xuatTien");

var exampleModal = document.getElementById("exampleModal");

var tableData = "";

// Tính tiền UberX
function paymentUberX(km, time) {
   var total = 0;

   var timeDelay = time * 2000;

   var price1Km = 8000;
   var price20Km = 0;
   var priceUpper = 0;

   if (km === 1) {
      total = timeDelay + price1Km + price20Km + priceUpper;

      tableData =
         `<tr>
         <td>UberX</td>
         <td>1 km</td>
         <td>8000</td>
         <td>${price1Km}</td>
      </tr>
      <tr>
         <td>Thời gian chờ</td>
         <td>${time} phút</td>
         <td>2000</td>
         <td>${timeDelay}</td>
      </tr>
      <tr>
         <td colspan="3">Total</td>
         <td>${total}</td>
      </tr>`;
   }

   if (km > 1 && km <= 20) {
      price20Km = 12000 * (km - 1);
      total = timeDelay + price1Km + price20Km + priceUpper;

      tableData =
         `<tr>
         <td>UberX</td>
         <td>1 km</td>
         <td>8000</td>
         <td>${price1Km}</td>
      </tr>
      <tr>
         <td>UberX</td>
         <td>${km - 1} km</td>
         <td>12000</td>
         <td>${price20Km}</td>
      </tr>
      <tr>
         <td>Thời gian chờ</td>
         <td>${time} phút</td>
         <td>2000</td>
         <td>${timeDelay}</td>
      </tr>
      <tr>
         <td colspan="3">Total</td>
         <td>${total}</td>
      </tr>`;
   }

   if (km > 20) {
      price20Km = 12000 * 19;
      priceUpper = 10000 * (km - 20);
      total = timeDelay + price1Km + price20Km + priceUpper;

      tableData =
         `<tr>
         <td>UberX</td>
         <td>1 km</td>
         <td>8000</td>
         <td>${price1Km}</td>
      </tr>
      <tr>
         <td>UberX</td>
         <td>${km - 1} km</td>
         <td>12000</td>
         <td>${price20Km}</td>
      </tr>
      <tr>
         <td>UberX</td>
         <td>>20 km</td>
         <td>10000</td>
         <td>${priceUpper}</td>
      </tr>
      <tr>
         <td>Thời gian chờ</td>
         <td>${time} phút</td>
         <td>2000</td>
         <td>${timeDelay}</td>
      </tr>
      <tr>
         <td colspan="3">Total</td>
         <td>${total}</td>
      </tr>`;
   }

   return total;
}

// Tính tiền UberSUV
function paymentUberSUV(km, time) {
   var total = 0;

   var timeDelay = time * 3000;

   var price1Km = 9000;
   var price20Km = 0;
   var priceUpper = 0;

   if (km === 1) {
      total = timeDelay + price1Km + price20Km + priceUpper;

      tableData =
         `<tr>
         <td>UberSUV</td>
         <td>1 km</td>
         <td>9000</td>
         <td>${price1Km}</td>
      </tr>
      <tr>
         <td>Thời gian chờ</td>
         <td>${time} phút</td>
         <td>3000</td>
         <td>${timeDelay}</td>
      </tr>
      <tr>
         <td colspan="3">Total</td>
         <td>${total}</td>
      </tr>`;
   }

   if (km > 1 && km <= 20) {
      price20Km = 14000 * (km - 1);
      total = timeDelay + price1Km + price20Km + priceUpper;

      tableData =
         `<tr>
         <td>UberSUV</td>
         <td>1 km</td>
         <td>9000</td>
         <td>${price1Km}</td>
      </tr>
      <tr>
         <td>UberSUV</td>
         <td>${km - 1} km</td>
         <td>14000</td>
         <td>${price20Km}</td>
      </tr>
      <tr>
         <td>Thời gian chờ</td>
         <td>${time} phút</td>
         <td>3000</td>
         <td>${timeDelay}</td>
      </tr>
      <tr>
         <td colspan="3">Total</td>
         <td>${total}</td>
      </tr>`;
   }

   if (km > 20) {
      price20Km = 14000 * 19;
      priceUpper = 12000 * (km - 20);
      total = timeDelay + price1Km + price20Km + priceUpper;

      tableData =
      `<tr>
         <td>UberSUV</td>
         <td>1 km</td>
         <td>9000</td>
         <td>${price1Km}</td>
      </tr>
      <tr>
         <td>UberSUV</td>
         <td>19 km</td>
         <td>14000</td>
         <td>${price20Km}</td>
      </tr>
      <tr>
         <td>UberSUV</td>
         <td>>20 km</td>
         <td>12000</td>
         <td>${priceUpper}</td>
      </tr>
      <tr>
         <td>Thời gian chờ</td>
         <td>${time} phút</td>
         <td>3000</td>
         <td>${timeDelay}</td>
      </tr>
      <tr>
         <td colspan="3">Total</td>
         <td>${total}</td>
      </tr>`;
   }

   return total;
}

// Tính tiền UberBlack
function paymentUberBlack(km, time) {
   var total = 0;

   var timeDelay = time * 4000;

   var price1Km = 10000;
   var price20Km = 0;
   var priceUpper = 0;

   if (km === 1) {
      total = timeDelay + price1Km + price20Km + priceUpper;

      tableData =
         `<tr>
         <td>UberBlack</td>
         <td>1 km</td>
         <td>10000</td>
         <td>${price1Km}</td>
      </tr>
      <tr>
         <td>Thời gian chờ</td>
         <td>${time} phút</td>
         <td>4000</td>
         <td>${timeDelay}</td>
      </tr>
      <tr>
         <td colspan="3">Total</td>
         <td>${total}</td>
      </tr>`;
   }

   if (km > 1 && km <= 20) {
      price20Km = 16000 * (km - 1);
      total = timeDelay + price1Km + price20Km + priceUpper;

      tableData =
         `<tr>
         <td>UberBlack</td>
         <td>1 km</td>
         <td>10000</td>
         <td>${price1Km}</td>
      </tr>
      <tr>
         <td>UberBlack</td>
         <td>${km - 1} km</td>
         <td>16000</td>
         <td>${price20Km}</td>
      </tr>
      <tr>
         <td>Thời gian chờ</td>
         <td>${time} phút</td>
         <td>4000</td>
         <td>${timeDelay}</td>
      </tr>
      <tr>
         <td colspan="3">Total</td>
         <td>${total}</td>
      </tr>`;
   }

   if (km > 20) {
      price20Km = 16000 * 19;
      priceUpper = 14000 * (km - 20);
      total = timeDelay + price1Km + price20Km + priceUpper;
      
      tableData =
      `<tr>
         <td>UberBlack</td>
         <td>1 km</td>
         <td>10000</td>
         <td>${price1Km}</td>
      </tr>
      <tr>
         <td>UberBlack</td>
         <td>19 km</td>
         <td>16000</td>
         <td>${price20Km}</td>
      </tr>
      <tr>
         <td>UberBlack</td>
         <td>>20 km</td>
         <td>14000</td>
         <td>${priceUpper}</td>
      </tr>
      <tr>
         <td>Thời gian chờ</td>
         <td>${time} phút</td>
         <td>4000</td>
         <td>${timeDelay}</td>
      </tr>
      <tr>
         <td colspan="3">Total</td>
         <td>${total}</td>
      </tr>`;
   }
   
   return total;
}

// Click button Tính tiền
payBtn.onclick = function () {
   var uberX = document.getElementById("uberX").checked;
   var uberSUV = document.getElementById("uberSUV").checked;
   var uberBlack = document.getElementById("uberBlack").checked;

   var inputKM = document.getElementById("inputKM").value * 1;
   var inputTime = document.getElementById("inputTime").value * 1;

   if (inputKM)
      var result = 0;
   if (uberX || uberSUV || uberBlack) {
      if (uberX) {
         result = paymentUberX(inputKM, inputTime);
      } else if (uberSUV) {
         result = paymentUberSUV(inputKM, inputTime);
      } else {
         result = paymentUberBlack(inputKM, inputTime);
      }
   } else {
      alert("Vui lòng chọn loại xe.");
   }

   divThanhTien.style.display = "block";
   xuatTien.innerHTML = result;
};


billBtn.onclick = function () {
   var tableBody = document.getElementById("tableBody");
   tableBody.innerHTML = tableData;
};
