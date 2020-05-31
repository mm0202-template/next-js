module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['.bk', 'cypress'],
  globals: {
    'ts-jest': {
      tsConfig: 'jest.tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
}
