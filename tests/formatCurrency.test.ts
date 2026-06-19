import { formatCurrency } from '@/lib/formatCurrency';
import { describe, expect, it } from 'vitest';

describe('formatCurrency', () => {
    it('formats whole number', () => {
        expect(formatCurrency(2423)).toContain('2,423');
    });

    it('formats decimal value', () => {
        expect(formatCurrency(3930.98)).toContain('3,930.98');
    });
});
