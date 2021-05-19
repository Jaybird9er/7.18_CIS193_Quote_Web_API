window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   let xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json";
   let queryStr = "topic=" + topic.value + "&count=" + count.value;
   xhr.open("GET", "https://wp.zybooks.com/quotes.php?" + queryStr);
   xhr.send();
   
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";
   //document.querySelector("#quotes").innerHTML = html; // responseReceivedHandler();
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
   if (this.status === 200) {
      let quoteObj = this.response;
      //let quoteObj = JSON.parse(test);
      document.querySelector("#quotes").innerHTML = quoteObj.quote;
      //this.response;
   }
   // else {

   // }
}