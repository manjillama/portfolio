import React from 'react';

export default function Newsletter() {
  return (
    <div id="mlb2-4355662" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-4355662">
      <p className="hint-text" style={{ margin: 0 }}>
        Subscribe to my newsletter
      </p>
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
            <div className="ml-form-embedContent" style={{ marginBottom: 0 }}></div>
            <form
              className="ml-block-form"
              action="https://static.mailerlite.com/webforms/submit/w1u4g4"
              data-code="w1u4g4"
              method="post"
              target="_blank"
            >
              <div className="ml-form-formContent horozintalForm">
                <div className="ml-form-horizontalRow">
                  <div className="ml-input-horizontal">
                    <div style={{ width: '100%' }} className="horizontal-fields">
                      <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input
                          type="email"
                          className="form-control"
                          data-inputmask=""
                          name="fields[email]"
                          placeholder="Email"
                          autoComplete="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-button-horizontal primary">
                    <button type="submit" className="primary">
                      Subscribe
                    </button>
                    <button disabled="disabled" style={{ display: 'none' }} type="button" className="loading">
                      {' '}
                      <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span>{' '}
                    </button>
                  </div>
                </div>
              </div>
              <input type="hidden" name="ml-submit" value="1" />
              <div className="ml-mobileButton-horizontal">
                <button type="submit" className="primary">
                  Subscribe
                </button>
                <button disabled="disabled" style={{ display: 'none' }} type="button" className="loading">
                  {' '}
                  <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span>{' '}
                </button>
              </div>
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>
          <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
            <div className="ml-form-successContent">
              <h4>Thank you!</h4>
              <p>Awesome! I'll make sure to keep you close at all times.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
