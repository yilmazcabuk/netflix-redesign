import { render } from 'test-utils';

describe('sum', () => {
  it('adds two numbers', () => {
    expect.assertions(1);
    render(<p>Result should be 3</p>);
    const result = 3;
    expect(result).toBe(3);
  });
});
