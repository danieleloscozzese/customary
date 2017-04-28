'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preventFormSubmission;


/**
 * Sets up a form with an event listener on the submit event that prevents
 * submission.
 */
function preventFormSubmission(formId, callback) {
  var form = document.getElementById(formId);

  if (form === null) {
    throw new Error('The form with id ' + formId + ' was not found on the page.');
  } else {
    var submitHandler = function submitHandler(submission) {
      submission.preventDefault();

      if (callback) {
        callback();
      } else {
        return;
      }
    };

    form.addEventListener('submit', submitHandler, { capture: true, passive: false, once: false });
  }
}