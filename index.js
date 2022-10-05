var customerName = 'bob';

// Needed to use toUpperCase function to modify the variable name. 

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// If do not preface a variable with const, let or var then it will automatically become a global variable. Not recommended.  
function setBestCustomer() {
    bestCustomer = "not bob";
}

// Since bestCustomer was declared as a global variable inside the previous function, just need to reassign the value to 'not bob' inside the new function. 

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = "Tom";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Greg';
}
