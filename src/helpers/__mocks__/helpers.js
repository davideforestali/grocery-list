module.exports = {
    ...jest.requireActual(".."),
    __esModule: true,
    addIngrToGroceryList: jest.fn().mockReturnValue({ type: "mock" }),
  }

  // NOTE: If I turn this mock file into a .ts throws a weird error ??