"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preventSubmission = preventSubmission;
function preventSubmission(submission, callback) {
  submission.preventDefault();
  if (callback) {
    callback();
  } else {
    return;
  }
}