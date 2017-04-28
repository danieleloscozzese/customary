// @flow

export function preventSubmission(submission: Event, callback?: () => void): void {
  submission.preventDefault();
  if (callback) {
    callback();
  } else {
    return;
  }
}
