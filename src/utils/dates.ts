import moment from "moment";
export function dateFromNow(value: string) {
  return moment(value).fromNow(); // here u modify data
}

export function dateFromMMDOYYYY(value: string) {
  return moment(value).format("MMM Do YY"); // here u modify data
}
