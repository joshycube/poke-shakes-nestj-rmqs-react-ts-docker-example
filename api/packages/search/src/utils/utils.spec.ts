import { sanitizeSearchParam } from '.'

describe('Utils', () => {

  it('should return a sanitized string', () => {
    const result = sanitizeSearchParam('pOkeMon$');
    expect(result).toEqual('pokemon');
  })

});