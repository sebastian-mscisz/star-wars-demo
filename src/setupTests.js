import '@testing-library/jest-dom';
import { beforeAll, afterAll, jest } from '@jest/globals';

beforeAll(() => {
    jest.spyOn(Math, 'random').mockReturnValue(1);
});

afterAll(() => {
    jest.spyOn(Math, 'random').mockRestore();
});
