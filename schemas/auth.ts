import { z } from "zod";

export const schemaFormLogin = z.object({
  email: z.email("Format email salah"),
  password: z.string().min(1, "Password harus diisi"),
});

export type SchemaFormLogin = z.infer<typeof schemaFormLogin>;
