const productNameInput = document.getElementById("productNameInput")
const productCategoryInput = document.getElementById("productCategoryInput")
const productPriceInput = document.getElementById("productPriceInput")
const productDiscountInput = document.getElementById("productDiscountInput")
const productQuantityInput = document.getElementById("productQuantityInput")
const productDescriptionInput = document.getElementById("productDescriptionInput")
const addProductBtn = document.getElementById("addProductBtn")
const updateProductBtn = document.getElementById("updateProductBtn")
const showData = document.getElementById("showData")
const searchInput = document.getElementById("searchInput")

let storage;
if (localStorage.getItem("storage")) {
    storage = JSON.parse(localStorage.getItem("storage"))
    show(JSON.parse(localStorage.getItem("storage")))
}
else {
    storage = []
}

// create
addProductBtn.addEventListener("click", () => {
    // do not accept user input if not all fields are filled
    if (!productNameInput.value ||
        !productCategoryInput.value ||
        !productPriceInput.value ||
        !productDiscountInput.value ||
        !productQuantityInput.value ||
        !productDescriptionInput.value) {
        window.alert("missing input fiels: please fill all fields!")
    }
    else {

        let newRecord = {
            productName: productNameInput.value,
            productCategory: productCategoryInput.value,
            productPrice: productPriceInput.value,
            productDiscount: productDiscountInput.value,
            productQuantity: productQuantityInput.value,
            productDescription: productDescriptionInput.value
        };

        storage.push(newRecord);
        localStorage.setItem("storage", JSON.stringify(storage));

        console.log(JSON.parse(localStorage.getItem("storage")))
        show(JSON.parse(localStorage.getItem("storage")))
    }
    clearInputFields()
})

// read
function show(arr) {
    showData.innerHTML = ""; // Clear existing data
    arr.forEach((data, index) => {
        let row = `
            <tr>
                <td>${data.productName}</td>
                <td>${data.productCategory}</td>
                <td>${data.productPrice}</td>
                <td>${data.productDiscount}</td>
                <td>${data.productQuantity}</td>
                <td>${data.productDescription}</td>
                <td><button class="btn btn-outline-success" id="update-${index}">update</button></td>
                <td><button class="btn btn-outline-info" id="delete-${index}">delete</button></td>
            </tr>
        `;
        showData.innerHTML += row;
    });

    arr.forEach((data, index) => {
        document.getElementById(`delete-${index}`).addEventListener('click', () => deletRecord(index));
        document.getElementById(`update-${index}`).addEventListener('click', () => updateRecord(index));
    });
}

// delete
function deletRecord(index) {
    storage.splice(index, 1);
    localStorage.setItem("storage", JSON.stringify(storage));
    show(storage);
}

// update
function updateRecord(index) {
    let updatedName = prompt("Enter new product name:", storage[index].productName);
    let updatedCategory = prompt("Enter new product category:", storage[index].productCategory);
    let updatedPrice = prompt("Enter new product price:", storage[index].productPrice);
    let updatedDiscount = prompt("Enter new product discount:", storage[index].productDiscount);
    let updatedQuantity = prompt("Enter new product quantity:", storage[index].productQuantity);
    let updatedDescription = prompt("Enter new product description:", storage[index].productDescription);

    storage[index] = {
        productName: updatedName,
        productCategory: updatedCategory,
        productPrice: updatedPrice,
        productDiscount: updatedDiscount,
        productQuantity: updatedQuantity,
        productDescription: updatedDescription
    };

    localStorage.setItem("storage", JSON.stringify(storage));
    show(storage);
}

// search
searchInput.addEventListener("input", () => {
    let key = searchInput.value.trim().toLowerCase();
    let filteredStorage = storage.filter(row => {
        let productNameMatch = row.productName.toLowerCase().includes(key);
        let productCategoryMatch = row.productCategory.toLowerCase().includes(key);
        return productNameMatch || productCategoryMatch;
    });
    show(filteredStorage);
});

// clear input fields after each supmit
function clearInputFields() {
    productNameInput.value = ""
    productCategoryInput.value = ""
    productPriceInput.value = ""
    productDiscountInput.value = ""
    productQuantityInput.value = ""
    productDescriptionInput.value = ""
}