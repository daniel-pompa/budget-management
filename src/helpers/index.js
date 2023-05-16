// Function to format the amount of money in the budget
export const formatAmount = amount => {
  /* The use of the argument 'en-ES' does not add the thousands separator to four-digit numbers, it only adds it to five-digit numbers and above */
  return amount.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 4,
  });
};

// Function to generate a unique id for each expense
export const generateID = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return random + date;
};

// Function to change date format
export const formatDate = date => {
  const newDate = new Date(date);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return newDate.toLocaleDateString('es-ES', options);
};
