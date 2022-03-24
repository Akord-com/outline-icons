import React from 'react'
import Icon from './Icon'
import { Props } from './Icon'

export default function AkordBoldIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path d="M7.3,4.3h4.9c1.6,0,2.8,0.4,3.7,1.2c0.9,0.8,1.4,1.9,1.4,3.2c0,1.3-0.4,2.3-1.3,3c0.7,0.3,1.2,0.8,1.6,1.4c0.4,0.6,0.6,1.3,0.6,2.1c0,1.4-0.5,2.5-1.4,3.3c-1,0.8-2.2,1.2-3.8,1.2H7.3V4.3z M12.2,7.1h-1.9v3.5h1.9c0.6,0,1.1-0.2,1.4-0.5c0.3-0.3,0.5-0.7,0.5-1.2c0-0.6-0.2-1-0.5-1.3S12.8,7.1,12.2,7.1z M12.9,13.3h-2.6v3.6h2.6c0.6,0,1.2-0.2,1.5-0.5c0.4-0.3,0.5-0.8,0.5-1.3c0-0.6-0.2-1-0.5-1.3C14.1,13.4,13.6,13.3,12.9,13.3z" />
    </Icon>
  )
}
