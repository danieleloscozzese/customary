// @flow

/**
 * Sets up a form with an event listener on the submit event that prevents
 * submission.
 */
export default function preventFormSubmission(formId: string, callback?: () => void): void {
  const form = document.getElementById(formId);

  if (form === null) {
    throw new Error(`The form with id ${formId} was not found on the page.`);
  } else {
    const submitHandler = function(submission: Event) {
      submission.preventDefault();

      if (callback) {
        callback();
      } else {
        return;
      }
    }

  form.addEventListener('submit', submitHandler,  {capture: true, passive: false, once: false });
  }
}
