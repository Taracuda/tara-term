function validateContactForm() {
    const nameIsValid = validateName();

    if (nameIsValid) {
        return;
    } else {
        return false;
    }
}

function validateName() {
    const firstName = document.forms["contactForm"]["firstName"].value;
    const lastName = document.forms["contactForm"]["lastName"].value;

    const stringMatcher = /^[A-Za-z]+$/;
    const fnameHasOnlyAlpha = firstName.match(stringMatcher);
    const lnameHasOnlyAlpha = lastName.match(stringMatcher);
    const notValid = (firstName.length < 2 || lastName.length < 2) || !fnameHasOnlyAlpha || !lnameHasOnlyAlpha;

    if (notValid) {
        alert("First name and last name must contain only letters. Both must be 2 or more characters long.");
        return false;
    } else {
        return true;
    }
}