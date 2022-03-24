import React from 'react'
import Icon from './Icon'
import { Props } from './Icon'

export default function AkordHeading1Icon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path d="M12.11,4.3h3.036V19.7H12.11V13.143h-6.6V19.7H2.5V4.3H5.512v6h6.6Z" />
      <path d="M19.94,11.076H21.5V19.7H19.347V14.068H17.389V12.4Q19.609,12.4,19.94,11.076Z" />
    </Icon>
  )
}
