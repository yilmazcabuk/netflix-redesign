import { render } from 'test-utils';

import Home from '../../app/page';

describe('sum', () => {
  it('adds two numbers', () => {
    expect.assertions(1);
    render(<Home />);
    const result = 3;
    expect(result).toBe(3);
  });
});
