
btnChoice.onclick=function(){
  let state = inptState.value
  let query = "SELECT name FROM customer WHERE state = " + '"' + state '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + query)
  
  if (req1.status == 200) {
    results = JSON.parse(req1.responseText)
  if (results.length = 0)
  Nsb.MsgBox("No companies are from that state")
   else {
  lblResult.value = results + "\n"
  else {
  let message = ""
  for (i = 0; i<= results.length - 1; i++)
      message = message + results[i][1] + "\n"
    lblResults.value = message 
  }
} else 
    NSB.MsgBox("Error code: " + req1.status) 
}
customerSelect.onshow=function(){
    let query = "SELECT state FROM customer" 
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user= bse29687&pass=BIA375pass&database=bse29687&query=" + query)
     if (req1.status == 200) {
        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("There are no states in this table.")
    else {       
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtStates.value = message
      }
    
  } else
        NSB.MsgBox("Error code: " + req1.status)
}