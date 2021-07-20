// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function MenuIcon(props: Props): React$Element<any> {
  return (
    <Icon {...props}>
      <path d="M4.99992841,5.99992841 L19.0000716,5.99992841 C19.5523168,5.99992841 20,6.4476116 20,6.99985681 C20,7.55210202 19.5523168,7.99978522 19.0000716,7.99978522 L4.99992841,7.99978522 C4.4476832,7.99978522 4,7.55210202 4,6.99985681 C4,6.4476116 4.4476832,5.99992841 4.99992841,5.99992841 Z M4.99992841,15.9992125 L19.0000716,15.9992125 C19.5523168,15.9992125 20,16.4468957 20,16.9991409 C20,17.5513861 19.5523168,17.9990693 19.0000716,17.9990693 L4.99992841,17.9990693 C4.4476832,17.9990693 4,17.5513861 4,16.9991409 C4,16.4468957 4.4476832,15.9992125 4.99992841,15.9992125 Z M4.99992841,10.9995704 L19.0000716,10.9995704 C19.5523168,10.9995704 20,11.4472536 20,11.9994988 C20,12.5517441 19.5523168,12.9994273 19.0000716,12.9994273 L4.99992841,12.9994273 C4.4476832,12.9994273 4,12.5517441 4,11.9994988 C4,11.4472536 4.4476832,10.9995704 4.99992841,10.9995704 Z" />
    </Icon>
  );
}
