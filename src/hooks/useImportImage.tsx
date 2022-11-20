import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { ErrorInterface } from "../interfaces";
import logos from "../assets/logos/scoot.svg";

interface Props {
  imageName: string;
}

const useImportImage = ({
  imageName,
}: Props): [any, ErrorInterface, boolean] => {
  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorInterface>({ error: false });

  const importImage = async () => {
    try {
      const loadedImage = await import(`../assets/logos/${imageName}`);
      setImage(loadedImage.default);
    } catch (e) {
      const error: ErrorInterface = { error: true };
      if (e instanceof Error) {
        error.message = e.message;
      } else if (typeof e === "string") {
        error.message = e;
      }

      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    importImage();
  }, [imageName]);

  return [image, error, loading];
};

export default useImportImage;
