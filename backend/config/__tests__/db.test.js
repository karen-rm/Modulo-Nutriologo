import connection from '../db';

describe('Database Connection', () => {
  it('should connect to the database successfully', (done) => {
    connection.connect((err) => {
      expect(err).toBeNull();
      expect(connection.threadId).toBeDefined();
      done();
    });
  });
});