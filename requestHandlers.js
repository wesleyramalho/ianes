import { isEmpty } from 'lodash';

import i18n from '../i18n';

const successRequestHandler = (res) => res.data;

const errorRequestHandler = (err) => {
  const { response } = err;

  if (isEmpty(response)) {
    return Promise.reject({
      status: 500,
      message: i18n.t('error.internalServerError'),
    });
  }

  const { status } = response;

  if (response.status === 400) {
    const { data } = response;
    const { message, Errors: errors } = data;

    return Promise.reject({
      status,
      message: message || i18n.t('error.badRequest'),
      errors,
    });
  }

  if (response.status === 401) {
    return Promise.reject({
      status,
      message: i18n.t('error.unauthorized'),
    });
  }

  if (response.status === 403) {
    const {
      data: { Errors: errors },
    } = response;

    return Promise.reject({
      status,
      message: i18n.t('error.unauthorized'),
      errors,
    });
  }

  if (response.status === 406) {
    const { data } = response;
    const { message, Errors: errors } = data;

    return Promise.reject({
      status,
      message: message || i18n.t('error.notAcceptable'),
      errors,
    });
  }

  return Promise.reject({
    status: 500,
    message: i18n.t('error.internalServerError'),
  });
};

export default {
  success: successRequestHandler,
  error: errorRequestHandler,
};
