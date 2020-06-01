import React from 'react'
import { Button } from '@material-ui/core'
import StyledButton from '~/packages/components/Sample/StyledButton'

type Props = {
  children: React.ReactElement | string
}

export default function Sample(props: Props): React.ReactElement {
  return (
    <ul>
      <li>
        <button
          onClick={() => {
            throw new Error('date: ' + new Date().toLocaleString())
          }}
        >
          for sentry check
        </button>
      </li>
      <li className={'for-cypress-check'}>Cypress is good!!</li>
      <li>
        styled-components sample : <StyledButton />
      </li>
      <li>
        material-ui sample : <Button variant="contained">Default</Button>
      </li>
      <li>{props.children}</li>
    </ul>
  )
}
