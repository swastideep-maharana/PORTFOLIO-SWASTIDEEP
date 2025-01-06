import React, { Component } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  errorComponent?: React.ReactNode; // Optional error component to show on errors
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent || <div>Something went wrong!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
