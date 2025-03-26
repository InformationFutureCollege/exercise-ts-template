import { execSync } from 'child_process';
import * as path from 'path';

describe('理解度チェック - 01', () => {
  it('should log "Hello, TypeScript!"', () => {
    const output = execSync(`npx tsx ${path.join(__dirname, '../../src/理解度チェック/01.ts')}`, {
      encoding: 'utf-8'
    }).trim();

    expect(output).toBe('Hello, TypeScript!');
  });
});
