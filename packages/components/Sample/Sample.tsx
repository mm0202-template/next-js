import React from 'react'
import { Button } from '@material-ui/core'

type Props = {
  children: React.ReactElement | string
}

export default function Sample(props: Props): React.ReactElement {
  return (
    <div>
      <div>{props.children}</div>
      <Button variant="contained">Default</Button>
    </div>
  )
}
