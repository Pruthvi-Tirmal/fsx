import { z } from "zod";

export const storageOptionsEnum = z.enum(["p2p", "permanent", "temporary"], {
  message: "Please select storage option!",
});

export type StorageOptions = z.infer<typeof storageOptionsEnum>;

export const planOptionsEnum = z.enum(["free", "pro", "try"]);
export type PlanOptions = z.infer<typeof planOptionsEnum>;

export const expiryOptionsEnum = z
  .enum(["min", "hr", "day"], {
    message: "Please select expiry option!",
  })
  .optional();

export type ExpiryOptions = z.infer<typeof expiryOptionsEnum>;
