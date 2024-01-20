import * as z from "zod";

export const scuritySchema = z.object({
  plainText: z.string({ required_error: "plainText is required" }),
});
