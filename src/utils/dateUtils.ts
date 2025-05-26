export const isPastDue = (dueDate: string): boolean => {
  return new Date() > new Date(dueDate);
};
export const getCurrentMonth = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
};

export const getToday = (): string => {
  const now = new Date();
  return now.toISOString().split("T")[0];
};
