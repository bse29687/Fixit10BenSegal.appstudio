let customerInfo = []
resultsAdd = ""
customerAdd1.onshow = function() {
  let query = "SELECT DISTINCT name FROM customer ORDER BY name"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "host=ormond.creighton.edu&user=bse29687&pass=common92&database=bse29687&query=" + query);
    if (req1.status == 200) {
    customerInfo = JSON.parse(req1.responseText)
    for (i = 0; i < customerInfo.length; i++)
    resultsAdd = resultsAdd + customerInfo[i][1] + "\n"
    txtaName1.value = resultsAdd
  }
}



btnAdd1.onclick=function(){
  let nameAdd = inptNameAdd.value
  let found = false
      for (i = 0; i < customerInfo.length; i++) {
        if (nameAdd == customerInfo[i][1])
          found = true
  }
if (found == false){
textaName2.value = "This person is not a customer"
} else if (found == true){
  let addQuery = "INSERT name INTO customer WHERE name = " + '"' + nameAdd + '"'
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + deleteQuery);
 if (req1.status == 200) {
   if (req1.responseText == 500)
            txtaCompany1.value="You have successfully removed the name " + nameAdd
        else
            txtaCompany1.value="There was a problem removing " + nameAdd + " from the database."
      } else {
        txtaCompany1.value = "Error: " + req1.status;
        }
      }  
  }
}
