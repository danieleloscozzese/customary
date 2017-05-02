// @flow

/**
 * Sets up a form with an event listener on the submit event that prevents
 * submission.
 */
export default function preventFormSubmission(formId: string, callback?: (form: HTMLFormElement) => void): void {
  const form = document.getElementById(formId);

  if (form === null) {
    throw new Error(`The form with id ${formId} was not found on the page.`);
  } else if (form instanceof HTMLFormElement) {
    const submitHandler = function(submission: Event) {
      submission.preventDefault();

      if (callback) {
        callback(form);
      } else {
        return;
      }
    }

  form.addEventListener('submit', submitHandler,  {capture: true, passive: false, once: false });
} else {
  throw new TypeError(`The element with id ${formId} is not a form.`);
}
}
