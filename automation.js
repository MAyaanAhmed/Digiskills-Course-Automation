// This code will be injected and executed on the specified website

// Function to check the completion status periodically
function checkCompletionStatus() {
    const completionStatusElement = document.querySelector('.lblCompletion .fa'); // Replace with the appropriate selector for the completion status element

    // Check if the completion status element exists
    if (completionStatusElement) {
        // Check if the completion status changes to a green checkmark
        if (completionStatusElement.classList.contains('fa-check-circle')) { // Replace with the appropriate class name for the green checkmark
            // Locate the Next button
            const nextButton = document.querySelector('#ctl00_ContentPlaceHolder1_lbtnNextLessonTop'); // Replace with the appropriate selector for the Next button element

            // Click the Next button if it exists
            if (nextButton) {
                nextButton.click();
            }
        }
    }
}

// Call the checkCompletionStatus function periodically
setInterval(checkCompletionStatus, 5 * 1000); // Adjust the interval time as needed (in milliseconds)