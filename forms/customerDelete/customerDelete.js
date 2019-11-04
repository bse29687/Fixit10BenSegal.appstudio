let customerInfo = []
resultsDelete = ""
customerDelete.onshow = function() {
  let query = "SELECT DISTINCT name FROM customer ORDER BY name"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "host=ormond.creighton.edu&user=bse29687&pass=common92&database=bse29687&query=" + query);
    if (req1.status == 200) {
    customerInfo = JSON.parse(req1.responseText)
    for (i = 0; i < customerInfo.length; i++)
    resultsDelete = resultsDelete + customerInfo[i][1] + "\n"
    txtaName.value = resultsDelete
  }
}


btnDelete.onclick=function(){
  let nameAdd = inptAddName.value
  let found = false
      for (i = 0; i < customerInfo.length; i++) {
        if (nameDelete == customerInfo[i][1])
          found = true
  }
if (found == false){
textaName2.value = "This person is not a customer"
} else if (found == true){
  let deleteQuery = "DELETE name FROM customer WHERE name = " + '"' + nameAdd + '"'
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + deleteQuery);
 if (req1.status == 200) {
   if (req1.responseText == 500)
            txtaCompany2.value="You have successfully removed the name " + nameAdd
        else
            txtaCompany2.value="There was a problem removing " + nameDelete + " from the database."
      } else {
        txtaCompany1.value = "Error: " + req1.status;
        }
      }  
  }