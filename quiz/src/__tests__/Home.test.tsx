// src/__tests__/App.test.tsx 
import { render, screen } from '@testing-library/react';
import App from '../App'; // Assuming App is in the same directory or adjust path accordingly

describe('App Component', () => {
  test('renders learn react link', () => {
    render(<App />); 
    const linkElement = screen.getByText(/learn react/i); // Adjust text if needed
    expect(linkElement).toBeInTheDocument();
  });
});
