// Function to format the amount of money in the budget
export const formatAmount = amount => {
  /* The use of the argument 'en-ES' does not add the thousands separator to four-digit numbers, it only adds it to five-digit numbers and above */
  return amount.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 4,
  });
};
