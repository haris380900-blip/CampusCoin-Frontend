import validator from "validator";

export const isValidEmail = (email) => validator.isEmail(String(email || ""));
export const isStrongPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(String(password || ""));
export const isValidPhone = (phone) => validator.isMobilePhone(String(phone || ""), "any");
export const isValidUsername = (username) => /^[a-zA-Z0-9_]{3,30}$/.test(String(username || ""));
