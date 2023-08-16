import { DogImg, Wrapper } from "./Dogs.styles";
import type { IDogsUIProps } from "./Dogs.types";

export default function DogsUI(props: IDogsUIProps): JSX.Element {
  return (
    <Wrapper>
      <div>
        {props.dogs.map((item, index: number) => (
          <>
            <DogImg key={item} src={item} />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </Wrapper>
  );
}
