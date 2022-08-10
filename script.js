// Function to compute the interest for a given amount and rate.
function compute()
{
    // get the principal control
    var principal = document.getElementById("principal");
    var principalInt = principal.value;
    // validate principal is a number greater than 0. ie: a postive number
    if (principalInt <= 0) {
        alert("Enter a positive number");
        principal.focus();
        return;
    }
    // get the rate value
    var rate = document.getElementById("rate").value;
    // get the number of years value
    var years = document.getElementById("years").value;
    // calculate the interest
    var interest = principalInt * years * rate / 100;
    // get the current year and add the selected number of years
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    // text to display to user after interest has been calculated
    var text = "<span>If you deposit </span><span style=\"background-color: #FFFF00\">" + principalInt + "</span>,<br><span>at an interest rate of <span style=\"background-color: #FFFF00\">" + rate + "</span>%,</span><br><span>You will recieve an amount of <span style=\"background-color: #FFFF00\">" + interest + "</span>,</span><br><span>in the year <span style=\"background-color: #FFFF00\">" + year +"</span></span";
    result.innerHTML = text;
}

// Function to update the rate label
function updateRate(){
    var rateval = document.getElementById("rate").value;
    // set the rate label with latest slider range
    document.getElementById("rate_val").innerText = rateval;    
}