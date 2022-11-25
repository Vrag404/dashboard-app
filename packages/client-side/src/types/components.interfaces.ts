import { ChangeEventHandler, MouseEventHandler } from "react";

export interface IButton {
  text: string,
  onClick: MouseEventHandler<HTMLButtonElement> | undefined,
}

export interface IInput {
  type: string,
  placeholder: string,
  value: string | number | undefined,
  onChange: ChangeEventHandler<HTMLInputElement>
}