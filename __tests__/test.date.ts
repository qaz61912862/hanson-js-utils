import { formatTime } from '../src/date'

test('formatTime new Date to equal YY-MM-DD hh:mm:ss', () => {
  expect(formatTime(new Date(), 'yyyy-MM-dd')).toBe('2021-04-01');
});