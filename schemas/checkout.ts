import { z } from "zod";

export const schemaFormCheckout = z.object({
  address: z.string().min(1, "Alamat harus diisi"),
  payment_method: z.string().min(1, "Metode pembayaran harus diisi"),
});

export type SchemaFormCheckout = z.infer<typeof schemaFormCheckout>;
