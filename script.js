function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
  }
  
  function compute() {
    p = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = (p * years * rate) / 100;
    year = new Date().getFullYear() + parseInt(years);
    if (p <= 0) {
      alert("Enter a positive number");
    } else {
      document.getElementById(
        "result"
      ).innerHTML = `<br/> If you deposit ${p}, <br/> 
      at an interest rate of ${rate}%. <br/> 
        You will receive an amount of ${interest}, <br/> 
        in the year ${year}.<br/>`;
    }
  }
        