"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rely_on_1 = require("rely-on");
/**
 * Sets up a form with an event listener on the submit event that prevents
 * submission.
 */
function preventFormSubmission(formId, callback) {
    const form = rely_on_1.relyOn(document.getElementById(formId), `There is no element with ID ${formId} in the document.`);
    if (form instanceof HTMLFormElement) {
        const submitHandler = function (submission) {
            submission.preventDefault();
            if (callback) {
                callback(form);
            }
            else {
                return;
            }
        };
        form.addEventListener('submit', submitHandler, { capture: true, passive: false, once: false });
    }
    else {
        throw new TypeError(`The element with id ${formId} is not a form.`);
    }
}
exports.default = preventFormSubmission;
//# sourceMappingURL=jack.js.map