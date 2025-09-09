import { ImagePickerAsset } from "expo-image-picker";
import { z } from "zod";

export const validateWithZod = (schema: z.ZodSchema<any>) => (values: any) => {
  const result = schema.safeParse(values);
  if (result.success) return {};

  const errors: Record<string, string> = {};

  result.error.issues.forEach((err) => {
    const path = err.path[0];
    errors[path as string] = err.message;
  });

  return errors;
};

export const toUploadImage = (
  asset: ImagePickerAsset
): {
  uri: string;
  name: string | null | undefined;
  type: string | undefined;
} => {
  return {
    uri: asset.uri,
    name: "image",
    type: asset.mimeType,
  };
};
