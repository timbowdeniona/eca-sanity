import { isValid, parse } from "date-fns";

const supportedFormats = [
  "yyyy-MM-dd",
  "MM/dd/yyyy",
  "dd/MM/yyyy",
  "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
  "MM-dd-yyyy",
  "yyyy/MM/dd",
  "MMM dd, yyyy",
  "MMMM dd, yyyy",
  "dd MMM yyyy",
  "dd MMMM yyyy",
];

const parseDate = (date: string): Date => {
  for (const format of supportedFormats) {
    const parsedDate = parse(date, format, new Date());
    if (isValid(parsedDate)) {
      return parsedDate;
    }
  }
  return new Date(date);
};

export default parseDate;
