function insert_Row() {
    const table = document.getElementById("sampleTable");

    // Insert row at the top (index 0)
    const newRow = table.insertRow(0);

    // Insert two cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set values
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}