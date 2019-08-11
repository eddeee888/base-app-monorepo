import useFormError from './useFormError';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useFormError()', () => {
  it(`should return an array with a given length`, () => {
    const { result } = renderHook(() => useFormError(2));

    expect(result.current[0].error).toBe('');
    expect(result.current[1].error).toBe('');

    act(() => result.current[1].setError('New Error!'));

    expect(result.current[0].error).toBe('');
    expect(result.current[1].error).toBe('New Error!');
  });
});
