import React from 'react'
import Icon from './Icon'
import { Props } from './Icon'

export default function AkordHeading2Icon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path d="M11.23,4.3h3.036V19.7H11.23V13.143h-6.6V19.7H1.618V4.3H4.632v6h6.6Z" />
      <path d="M19.457,10.922a3.111,3.111,0,0,1,2.156.693,2.434,2.434,0,0,1,.769,1.9A3.647,3.647,0,0,1,21.217,16l-1.672,1.672h2.793V19.7H16.531V18.115l2.749-2.838a4.97,4.97,0,0,0,.738-.869,1.4,1.4,0,0,0,.186-.714.68.68,0,0,0-.77-.77q-.857,0-.857.945H16.4a2.752,2.752,0,0,1,.836-2.122A3.074,3.074,0,0,1,19.457,10.922Z" />
    </Icon>
  )
}
