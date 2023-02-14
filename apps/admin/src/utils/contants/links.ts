export const baseUrl = process.env.NEXT_PUBLIC_ADMIN_APP_URL;
export const adminBaseUrl = `${baseUrl}`;

export const adminPages = {
  main: `${adminBaseUrl}`,
  questionsCategories: `${adminBaseUrl}/questions-categories`,
};
