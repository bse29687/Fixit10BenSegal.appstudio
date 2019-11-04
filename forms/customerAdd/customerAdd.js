let customerInfo1 = []
resultsAdd = ""
customerAdd.onshow = function() {
  let query = "SELECT DISTINCT name FROM customer ORDER BY name"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + query);
    if (req1.status == 200) {
    customerInfo = JSON.parse(req1.responseText)
    for (i = 0; i < customerInfo1.length; i++)
    resultsAdd = resultsAdd + customerInfo1[i][1] + "\n"
    txtaName3.value = resultsAdd
  }
}


btnAdd.onclick=function(){
    var newName = 'Jesse Antiques'
    var newStreet = '113 F St'
    var newCity = 'Omaha'
    var newState = 'NE'
    var newZipcode = '68178'
    var newQuery = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + customerName + "', '" + customerStreet + "', '" + customerCity + "', '" + customerState + "', '" + customerZipcode + "')"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + query);
    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            var result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added Jesse!")
        } else
            NSB.MsgBox("There was a problem with adding Jesse.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}
