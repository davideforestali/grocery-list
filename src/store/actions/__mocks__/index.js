module.exports = {
    ...jest.requireActual('..'),
    __esModule: true,
    fetchGroceryList: jest.fn().mockReturnValue(new Promise((resolve) => {
        resolve({ type: 'mock' });
      }))
}

  // NOTE: If I turn this mock file into a .ts throws a weird error ??