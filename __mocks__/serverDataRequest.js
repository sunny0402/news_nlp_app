export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  //get: jest.fn(() => Promise.resolve({ summary: "" })),
};
