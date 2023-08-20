import { describe, it, expect } from 'vitest';
import { generateRandomNumber } from './generateRandomNumber';

describe('generateRandomNumber', () => {
	it('should generate a number between 1 and 3', () => {
		const randomNumber = generateRandomNumber(1, 3);
		expect(randomNumber).toBeLessThanOrEqual(3);
		expect(randomNumber).toBeGreaterThanOrEqual(1);
		expect(typeof randomNumber).toBe('number');
	});
});
