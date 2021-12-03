import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function TrashIcon({
  open,
  ...rest
}: Props & {
  open?: boolean;
}): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...rest}>
      {open ? (
        <>
          <path d="M18 9L17.5031 18.1089C17.4453 19.1696 16.5684 20 15.5061 20H8.49388C7.43164 20 6.55471 19.1696 6.49685 18.1089L6 9H18ZM10 10.5C9.44772 10.5 9 10.9477 9 11.5V16.5C9 17.0523 9.44772 17.5 10 17.5C10.5523 17.5 11 17.0523 11 16.5V11.5C11 10.9477 10.5523 10.5 10 10.5ZM14 10.5C13.4477 10.5 13 10.9477 13 11.5V16.5C13 17.0523 13.4477 17.5 14 17.5C14.5523 17.5 15 17.0523 15 16.5V11.5C15 10.9477 14.5523 10.5 14 10.5Z" />
          <path d="M13.2869 3.67198C13.191 3.12808 12.6724 2.76492 12.1285 2.86082L10.1588 3.20811C9.61495 3.30402 9.25178 3.82268 9.34769 4.36657L9.52134 5.35138L5.5821 6.04597C5.03821 6.14187 4.67504 6.66053 4.77094 7.20443C4.86685 7.74832 5.38551 8.11149 5.9294 8.01559L17.7471 5.93181C18.291 5.83591 18.6542 5.31725 18.5583 4.77335C18.4624 4.22946 17.9437 3.86629 17.3998 3.96219L13.4606 4.65679L13.2869 3.67198Z" />
        </>
      ) : (
        <path d="M18,9 L17.5031493,18.108929 C17.4452947,19.1695975 16.5683631,20 15.5061179,20 L8.49388209,20 C7.43163685,20 6.55470532,19.1695975 6.49685067,18.108929 L6,9 L18,9 Z M10,10.5 C9.44771525,10.5 9,10.9477153 9,11.5 L9,11.5 L9,16.5 C9,17.0522847 9.44771525,17.5 10,17.5 C10.5522847,17.5 11,17.0522847 11,16.5 L11,16.5 L11,11.5 C11,10.9477153 10.5522847,10.5 10,10.5 Z M14,10.5 C13.4477153,10.5 13,10.9477153 13,11.5 L13,11.5 L13,16.5 C13,17.0522847 13.4477153,17.5 14,17.5 C14.5522847,17.5 15,17.0522847 15,16.5 L15,16.5 L15,11.5 C15,10.9477153 14.5522847,10.5 14,10.5 Z M13,4 C13.5522847,4 14,4.44771525 14,5 L14,6 L18,6 C18.5522847,6 19,6.44771525 19,7 C19,7.55228475 18.5522847,8 18,8 L6,8 C5.44771525,8 5,7.55228475 5,7 C5,6.44771525 5.44771525,6 6,6 L10,6 L10,6 L10,5 C10,4.44771525 10.4477153,4 11,4 L13,4 Z" />
      )}
    </Icon>
  );
}
