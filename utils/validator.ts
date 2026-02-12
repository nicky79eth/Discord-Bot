import { isAddress } from "ethers";

export const validator = {
  isEthereumAddress(address: string): boolean {
    return isAddress(address);
  },

  isPositiveNumber(value: string | number): boolean {
    const num = typeof value === "string" ? Number(value) : value;
    return !isNaN(num) && num > 0;
  },

  isInteger(value: string | number): boolean {
    const num = typeof value === "string" ? Number(value) : value;
    return Number.isInteger(num);
  },

  isNonEmptyString(value: unknown): boolean {
    return typeof value === "string" && value.trim().length > 0;
  },

  isValidDiscordId(id: string): boolean {
    return /^[0-9]{17,20}$/.test(id);
  }
};
