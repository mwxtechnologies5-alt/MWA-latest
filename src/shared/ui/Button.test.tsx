import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button href="/">Click Me</Button>)
    const button = screen.getByText('Click Me')
    expect(button).toBeInTheDocument()
    expect(button.tagName.toLowerCase()).toBe('a')
  })
})
