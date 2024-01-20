export const convertMinutesToHoursAndDays = (minutes) => {
  if (minutes === 0) {
    return "< 1m";
  }

  const days = Math.floor(minutes / (24 * 60));
  const remainingHours = Math.floor((minutes % (24 * 60)) / 60);
  const remainingMinutes = minutes % 60;

  let result = "";

  if (days > 0) {
    result += `${days}d`;
    if (remainingHours > 0 || remainingMinutes > 0) {
      result += " and";
    }
  }

  if (remainingHours > 0) {
    result += ` ${remainingHours}h`;
    if (remainingMinutes > 0) {
      result += " and";
    }
  }

  if (remainingMinutes > 0) {
    result += ` ${remainingMinutes}m`;
  }

  return result.trim();
};
