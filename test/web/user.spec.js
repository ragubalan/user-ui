import request from 'supertest'
import app from '../../src/app'

describe('/', function () {
  it('should render title', function () {
    return request(app)
      .get('/')
      .expect(200)
      .then(res => {
        expect(res.text).toContain('<title>A Web Page</title>');
      })
  }, 10000)

  it('should render header', function () {
    return request(app)
      .get('/')
      .expect(200)
      .then(res => {
        expect(res.text).toContain('Some Useful Government Service');
      })
  })

  it('should render confirmation', function () {
    const user = {
      fullName: 'Ragubalan', sex: 'Male', age: '40', country: 'United Kingdom'
    };
    return request(app)
      .post('/')
      .expect(200)
      .send(user)
      .then(res => {
        expect(res.text).toContain('Application Complete');
      })
  })
});