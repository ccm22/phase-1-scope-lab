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


// This shows that a constant variable cannot be reassigned because it is a constant. 
// If used let or var it can be reassigned, but not with const. 

const leastFavoriteCustomer = "Tom";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Greg';
}
