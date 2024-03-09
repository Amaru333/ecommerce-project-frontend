export const setLocalStorageAuthToken = (token: string) => {
  console.log(token);
  localStorage.setItem("fone-auth-token", token);
};

export const getLocalStorageAuthToken = () => {
  return localStorage.getItem("fone-auth-token");
};

export const removeLocalStorageAuthToken = () => {
  localStorage.removeItem("fone-auth-token");
};
