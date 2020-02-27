<?php 

define('DB_SERVER', 'testdb.cwtlbh3wnpso.us-east-2.rds.amazonaws.com');
define('DB_USERNAME', 'admin');
define('DB_PASSWORD', 'sunnyshutter');
define('DB_DATABASE', 'test');
?>

<html>
<body>
<h1>Warranty test page</h1>
<?php

  /* Connect to MySQL and select the database. */
  $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();

  $database = mysqli_select_db($connection, DB_DATABASE);

  /* Ensure that the WARRANTY table exit. */
  VerifyWARRANTYTable($connection, DB_DATABASE);

  /* If input fields are populated, add a row to the WARRANTY table. */
  $customer_name = htmlentities($_POST['NAME']);
  $customer_phone = htmlentities($_POST['PHONE']);
  $customer_email = htmlentities($_POST['EMAIL']);
  $customer_invoice = htmlentities($_POST['INVOICE']);
  $customer_address = htmlentities($_POST['ADDRESS']);

  if (strlen($customer_name) || strlen($customer_phone || strlen($customer_email) || strlen($customer_invoice) || strlen($customer_address))) {
    Addcustomer($connection, $customer_name, $customer_phone, $customer_email, $customer_invoice,$customer_address);
  }
?>

<!-- Input form -->
<!-- <form action="<?PHP echo $_SERVER['SCRIPT_NAME'] ?>" method="POST">
  <table border="0">
    <tr>
      <td>NAME</td>
      <br>
      <td>ADDRESS</td>
    </tr>
    <tr>
      <td>
        <input type="text" name="NAME" maxlength="45" size="30" />
      </td>
      <td>
        <input type="text" name="ADDRESS" maxlength="90" size="60" />
      </td>
      <td>
        <input type="submit" value="Add Data" />
      </td>
    </tr>
  </table>
</form> -->

<form action="<?PHP echo $_SERVER['SCRIPT_NAME'] ?>" method="POST">
  <table border="0">
      
    <tr>
      <td>NAME</td>
      <br>
      <td><input type="text" name="NAME" maxlength="45" size="30" /></td>
    </tr>

    <tr>
      <td>PHONE</td>
      <td>
        <input type="tel" name="PHONE" maxlength="10" size="20" />
      </td>
    </tr>

    <tr>
      <td>EMAIL</td>
      <td>
        <input type="email" name="EMAIL" maxlength="90" size="60" />
      </td>
    </tr>

    <tr>
      <td>INVOICE</td>
      <td>
        <input type="text" name="INVOICE" maxlength="90" size="60" />
      </td>
    </tr>

    <tr>
      <td>ADDRESS</td>
      <td>
        <input type="text" name="ADDRESS" maxlength="90" size="60" />
      </td>
    </tr>

    <td>
        <input type="submit" value="Add Data" />
      </td>
  </table>
</form>


<table border="1" cellpadding="2" cellspacing="2">
  <tr>
    <td>ID</td>
    <td>NAME</td>
    <td>PHONE</td>
    <td>EMAIL</td>
    <td>INVOICE</td>
    <td>ADD]RESS</td>
  </tr>

<?php

$result = mysqli_query($connection, "SELECT * FROM WARRANTY");

while($query_data = mysqli_fetch_row($result)) {
  echo "<tr>";
  echo "<td>",$query_data[0], "</td>",
       "<td>",$query_data[1], "</td>",
       "<td>",$query_data[2], "</td>",
       "<td>",$query_data[3], "</td>",
       "<td>",$query_data[4], "</td>",
       "<td>",$query_data[5], "</td>";
  echo "</tr>";
}
?>

</table>

<!-- Clean up. -->
<?php

  mysqli_free_result($result);
  mysqli_close($connection);

?>

</body>
</html>


<?php

/* Add an customer to the table. */
function Addcustomer($connection, $name, $phone, $email, $invoice, $address) {
   $n = mysqli_real_escape_string($connection, $name);
   $p = mysqli_real_escape_string($connection, $phone);
   $e = mysqli_real_escape_string($connection, $email);
   $i = mysqli_real_escape_string($connection, $invoice);
   $a = mysqli_real_escape_string($connection, $address);

   $query = "INSERT INTO WARRANTY (NAME, PHONE, EMAIL, INVOICE, ADDRESS) VALUES ('$n','$p','$e','$i', '$a');";

   if(!mysqli_query($connection, $query)) echo("<p>Error adding customer data.</p>");
}

/* Check whether the table exists and, if not, create it. */
function VerifyWarrantyTable($connection, $dbName) {
  if(!TableExists("WARRANTY", $connection, $dbName))
  {
     $query = "CREATE TABLE WARRANTY (
         ID int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
         NAME VARCHAR(45),
         PHONE VARCHAR(11), 
         EMAIL VARCHAR(90),
         INVOICE VARCHAR(12),
         ADDRESS VARCHAR(90)
       )";

     if(!mysqli_query($connection, $query)) echo("<p>Error creating table.</p>");
  }
}

/* Check for the existence of a table. */
function TableExists($tableName, $connection, $dbName) {
  $t = mysqli_real_escape_string($connection, $tableName);
  $d = mysqli_real_escape_string($connection, $dbName);

  $checktable = mysqli_query($connection,
      "SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_NAME = '$t' AND TABLE_SCHEMA = '$d'");

  if(mysqli_num_rows($checktable) > 0) return true;

  return false;
}
?>                        
    