// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function AlphabeticalSortIcon(props: Props): React$Element<any> {
  return (
    <Icon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 4C5.52332 4 5.11291 4.33646 5.01942 4.80388L4.21942 8.80388L4.01942 9.80388C3.91111 10.3454 4.26233 10.8723 4.80389 10.9806C5.34545 11.0889 5.87227 10.7377 5.98058 10.1961L6.01981 10H7.9802L8.01942 10.1961C8.12773 10.7377 8.65456 11.0889 9.19612 10.9806C9.73768 10.8723 10.0889 10.3454 9.98058 9.80388L9.78058 8.80388L8.98058 4.80388C8.8871 4.33646 8.47668 4 8 4H6ZM7.5802 8H6.41981L6.81981 6H7.1802L7.5802 8ZM13 5C12.4477 5 12 5.44772 12 6C12 6.55228 12.4477 7 13 7H19C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5H13ZM14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11H19C19.5523 11 20 10.5523 20 10C20 9.44772 19.5523 9 19 9H14ZM14 14C14 13.4477 14.4477 13 15 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H15C14.4477 15 14 14.5523 14 14ZM16 17C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H16ZM4 14C4 13.4477 4.44772 13 5 13H9C9.38441 13 9.73478 13.2203 9.9013 13.5668C10.0678 13.9133 10.021 14.3245 9.78087 14.6247L7.08063 18H9C9.55229 18 10 18.4477 10 19C10 19.5523 9.55229 20 9 20H5C4.6156 20 4.26522 19.7797 4.0987 19.4332C3.93218 19.0867 3.979 18.6755 4.21913 18.3753L6.91938 15H5C4.44772 15 4 14.5523 4 14Z" />
    </Icon>
  );
}
