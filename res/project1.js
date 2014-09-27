// Creating an empty Div
var i = 1; // Created a variable to start the classes of the divs.
if(i < 5){ // Condition divs with class lower than 5. Made for "jerks" to stop clicking repeatedly on button and make the PC slower or crash the page. 
      document.getElementById('div1').onclick = function createDiv() { // The function made by Jofre to create divs
      document.body.insertAdjacentHTML("beforeend", '<div class="test '+i+++'" style="background-color: #'+Math.floor(Math.random()*16777215).toString(16)+'"></div>');
         if(i > 5){ // Condition if the divs class are grater than 5, remove the click function
            document.getElementById('div1').disabled = true;
            alert('Oops!! You have reached the limited elements on page. Please upgrade your plan to get unlimited features!');
            }
         }
   }