
function addTask() {
    var getInput = document.getElementById("getInput");
    var inputValue = getInput.value;

    if (inputValue !== "") {
        var getUlList = document.getElementById("getUlList")
        var getLiList = document.createElement("li")
        getLiList.textContent = inputValue;
        // console.log(getLiList);


        getUlList.appendChild(getLiList)
        // Clear the input field by setting its value to an empty string
        getInput.value = ""


        // Add an onclick event handler to the <li> element
        getLiList.onclick = function () {
            // Toggle the "completed" class of the <li> element when clicked
            this.classList.toggle("completed")
        }

    } else {
        alert("You must enter the to do task ")
    }
}