'use client'

import { Suspense } from 'react'
import { AnalyticsTracker } from './analytics-tracker'

export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  )
}