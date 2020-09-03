export default  {
    get: jest.fn(() => Promise.resolve({
        data: {}
    })),
    create: () => axios,
    defaults: {
        adapter: {},
    },
};