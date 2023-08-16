import { useEffect, useState } from "react";
import DogsUI from "./Dogs.presenter";
import axios from "axios";

export default function Dogs(): JSX.Element {
  const [dogs, setDogs] = useState<string[]>([]);

  useEffect(() => {
    const getDogs = async (): Promise<void> => {
      new Array(9).fill(1).forEach(async (_) => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random",
        );
        setDogs((prev) => [...prev, result.data.message]);
      });
    };
    void getDogs();
  }, []);
  return <DogsUI dogs={dogs} />;
}
