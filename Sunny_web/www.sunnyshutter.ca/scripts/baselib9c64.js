var prodName = ["wood stain color", "wood custom color", "wood with frame", "wood without frame", "vinyl with frame", "vinyl without frame"];
var prodBaseFactor = [24.5, 21.5, 16.25, 14.75, 11.75, 10.7];
var prodMultFactor = [2, 2, 2, 2, 2, 2];
var prodMinCost = [196, 172, 130, 118, 94, 86];
var promoCode = ["84364331", "03868349"];
var promoRate = [0.05, 0.1];

var discountRate = 0.1;

function get_promotion_code() {

   var inputPromoCode = document.getElementById("input_coupon_code").value;

   if ( inputPromoCode.trim() === "" ) {
        document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
        document.getElementById("dlg_body_txt").innerHTML = 'Please enter your promotion code';
        showDialog();
        return false;
   } else {
        var a = promoCode.indexOf(inputPromoCode);

        if ( a >= 0 && a < promoRate.length ) {

            var b = Math.ceil(promoRate[a] * 100);

            document.getElementById("dlg_header_txt").innerHTML = 'Info!';
            document.getElementById("dlg_body_txt").innerHTML = "Congratulation! You have entered a valid promotion code with " + b + " percent of saving on all your selected shutter products";
            showDialog();
            return true;
        } else {
            document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
            document.getElementById("dlg_body_txt").innerHTML = 'Sorry, an valid promotion code. You may call our sales team for available promotions';
            showDialog();
            return false;
        }
   } 

}


function dlgLogin(){
    var whitebg = document.getElementById("white-background");
    var dlg = document.getElementById("dlgbox");
    whitebg.style.display = "none";
    dlg.style.display = "none";
}
            
function showDialog(){
    var whitebg = document.getElementById("white-background");
    var dlg = document.getElementById("dlgbox");
    whitebg.style.display = "block";
    dlg.style.display = "block";
                
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
              
    dlg.style.left = (winWidth/2) - 480/2 + "px";
    dlg.style.top = "150px";
}

function insert_prospect_data(varRoom, varWindow, varWidth, varHeight, varPromotion)
{
   var data = new FormData();

   data.append('type', 'prospect');
   data.append('firstName', document.getElementById("input_name_first").value);
   data.append('lastName', document.getElementById("input_name_last").value);
   data.append('phoneNumber', document.getElementById("input_phone_number").value);
   data.append('email', document.getElementById("input_email").value);
   data.append('roomName', varRoom);
   data.append('windowName', varWindow);
   data.append('quoteWidth', varWidth);
   data.append('quoteHeight',varHeight);
   data.append('promotionCode',varPromotion);

   // AJAX CALL
   var xhr = new XMLHttpRequest();
   xhr.open('POST', "/scripts/baselib.php", true);
   xhr.send(data);

   xhr.onload = function () {
      var res = JSON.parse(this.response);

      if (res.status) {
          // OK - DO SOMETHING
          alert(res.message);
      } else {
          // ERROR - DO SOMETHING
          alert(res.message);
      }
   };

   return false;

}

function insert_schedule_data(varDate, varTime)
{
   var data = new FormData();

   data.append('type', 'schedule');
   data.append('firstName', document.getElementById("input_name_first").value);
   data.append('lastName', document.getElementById("input_name_last").value);
   data.append('phoneNumber', document.getElementById("input_phone_number").value);
   data.append('email', document.getElementById("input_email").value);
   data.append('inputDate', varDate);
   data.append('inputTime', varTime);

   // AJAX CALL
   var xhr = new XMLHttpRequest();
   xhr.open('POST', "/scripts/baselib.php", true);
   xhr.send(data);

   xhr.onload = function () {
      var res = JSON.parse(this.response);

      if (res.status) {
          // OK - DO SOMETHING
          alert(res.message);
      } else {
          // ERROR - DO SOMETHING
          alert(res.message);
      }
   };

   return false;

}

