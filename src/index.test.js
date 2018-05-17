
import Http from './index';

describe('isStatus200', () => {
  it('returns true when given a 200', () => {
    expect(Http.isStatus200(200)).toBe(true);
  });

  it('returns true when given a 201', () => {
    expect(Http.isStatus200(201)).toBe(true);
  });
    
  it('returns true when given a 299', () => {
    expect(Http.isStatus200(299)).toBe(true);
  });

  it('returns false when given a 199', () => {
    expect(Http.isStatus200(199)).toBe(false);
  });

  it('returns false when given a 300', () => {
    expect(Http.isStatus200(300)).toBe(false);
  });
});

describe('isStatus300', () => {
  it('returns true when given a 300', () => {
    expect(Http.isStatus300(300)).toBe(true);
  });

  it('returns true when given a 301', () => {
    expect(Http.isStatus300(301)).toBe(true);
  });
    
  it('returns true when given a 399', () => {
    expect(Http.isStatus300(399)).toBe(true);
  });

  it('returns false when given a 299', () => {
    expect(Http.isStatus300(299)).toBe(false);
  });

  it('returns false when given a 400', () => {
    expect(Http.isStatus300(400)).toBe(false);
  });
});

describe('isStatus400', () => {
  it('returns true when given a 400', () => {
    expect(Http.isStatus400(400)).toBe(true);
  });

  it('returns true when given a 401', () => {
    expect(Http.isStatus400(401)).toBe(true);
  });
    
  it('returns true when given a 499', () => {
    expect(Http.isStatus400(499)).toBe(true);
  });

  it('returns false when given a 399', () => {
    expect(Http.isStatus400(399)).toBe(false);
  });

  it('returns false when given a 500', () => {
    expect(Http.isStatus400(500)).toBe(false);
  });
});


describe('isStatus500', () => {
  it('returns true when given a 500', () => {
    expect(Http.isStatus500(500)).toBe(true);
  });

  it('returns true when given a 501', () => {
    expect(Http.isStatus500(501)).toBe(true);
  });
    
  it('returns true when given a 599', () => {
    expect(Http.isStatus500(599)).toBe(true);
  });

  it('returns false when given a 499', () => {
    expect(Http.isStatus500(499)).toBe(false);
  });

  it('returns false when given a 600', () => {
    expect(Http.isStatus500(600)).toBe(false);
  });
});

describe('isStatusOk', () => {
  it('returns true when given a 200', () => {
    expect(Http.isStatusOk(200)).toBe(true);
  });

  it('returns true when given a 201', () => {
    expect(Http.isStatusOk(201)).toBe(true);
  });
    
  it('returns true when given a 300', () => {
    expect(Http.isStatusOk(300)).toBe(true);
  });
    
  it('returns true when given a 301', () => {
    expect(Http.isStatusOk(301)).toBe(true);
  });
    
  it('returns false when given a 400', () => {
    expect(Http.isStatusOk(400)).toBe(false);
  });
    
  it('returns false when given a 401', () => {
    expect(Http.isStatusOk(401)).toBe(false);
  });
    
  it('returns false when given a 500', () => {
    expect(Http.isStatusOk(500)).toBe(false);
  });
    
  it('returns false when given a 501', () => {
    expect(Http.isStatusOk(501)).toBe(false);
  });
    
  it('returns true when given a 400 and is expecting a 400', () => {
    expect(Http.isStatusOk(400, 400)).toBe(true);
  });
    
  it('returns true when given a 500 and is expecting a 500', () => {
    expect(Http.isStatusOk(500, 500)).toBe(true);
  });
});
