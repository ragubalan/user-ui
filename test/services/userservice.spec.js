import {config} from 'dotenv'
import superagent from 'superagent';
import mockSuperagent from 'superagent-mock';
import Userservice from "../../src/services/userservice";

describe('User Service', function () {
  config();

  const service = new Userservice(process.env.API_URL);
  let superagentMock;
  const user = {
    fullName: 'Ragubalan', sex: 'Male', age: '40', country: 'United Kingdom'
  };
  beforeEach(() => {
    superagentMock = mockSuperagent(superagent, [{
      pattern: `${process.env.API_URL}(.*)`, fixtures: () => {
        return [];
      }, post: () => {
        return {
          body: user
        };
      }
    }]);
  });

  afterEach(() => {
    superagentMock.unset();
  });

  it('should create a user', function () {
    return service.create().then((data) => {
      expect(data).toBeDefined();
      expect(data.fullName).toEqual(user.fullName);
      expect(data.sex).toEqual(user.sex);
      expect(data.age).toEqual(user.age);
      expect(data.country).toEqual(user.country);
    })
  })
})