function send_mail_notification( varToAddr, varSubject, varMessage, varHeader )
{
   var data = new FormData();

   data.append('type', 'email');
   data.append('toAddress', varToAddr);
   data.append('emailSubject', varSubject);
   data.append('emailMessage', varMessage);
   data.append('emailHeader', varHeader);

   // AJAX CALL
   var xhr = new XMLHttpRequest();
   xhr.open('POST', "/scripts/baselib.php", true);
   xhr.send(data);

   xhr.onload = function () {
      var res = JSON.parse(this.response);

      if (res.status) {
          // OK - DO SOMETHING
          alert(res.message);
      } else {
          // ERROR - DO SOMETHING
          alert(res.message);
      }
   };

   return false;

}

function check_input_quote_field()
{
   var myTab = document.getElementById('input_window_size');

   var inputNameFirst = document.getElementById("input_name_first").value;
   var inputNameLast = document.getElementById("input_name_last").value;
   var inputPhoneNumber = document.getElementById("input_phone_number").value;
   var inputEmail = document.getElementById("input_email").value;

   if ( inputNameFirst.trim() === "" ) {
        document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
        document.getElementById("dlg_body_txt").innerHTML = 'Please enter your first name';
        showDialog();
        return false;
   } 
   if ( inputNameLast.trim() === "" ) {
        document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
        document.getElementById("dlg_body_txt").innerHTML = 'Please enter your last name';
        showDialog();
        return false;
   } 
   if ( inputPhoneNumber.trim() === "" ) {
        document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
        document.getElementById("dlg_body_txt").innerHTML = 'Please enter your contact phone number';
        showDialog();
        return false;
   } 
   if ( inputEmail.trim() === "" ) {
        document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
        document.getElementById("dlg_body_txt").innerHTML = 'Please enter your contact email';
        showDialog();
        return false;
   } 

   // LOOP THROUGH EACH ROW OF THE TABLE.
   for (var row = 1; row <= myTab.rows.length - 1; row++) {

       var element = myTab.rows.item(row);

       if ( element.cells[0].childNodes[0].value.trim() === "" ) {
           document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
           document.getElementById("dlg_body_txt").innerHTML = 'Please enter room name at input line ' + row;
           showDialog();
           return false;
       } 
       if ( element.cells[1].childNodes[0].value.trim() === "" ) {
           document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
           document.getElementById("dlg_body_txt").innerHTML = 'Please enter window description at input line ' + row;
           showDialog();
           return false;
       } 
       if ( element.cells[2].childNodes[0].value.trim() === "" || parseFloat(element.cells[2].childNodes[0].value) <= 0 ) {
           document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
           document.getElementById("dlg_body_txt").innerHTML = 'Please enter a positive window width at input line ' + row;
           showDialog();
           return false;
       } 
       if ( element.cells[3].childNodes[0].value.trim() === "" || parseFloat(element.cells[3].childNodes[0].value) <= 0 ) {
           document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
           document.getElementById("dlg_body_txt").innerHTML = 'Please enter a positive window height at input line ' + row;
           showDialog();
           return false;
       } 
       if ( parseFloat(element.cells[3].childNodes[0].value) > 120 ) {
           document.getElementById("dlg_header_txt").innerHTML = 'Info!';
           document.getElementById("dlg_body_txt").innerHTML = 'The inputted height at line ' + row + ' exceeds standard height limit. Please contact our sales team for customization';
           showDialog();
           return false;
       }
    }

    return true;
}


