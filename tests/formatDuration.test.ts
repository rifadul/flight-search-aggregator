import { formatDuration } from '@/lib/formatDuration';
import { describe, expect, it } from 'vitest';

describe('formatDuration', () => {
    it('formats 60 minutes', () => {
        expect(formatDuration(60)).toBe('1h 0m');
    });

    it('formats 125 minutes', () => {
        expect(formatDuration(125)).toBe('2h 5m');
    });
});
