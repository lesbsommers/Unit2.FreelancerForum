 // freelancers array: Contains an initial set of freelancer objects, 
 // where each freelancer has a name, occupation, and price (hourly rate)
 const freelancers = [
    {name: "Alice", occupation: "Writer", price: 30},
    {name: "Bob", occupation: "Teacher", price: 50}
 ];

 // predefined lists of names and occupations for random generation of new freelancers
 const names = ["James", "Leroy", "Mark", "Debbie", "Hilda"];
 const occupations = ["Writer", "Tutor", "Software Engineer", "Editor", "Interior Designer"];

 document.body.style.backgroundColor = "grey";
 document.querySelector("table").style.border = "5px dotted black";
 document.querySelector("table").style.color = "white";
 document.querySelectorAll("th", "td").forEach(cell => {
    cell.style.border = "3px dotted black";
 });

 // this function renders the list of freelancers as table rows
function renderFreelancers() {
    const list = document.getElementById(".freelaner-list");
    list.innerHTML = ""; // clears any previous rows in the table.

    // forEach() method loops through each freelancer object. 
    freelancers.forEach(freelancer => {
        const row = document.createElement("tr"); // for each freelancer, a new <tr> element is created.

        // Create table cells and populate with freelancer data
        const nameCell = document.createElement("td");
        nameCell.style.textAlign = "center";
        nameCell.textContent = freelancer.name;

        const occupationCell = document.createElement("td");
        occupationCell.style.textAlign = "center";
        occupationCell.textContent = freelancer.occupation;

        const priceCell = document.createElement("td");
        priceCell.style.textAlign = "center";
        priceCell.textContent = freelancer.price;

        // Append cells to the row
        row.appendChild(nameCell);
        row.appendChild(occupationCell);
        row.appendChild(priceCell);

        // Append row to the list
        list.appendChild(row);
    });

    // Update the average price after rendering
    updateAveragePrice();
}

// this function calculates the average price of all freelancers and updates 
// an HTML element with the ID #average-price
function updateAveragePrice() {
    const average = freelancers.reduce((sum, f) => sum + f.price, 0) / freelancers.length; // the reduce() method is used to sum the price of all freelancers.
    document.getElementById("#average-price").textContent = average.toFixed(2);
}

// this function adds a random freelancer to the freelancers array and re-renders the table.
function addRandomFreelancer() {
    if (freelancers.length >= 50) return;
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 100) + 20;

    freelancers.push({name, occupation, price});
    renderFreeLancers();
}

// this part adds random freelancers automatically at an interval.
renderFreelancers();
const interval = setInterval(() => { 
    if (freelancers.length >= 30) {
        clearInterval(interval);
    } else {
        addRandomFreelancer();
    }
}, 5000); // setInterval() is used to run the function every 5000 milliseconds (5 seconds).