function calc_price_quote()
{
   var myTab = document.getElementById('input_window_size');

   var inputRoomName = new Array();
   var inputWindowName = new Array();
   var inputWidth = new Array();
   var inputHeight = new Array();
   var optSubCost1 = new Array();
   var optSubCost2 = new Array();
   var optSubCost3 = new Array();
   var optSubCost4 = new Array();
   var optSubCost5 = new Array();
   var optSubCost6 = new Array();

   var optTotalCost = [0, 0, 0, 0, 0, 0];
   var optSavCost = [0, 0, 0, 0, 0, 0];
   var optDiscCost = [0, 0, 0, 0, 0, 0];
   var discountRate = 0;

   var result = check_input_quote_field();

   if ( result ) {
       document.getElementById("dlg_header_txt").innerHTML = 'Info';
       document.getElementById("dlg_body_txt").innerHTML = "Thank you for choosing Sunny Shutter Inc. Please see below product quotations to your inquiry. <br><br>Interested? You may email quotations or proceed to schedule a free consultation on this page.";
       showDialog();
   } else { return false; }

   var inputPromoCode = document.getElementById("input_coupon_code").value;
   var idx = promoCode.indexOf(inputPromoCode);
   if ( idx >= 0 && idx < promoRate.length ) { discountRate = promoRate[idx]; }

   // LOOP THROUGH EACH ROW OF THE TABLE.
   for (var row = 1; row <= myTab.rows.length - 1; row++) {

       var element = myTab.rows.item(row);
       var calculated = 0;

       inputRoomName.push(element.cells[0].childNodes[0].value.trim());
       inputWindowName.push(element.cells[1].childNodes[0].value.trim());
       inputWidth.push(parseFloat(element.cells[2].childNodes[0].value));
       inputHeight.push(parseFloat(element.cells[3].childNodes[0].value));

       calculated = Math.ceil(parseFloat(element.cells[2].childNodes[0].value) * parseFloat(element.cells[3].childNodes[0].value) * prodBaseFactor[0] * prodMultFactor[0] / 144);
       if ( calculated < prodMinCost[0] ) { calculated = prodMinCost[0]; }
       optSubCost1.push(calculated);
       optTotalCost[0] += calculated;

       calculated = Math.ceil(parseFloat(element.cells[2].childNodes[0].value) * parseFloat(element.cells[3].childNodes[0].value) * prodBaseFactor[1] * prodMultFactor[1] / 144);
       if ( calculated < prodMinCost[1] ) { calculated = prodMinCost[1]; }
       optSubCost2.push(calculated);
       optTotalCost[1] += calculated;

       calculated = Math.ceil(parseFloat(element.cells[2].childNodes[0].value) * parseFloat(element.cells[3].childNodes[0].value) * prodBaseFactor[2] * prodMultFactor[2] / 144);
       if ( calculated < prodMinCost[2] ) { calculated = prodMinCost[2]; }
       optSubCost3.push(calculated);
       optTotalCost[2] += calculated;

       calculated = Math.ceil(parseFloat(element.cells[2].childNodes[0].value) * parseFloat(element.cells[3].childNodes[0].value) * prodBaseFactor[3] * prodMultFactor[3] / 144);
       if ( calculated < prodMinCost[3] ) { calculated = prodMinCost[3]; }
       optSubCost4.push(calculated);
       optTotalCost[3] += calculated;
 
       calculated = Math.ceil(parseFloat(element.cells[2].childNodes[0].value) * parseFloat(element.cells[3].childNodes[0].value) * prodBaseFactor[4] * prodMultFactor[4] / 144);
       if ( calculated < prodMinCost[4] ) { calculated = prodMinCost[4]; }
       optSubCost5.push(calculated);
       optTotalCost[4] += calculated;

       calculated = Math.ceil(parseFloat(element.cells[2].childNodes[0].value) * parseFloat(element.cells[3].childNodes[0].value) * prodBaseFactor[5] * prodMultFactor[5] / 144);
       if ( calculated < prodMinCost[5] ) { calculated = prodMinCost[5]; }
       optSubCost6.push(calculated);
       optTotalCost[5] += calculated;

       insert_prospect_data(element.cells[0].childNodes[0].value.trim(), element.cells[1].childNodes[0].value.trim(), parseFloat(element.cells[2].childNodes[0].value), parseFloat(element.cells[3].childNodes[0].value), inputPromoCode);
   }

   for (var i = 0; i < optTotalCost.length; i++) {
       optSavCost[i] = Math.ceil(optTotalCost[i] * discountRate);
       optDiscCost[i] = optTotalCost[i] - optSavCost[i];

   }

   if ( optSavCost[0] > 0 ) {
       document.getElementById("field_show_price_opt1").innerHTML = '<strike> $' + optTotalCost[0] + '<strike>';
       document.getElementById("field_show_price_opt2").innerHTML = '<strike> $' + optTotalCost[1] + '<strike>';
       document.getElementById("field_show_price_opt3").innerHTML = '<strike> $' + optTotalCost[2] + '<strike>';
       document.getElementById("field_show_price_opt4").innerHTML = '<strike> $' + optTotalCost[3] + '<strike>';
       document.getElementById("field_show_price_opt5").innerHTML = '<strike> $' + optTotalCost[4] + '<strike>';
       document.getElementById("field_show_price_opt6").innerHTML = '<strike> $' + optTotalCost[5] + '<strike>';

       document.getElementById("field_coupon_save_opt1").innerHTML = '-$' + optSavCost[0];
       document.getElementById("field_coupon_save_opt2").innerHTML = '-$' + optSavCost[1];
       document.getElementById("field_coupon_save_opt3").innerHTML = '-$' + optSavCost[2];
       document.getElementById("field_coupon_save_opt4").innerHTML = '-$' + optSavCost[3];
       document.getElementById("field_coupon_save_opt5").innerHTML = '-$' + optSavCost[4];
       document.getElementById("field_coupon_save_opt6").innerHTML = '-$' + optSavCost[5];
   } else {
       document.getElementById("field_show_price_opt1").innerHTML = '$' + optTotalCost[0];
       document.getElementById("field_show_price_opt2").innerHTML = '$' + optTotalCost[1];
       document.getElementById("field_show_price_opt3").innerHTML = '$' + optTotalCost[2];
       document.getElementById("field_show_price_opt4").innerHTML = '$' + optTotalCost[3];
       document.getElementById("field_show_price_opt5").innerHTML = '$' + optTotalCost[4];
       document.getElementById("field_show_price_opt6").innerHTML = '$' + optTotalCost[5];

       document.getElementById("field_coupon_save_opt1").innerHTML = '$' + optSavCost[0];
       document.getElementById("field_coupon_save_opt2").innerHTML = '$' + optSavCost[1];
       document.getElementById("field_coupon_save_opt3").innerHTML = '$' + optSavCost[2];
       document.getElementById("field_coupon_save_opt4").innerHTML = '$' + optSavCost[3];
       document.getElementById("field_coupon_save_opt5").innerHTML = '$' + optSavCost[4];
       document.getElementById("field_coupon_save_opt6").innerHTML = '$' + optSavCost[5];
   }

   document.getElementById("field_final_price_opt1").innerHTML = '$' + optDiscCost[0];
   document.getElementById("field_final_price_opt2").innerHTML = '$' + optDiscCost[1];
   document.getElementById("field_final_price_opt3").innerHTML = '$' + optDiscCost[2];
   document.getElementById("field_final_price_opt4").innerHTML = '$' + optDiscCost[3];
   document.getElementById("field_final_price_opt5").innerHTML = '$' + optDiscCost[4];
   document.getElementById("field_final_price_opt6").innerHTML = '$' + optDiscCost[5];

}

