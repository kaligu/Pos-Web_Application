$('#btnCustomerForm').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#DasboardForm").style.display="none";
    document.querySelector("#OrderDetailsForm").style.display="none";
    document.querySelector("#placeOrderForm").style.display="none";
    document.querySelector("#customerForm").style.display="block";
    document.querySelector("#itemForm").style.display="none";
});

$('#btnItemForm').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#DasboardForm").style.display="none";
    document.querySelector("#OrderDetailsForm").style.display="none";
    document.querySelector("#placeOrderForm").style.display="none";
    document.querySelector("#itemForm").style.display="block";
    document.querySelector("#customerForm").style.display="none";
});

$('#btnPlaceorderForm').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#DasboardForm").style.display="none";
    document.querySelector("#OrderDetailsForm").style.display="none";
    document.querySelector("#placeOrderForm").style.display="block";
    document.querySelector("#itemForm").style.display="none";
    document.querySelector("#customerForm").style.display="none";
});

$('#btnOrderDetailsForm').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#DasboardForm").style.display="none";
    document.querySelector("#OrderDetailsForm").style.display="block";
    document.querySelector("#placeOrderForm").style.display="none";
    document.querySelector("#itemForm").style.display="none";
    document.querySelector("#customerForm").style.display="none";
});

$('#logoName').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#DasboardForm").style.display="block";
    document.querySelector("#OrderDetailsForm").style.display="none";
    document.querySelector("#placeOrderForm").style.display="none";
    document.querySelector("#itemForm").style.display="none";
    document.querySelector("#customerForm").style.display="none";
});