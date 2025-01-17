import React from 'react'
import Icon from './Icon'
import { Props } from './Icon'

export default function AkordNumberedListIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <rect x="8.01" y="4.816" width="13.608" height="1.7" />
      <rect x="8.01" y="11.135" width="13.608" height="1.7" />
      <rect x="8.1" y="17.453" width="13.608" height="1.7" />
      <path d="M3.451,4.766l-.7.152L2.5,3.863l1.276-.348h1.08v4.3h-1.4Z" />
      <path d="M2.26,12.922l1.769-1.27c.269-.189.373-.354.373-.519,0-.183-.14-.317-.385-.317s-.47.152-.824.531l-.94-.8a2.182,2.182,0,0,1,1.886-.939,1.5,1.5,0,0,1,1.679,1.4v.012a1.5,1.5,0,0,1-.861,1.337l-.763.488H5.86v1.117H2.26Z" />
      <path d="M2.195,19.715l.849-.873a1.472,1.472,0,0,0,1.007.464c.317,0,.488-.139.488-.342v-.011c0-.208-.183-.342-.562-.342h-.6l-.189-.635.94-.745H2.537v-1.11H5.821V17.1l-.959.721a1.215,1.215,0,0,1,1.056,1.214v.012c0,.922-.8,1.435-1.751,1.435A2.6,2.6,0,0,1,2.195,19.715Z" />
    </Icon>
  )
}
