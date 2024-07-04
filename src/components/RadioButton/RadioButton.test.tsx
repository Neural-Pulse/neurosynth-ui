import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from '.';

describe('RadioButton', () => {
  it('renders correctly', () => {
    render(<RadioButton id="radio1" name="group1" label="Option 1" checked={false} onChange={() => { }} />);
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
  });

  it('is checked when clicked', () => {
    const handleChange = jest.fn();
    render(<RadioButton id="radio1" name="group1" label="Option 1" checked={false} onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('Option 1'));
    expect(handleChange).toHaveBeenCalled();
  });
});
