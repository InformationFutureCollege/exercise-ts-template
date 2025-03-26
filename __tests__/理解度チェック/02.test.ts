import { execSync } from 'child_process';
import * as path from 'path';

describe('理解度チェック - 02', () => {
  it('should log age', () => {
    const output = execSync(`npx tsx ${path.join(__dirname, '../../src/理解度チェック/02.ts')}`, {
      encoding: 'utf-8'
    }).trim();

    expect(output).toEqual("20")
  });
});
