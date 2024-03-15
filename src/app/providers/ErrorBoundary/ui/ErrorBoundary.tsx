import React, { ErrorInfo, ReactNode, Suspense } from 'react'

interface ErrorBounfaryProps {
  children: ReactNode
}
interface ErrorBoundartState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  ErrorBounfaryProps,
  ErrorBoundartState
> {
  constructor(props: ErrorBounfaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        //@ts-ignore
        <Suspense fallback="">
          <p>error</p>
        </Suspense>
      )
    }

    return children
  }
}