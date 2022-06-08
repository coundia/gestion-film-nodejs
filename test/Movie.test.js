const services = require('../src/services/MovieService')

test('List movies ', () => {
    expect(services.getAll().length).toBeGreaterThan(1);
});
