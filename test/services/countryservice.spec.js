import {config} from 'dotenv'
import superagent from 'superagent';
import mockSuperagent from 'superagent-mock';
import Userservice from "../../src/services/userservice";

describe('Country Service', function () {
  config();

  const service = new Userservice(process.env.COUNTRY_API_URL);
  let superagentMock;

  beforeEach(() => {
    superagentMock = mockSuperagent(superagent, [{
      pattern: `${process.env.COUNTRY_API_URL}(.*)`,
      fixtures: () => {
        return [];
      },
      get: () => {
        return {
          body: [{
            "name": {
              "common": "Iceland", "official": "Iceland", "nativeName": {
                "isl": {
                  "official": "Ísland", "common": "Ísland"
                }
              }
            }
          }]
        };
      }
    }]);
  });

  afterEach(() => {
    superagentMock.unset();
  });

  it('should get all countries', function () {
    return service.all().then((data) => {
      expect(data.length).toEqual(1);
      expect(data[0]).toBeDefined();
      expect(data[0].name.common).toEqual('Iceland');
    })
  })
})
