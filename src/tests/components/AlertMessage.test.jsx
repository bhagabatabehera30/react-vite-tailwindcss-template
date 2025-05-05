import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AlertMessage from '@/components/AlertMessage';

describe('AlertMessage Component', () => {
  it('renders the message passed via props', () => {
    render(<AlertMessage message="Test Alert" />);
    expect(screen.getByText('Test Alert')).toBeInTheDocument();
  });

  it('applies the correct style for type="red"', () => {
    render(<AlertMessage message="Red Alert" type="red" />);
    const alert = screen.getByText('Red Alert').parentElement;
    expect(alert).toHaveStyle({ backgroundColor: '#fad2e1', color: '#7c193d' });
  });

  it('calls onClose prop when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<AlertMessage message="Closable" onClose={handleClose} />);
    const closeButton = screen.getByRole('button', { name: /close alert/i });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('removes the alert from DOM when close button is clicked', () => {
    render(<AlertMessage message="Dismiss me" />);
    const closeButton = screen.getByRole('button', { name: /close alert/i });
    fireEvent.click(closeButton);
    expect(screen.queryByText('Dismiss me')).toBeNull();
  });

  it('renders with default gray style if no type is passed', () => {
    render(<AlertMessage message="Default type test" />);
    const alert = screen.getByText('Default type test').parentElement;
    expect(alert).toHaveStyle({ backgroundColor: '#ededed', color: '#5d5d5d' });
  });
});
