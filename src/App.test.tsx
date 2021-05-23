import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('theme is switched', () => {
    const { container } = render(<App />)
    const app = container.firstChild as HTMLDivElement
    expect(app.classList.contains('app--light')).toBe(true)
    const themeButton = screen.getByRole('button', { name: /change app theme/i })
    expect(themeButton.title).toBe('use dark mode')
    userEvent.click(themeButton)
    expect(app.classList.contains('app--light')).toBe(false)
    expect(themeButton.title).toBe('use light mode')
})
