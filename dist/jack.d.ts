declare module 'customary' {
    /**
     * Sets up a form with an event listener on the submit event that prevents
     * submission.
     */
    function preventFormSubmission(formId: string, callback?: (form: HTMLFormElement) => void): void;
}