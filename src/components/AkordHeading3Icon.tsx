import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

export default function AkordHeading3Icon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path d="M11.58,4.225h3.036v15.4H11.58V13.068h-6.6v6.554H1.967V4.225H4.981V10.23h6.6Z" />
      <path d="M19.177,10.949a2.988,2.988,0,0,1,2.092.71,2.36,2.36,0,0,1,.782,1.832,1.7,1.7,0,0,1-1.027,1.689,1.755,1.755,0,0,1,1.327,1.895,2.5,2.5,0,0,1-.821,1.982,3.313,3.313,0,0,1-2.258.718,3.168,3.168,0,0,1-2.25-.758,2.771,2.771,0,0,1-.814-2.131h2.1a.936.936,0,0,0,.284.679,1,1,0,0,0,.71.253.941.941,0,0,0,.671-.23.808.808,0,0,0,.246-.623q0-.9-1.154-.9H18.4V14.438h.617c.609,0,.915-.253.915-.758a.813.813,0,0,0-.189-.56.661.661,0,0,0-.521-.213.741.741,0,0,0-.561.221.873.873,0,0,0-.213.631h-2.1a2.75,2.75,0,0,1,.766-2.06A2.816,2.816,0,0,1,19.177,10.949Z" />
    </Icon>
  );
}
