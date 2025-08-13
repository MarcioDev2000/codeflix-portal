import { useScroll } from "@/app/hooks/useScroll";
import { renderHook, act } from '@testing-library/react';

describe('useScroll', () => {
  it('should return false when not scrolled', () => {
    const { result } = renderHook(() => useScroll());
    expect(result.current).toBe(false); 
  });

  it('should return true when scrolled more than 50px', () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      window.scrollY = 60; // Simulate scrolling
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);
  });

  it('should return false when scrolled back to top', () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      window.scrollY = 0; // Simulate scrolling back to top
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);
  });
});
