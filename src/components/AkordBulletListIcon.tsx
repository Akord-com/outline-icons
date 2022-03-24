import React from 'react'
import Icon from './Icon'
import { Props } from './Icon'

export default function AkordBulletListIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <rect x="8.1" y="4.8" width="13.6" height="1.7" />
      <circle cx="4" cy="5.7" r="1.7" />
      <rect x="8.1" y="11.1" width="13.6" height="1.7" />
      <circle cx="4" cy="12" r="1.7" />
      <rect x="8.1" y="17.5" width="13.6" height="1.7" />
      <circle cx="4" cy="18.3" r="1.7" />
    </Icon>
  )
}