function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}

function schedule_appointment()
{
   var inputNameFirst = document.getElementById("input_name_first").value;
   var inputNameLast = document.getElementById("input_name_last").value;
   var inputPhoneNumber = document.getElementById("input_phone_number").value;
   var inputEmail = document.getElementById("input_email").value;
   var inputDate = document.getElementById("schedule_a_date").value;
   var inputTime = '';
   var inputTimeHours = '';

   var inputTimeArray = document.getElementsByName('button_time_select'); 
   for(i = 0; i < inputTimeArray.length; i++) { 
        if( inputTimeArray[i].checked ) inputTime = inputTimeArray[i].value;
   } 

   if ( inputNameFirst.trim() === "" ) {
        document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
        document.getElementById("dlg_body_txt").innerHTML = 'Please enter your first name';
        showDialog();

        return false;
   } 
   if ( inputNameLast.trim() === "" ) {
        document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
        document.getElementById("dlg_body_txt").innerHTML = 'Please enter your last name';
        showDialog();

        return false;
   } 
   if ( inputPhoneNumber.trim() === "" && inputEmail.trim() === "" ) {
        document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
        document.getElementById("dlg_body_txt").innerHTML = 'Please at least enter your contact number or email';
        showDialog();

        return false;
   } 
   if ( inputDate.trim() === "" ) {
        document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
        document.getElementById("dlg_body_txt").innerHTML = 'Please choose an appointment date';
        showDialog();

        return false;
   } 
   if ( inputTime.trim() === "" ) {
        document.getElementById("dlg_header_txt").innerHTML = 'Warning!';
        document.getElementById("dlg_body_txt").innerHTML = 'Please choose an appointment time range';
        showDialog();

        return false;
   } 

   if ( inputTime == 'AM' ) {
       inputTimeHours = '8:00 AM - 12:00 PM';
   } else if ( inputTime == 'PM' ) {
       inputTimeHours = '12:00 PM - 18:00 PM';
   } else {
       inputTimeHours = '18:00 PM - 20:00 PM';
   }

   // save appointment record
   insert_schedule_data(inputDate, inputTimeHours);

   // compose outgoing email
   var emailToAddress = inputEmail;
   var emailSubject = "Confirmation on your appointment with Sunny Shutter Inc";

   var emailMessage = "Thank you for choosing Sunny Shutter Inc. Please see below for your appointment details: \n\n\tScheduled Date: " + inputDate + "\n\tTime Range: " + inputTimeHours + "\n\nThis is the contact information that was inputted: \n\n\tCustomer Name: " + inputNameFirst + " " + inputNameLast + "\n\tPhone: " + inputPhoneNumber + "\n\tEmail: " + inputEmail + "\n\nA customer representative will be in contact with you to answer your questions.\n\nHave a great day.";
   var emailHeader = "CC: myqizhang@yahoo.com";

   send_mail_notification(emailToAddress, emailSubject, emailMessage, emailHeader);

   document.getElementById("dlg_header_txt").innerHTML = 'Info';
   document.getElementById("dlg_body_txt").innerHTML = "Thank you for choosing Sunny Shutter Inc. Please see below for your appointment details: <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scheduled Date: " + inputDate         + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Range: " + inputTimeHours + "<br><br>This is the contact information that was inputted: <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer Name: " + inputNameFirst + " " + inputNameLast + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone: " + inputPhoneNumber + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: " + inputEmail + "<br><br>A customer representative will be in contact with you to answer your questions.<br><br>Have a great day.";
   showDialog();
 
}

