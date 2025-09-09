import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export function useHandleImage() {
  const [image, setImage] = useState<ImagePicker.ImagePickerResult>();

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
      });
      if (!result.canceled) {
        setImage(result);
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };

  const resetImage = () => setImage(undefined);

  return {
    handlePickImage,
    resetImage,
    image,
  };
}
