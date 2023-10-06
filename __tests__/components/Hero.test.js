import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Hero from '../../src/components/Hero/Hero'

test("<Hero />", () => {
  render(<Hero />)
})