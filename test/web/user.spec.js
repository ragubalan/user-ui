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
  })

  it('should render header', function () {
    return request(app)
      .get('/')
      .expect(200)
      .then(res => {
        expect(res.text).toContain('Some Useful Government Service');
      })
  })
});