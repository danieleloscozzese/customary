import { relyOn } from "rely-on";

/**
 * Sets up a form with an event listener on the submit event that prevents
 * submission.
 */
export default function preventFormSubmission(
  formId: string,
  callback?: (form: HTMLFormElement) => void
): void {
  const form = relyOn(
    document.getElementById(formId),
    `There is no element with ID ${formId} in the document.`
  );

  if (form instanceof HTMLFormElement) {
    const submitHandler = function(submission: Event) {
      submission.preventDefault();

      if (callback) {
        callback(form);
      } else {
        return;
      }
    };

    form.addEventListener("submit", submitHandler, <any>{
      capture: true,
      passive: false,
      once: false
    });
  } else {
    throw new TypeError(`The element with id ${formId} is not a form.`);
  }
}
