<?php
// Set the content type to JSON
header('Content-Type: text/html');

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $response = $_POST; // Assuming PayU sends the response via POST
    $status = $response['status'] ?? '';
    $email = $response['email'] ?? '';
    $firstname = $response['firstname'] ?? '';
    $amount = $response['amount'] ?? '';
    $phone = $response['phone'] ?? '';
    $transactionId = $response['txnid'] ?? '';
    $paymentMethod = $response['PG_TYPE'] ?? '';
    $bankRefNum = $response['bank_ref_num'] ?? '';

     // Prepare the HTML response
     $response = "<html>
     <head>
         <title>Thank you</title>
     </head>
     <body>
     <img src='https://iskconjuhu.in/ISKCON_logo.png' alt='Logo' class='logo'>
     <h3>ISKCON Juhu</h3>
         <div style={{display:'block',position:'relative',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
<h1>Hare Krishna $firstname !!!</h1>
<div>Thank you for your valuable contribution towards reaching out Lord Krishna's causeless mercy in the form of Krishna's Prasadam, You will recieve the notification on your email - $email and phone - $phone</div><br/>
<div>Donation Details below:</div><br/>
<div>Transaction Id : $transactionId </div><br/>
<div>Donation Amount : $amount </div><br/>
<div>Donation Payment Method : $paymentMethod </div><br/>
<div>Bank Reference Number : $bankRefNum </div><br/>
<img src='https://iskconjuhu.in/Prabhupada_with_children.jpg' alt='Prabhupada with children'/><p></p>
<a href='https://iskconjuhu.in'>Return to home</a>
<p></p>
</div>
</body>
 </html>";

// Send the HTML response
echo $response;
http_response_code(200); // OK

   
} else {
    // Handle other request methods (optional)
    $response = "<html>
     <head>
         <title>Invalid Request</title>
     </head>
     <body>
     <img src='https://iskconjuhu.in/ISKCON_logo.png' alt='Logo' class='logo'>
     <h3>ISKCON Juhu</h3>
         <div style={{display:'block',position:'relative',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
<h1>Hare Krishna!!!</h1>
<a href='https://iskconjuhu.in'>Return to home</a>
<p></p>
</div>
</body>
 </html>";

// Send the HTML response
echo $response;
http_response_code(200); // OK

}
?>
