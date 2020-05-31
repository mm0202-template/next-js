import { AppProps } from 'next/app'
import React from 'react'
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  beforeSend(event) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id })
    }
    return event
  },
})

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
