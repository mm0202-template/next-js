import React from 'react'

type Props = {
  children: React.ReactElement | string
}

export default function Sample(props: Props): React.ReactElement {
  return <div>{props.children}</div>
}
