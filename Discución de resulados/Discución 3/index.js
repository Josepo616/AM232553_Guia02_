function bubbleSort(arr, order) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if ((order === "asc" && arr[j] > arr[j + 1]) || (order === "desc" && arr[j] < arr[j + 1])) {
          // Intercambiar elementos
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        }
    }
    }
    return arr;
}

document.getElementById("sortButton").addEventListener("click", function() {
    const inputValues = document.getElementById("inputValues").value;
    const orderType = document.getElementById("orderType").value;
    
    const valuesArray = inputValues.split(",").map(value => parseFloat(value.trim()));
    const originalListDiv = document.getElementById("originalList");
    const sortedListDiv = document.getElementById("sortedList");
    originalListDiv.textContent = `Listado original: ${valuesArray.join(", ")}`;
    
    const sortedArray = bubbleSort([...valuesArray], orderType);
    sortedListDiv.textContent = `Listado ordenado: ${sortedArray.join(", ")}`;
});
