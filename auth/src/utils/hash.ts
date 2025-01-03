import * as argon2 from 'argon2';
// 使用 argon2 加密
export const hashWithArgon2 = async (password: string): Promise<string> => {
  return argon2.hash(password);
};

// 使用 argon2 验证
export const compareWithArgon2 = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return argon2.verify(hashedPassword, plainPassword);
};
