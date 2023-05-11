


$('#btnCustomerForm').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#customerForm").style.display="block";
    document.querySelector("#itemForm").style.display="none";
});

$('#btnItemForm').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#itemForm").style.display="block";
    document.querySelector("#customerForm").style.display="none";
});