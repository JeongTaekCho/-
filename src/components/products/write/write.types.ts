import { ChangeEvent } from "react";

export interface IProductWriteUiProps {
  onChangeFiles: (event: ChangeEvent<HTMLInputElement>) => void;
}
