import { describe, it, expect } from 'vitest';
import { StatusBadge } from '../components/StatusBadge';

describe('StatusBadge Component Logic Tests', () => {
  it('instantiates StatusBadge correctly for NEW status', () => {
    const badge = StatusBadge({ status: 'NEW' });
    expect(badge).toBeDefined();
  });

  it('instantiates StatusBadge correctly for CONTACTED status', () => {
    const badge = StatusBadge({ status: 'CONTACTED' });
    expect(badge).toBeDefined();
  });

  it('instantiates StatusBadge correctly for CLOSED status', () => {
    const badge = StatusBadge({ status: 'CLOSED' });
    expect(badge).toBeDefined();
  });
});
