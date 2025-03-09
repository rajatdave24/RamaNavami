<!DOCTYPE html>
<html>
<head>
<style>
div {
    height: 200px;
    width: 400px;
    background: white;
    position: fixed;
    top: 90%;
    left: 55%;
    margin-top: -100px;
    margin-left: -200px;
    h1 {text-align: center;}
p {text-align: center;}
}
</style>
<script>
function load()
{
document.payuform.submit();
}
</script>
</head>

<body onload="load()">

<div> 
<h1>Redirecting...</h1>
<p>Please wait while we redirect to you payemnt gateway.</p>
</div>
<form action="https://secure.payu.in/_payment"  name="payuform" id="payuform" method="post">
  <input type="hidden" name="key" value="<?php echo $_GET['key'] ?>" />
  <input type="hidden" name="txnid" value="<?php echo $_GET['txnid'] ?>" />
  <input type="hidden" name="amount" value="<?php echo $_GET['amount'] ?>" />
  <input type="hidden" name="firstname" value="<?php echo $_GET['firstname'] ?>" />
  <input type="hidden" name="email" value="<?php echo $_GET['email'] ?>" />
  <input type="hidden" name="phone" value="<?php echo $_GET['phone'] ?>" />
  <input type="hidden" name="productinfo" value="<?php echo $_GET['productinfo'] ?>" />
  <input type="hidden" name="hash" value="<?php echo hash('sha512', $_GET['key'].'|'.$_GET['txnid'].'|'.$_GET['amount'].'|'.$_GET['productinfo'].'|'.$_GET['firstname'].'|'.$_GET['email'].'|||||||||||'.$_GET['salt']); ?>" />
  <input type="hidden" name="surl" value="<?php echo $_GET['surl'] ?>" />
  <input type="hidden" name="furl" value="<?php echo $_GET['furl'] ?>" />
  <input name="pg" input type= "hidden" value="UPI" />
  <input name="curl" input type= "hidden" value="" />
  <input name="udf1" input type= "hidden" value=""/>
  <input name="udf2" input type= "hidden" inputvalue="" />
  <input name="udf3" input type= "hidden" value="" />
  <input name="udf4" input type= "hidden" value="" />
  <input name="udf5" input type= "hidden" value="" />
</body>
</html>