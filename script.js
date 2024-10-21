function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    
    // Validate principal input
    if (principal <= 0 || principal === '') {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
        return;
    }
    
    // Update result with a smooth animation
    result.style.opacity = 0; // Hide the result first for smooth transition
    setTimeout(function () {
        result.innerHTML = `
        If you deposit <mark>$${principal}</mark>,<br>
        at an interest rate of <mark>${rate}%</mark>,<br>
        You will receive an amount of <mark>$${amount.toFixed(2)}</mark>,<br>
        in the year <mark>${year}</mark><br>`;
        result.style.opacity = 1; // Fade in the result
    }, 300); // Small delay for smoother experience
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