function refresh_prospect_data()
{

   var url = '/admin/get_prospect_data.php';    
   var inputStartDate = document.getElementById("choose_start_date").value;
   var inputEndDate = document.getElementById("choose_end_date").value;

   if ( inputStartDate.trim() != "" ) {
     url += '?startDate=' + inputStartDate;
  
     if ( inputEndDate.trim() != "" ) {
       url += '&endDate=' + inputEndDate;
     }
   } else {
     if ( inputEndDate.trim() != "" ) {
       url += '?endDate=' + inputEndDate;
     }
   }

   window.location.href = url;
}

function refresh_schedule_data()
{

   var url = '/admin/get_schedule_data.php';    
   var inputStartDate = document.getElementById("choose_start_date").value;
   var inputEndDate = document.getElementById("choose_end_date").value;

   if ( inputStartDate.trim() != "" ) {
     url += '?startDate=' + inputStartDate;
  
     if ( inputEndDate.trim() != "" ) {
       url += '&endDate=' + inputEndDate;
     }
   } else {
     if ( inputEndDate.trim() != "" ) {
       url += '?endDate=' + inputEndDate;
     }
   }

   window.location.href = url;
}

function email_price_quote(prodIndex)
{
   var myTab = document.getElementById('input_window_size');
   var inputEmail = document.getElementById("input_email").value;

   var inputRoomName = new Array();
   var inputWindowName = new Array();
   var inputWidth = new Array();
   var inputHeight = new Array();
   var optSubCost = new Array();
   var optTotalRegCost = 0;
   var optTotalSavCost = 0;
   var optTotalDiscCost = 0;
   var discountRate = 0;

   var result = check_input_quote_field();
   if ( ! result ) { return false; }

   var inputPromoCode = document.getElementById("input_coupon_code").value;
   var idx = promoCode.indexOf(inputPromoCode);
   if ( idx >= 0 && idx < promoRate.length ) { discountRate = promoRate[idx]; }

   // LOOP THROUGH EACH ROW OF THE TABLE.
   for (var row = 1; row <= myTab.rows.length - 1; row++) {

       var element = myTab.rows.item(row);
       var calculated = 0;

       inputRoomName.push(element.cells[0].childNodes[0].value.trim());
       inputWindowName.push(element.cells[1].childNodes[0].value.trim());
       inputWidth.push(parseFloat(element.cells[2].childNodes[0].value));
       inputHeight.push(parseFloat(element.cells[3].childNodes[0].value));

       calculated = Math.ceil(parseFloat(element.cells[2].childNodes[0].value) * parseFloat(element.cells[3].childNodes[0].value) * prodBaseFactor[prodIndex] * prodMultFactor[prodIndex] / 144);
       if ( calculated < prodMinCost[prodIndex] ) { calculated = prodMinCost[prodIndex]; }
       optSubCost.push(calculated);

       optTotalRegCost += calculated;
   }
   optTotalSavCost = Math.ceil(optTotalRegCost * discountRate);
   optTotalDiscCost = optTotalRegCost - optTotalSavCost;

   // compose outgoing email
   var emailToAddress = inputEmail;
   var emailSubject = "Shutter product quotations from Sunny Shutter Inc";

   var emailMessage = "Thank you for choosing Sunny Shutter Inc. Based on your inputted Window measurements, we would suggest below quotations for our shutter products: \n\n";

   emailMessage += "\tShutter name: " + prodName[prodIndex].toUpperCase() + "\n\n";

   for (var i = 0; i <= inputRoomName.length - 1; i++) {

       emailMessage += "\tRoom name: " + inputRoomName[i].toUpperCase() + "\n";
       emailMessage += "\tWindow description: " + inputWindowName[i].toUpperCase() + "\n";
       emailMessage += "\tWindow width: " + inputWidth[i] + "\n";
       emailMessage += "\tWindow height: " + inputHeight[i] + "\n";
       emailMessage += "\tWindow price quotation: $" + optSubCost[i] + "\n\n";
   }

   emailMessage += "\t--------------------------\n\n";
   emailMessage += "\tTotal regular price: $" + optTotalRegCost + "\n";
   emailMessage += "\tPromotion saving: $" + optTotalSavCost + "\n";
   emailMessage += "\tOur best price: $" + optTotalDiscCost + "\n";
   emailMessage += "\n\nPlease schedule a free consultation with our customer representatives for any questions (http://ec2-18-219-47-72.us-east-2.compute.amazonaws.com/web_contents/estimate).\n\nHave a great day.";

   var emailHeader = "CC: myqizhang@yahoo.com";

   send_mail_notification(emailToAddress, emailSubject, emailMessage, emailHeader);

   document.getElementById("dlg_header_txt").innerHTML = 'Info';
   document.getElementById("dlg_body_txt").innerHTML = "Thank you for choosing Sunny Shutter Inc. An email with shutter product quotations has been sent out to the address at: " + "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: " + inputEmail + "<br><br>Have a great day.";
   showDialog();

}

function refresh_promotion_data()
{

   var url = '/admin/get_promotion_data.php';    
   var inputStartDate = document.getElementById("choose_start_date").value;
   var inputEndDate = document.getElementById("choose_end_date").value;

   if ( inputStartDate.trim() != "" ) {
     url += '?startDate=' + inputStartDate;
  
     if ( inputEndDate.trim() != "" ) {
       url += '&endDate=' + inputEndDate;
     }
   } else {
     if ( inputEndDate.trim() != "" ) {
       url += '?endDate=' + inputEndDate;
     }
   }

   window.location.href = url;
}
