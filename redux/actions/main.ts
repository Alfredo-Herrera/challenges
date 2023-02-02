import emailjs from 'emailjs-com';
import * as t from '../types';

const key = process.env.Mail || process.env.NEXT_PUBLIC_Mail;

export const setLoading = (loading: boolean) => ({
  type: t.LOADING,
  payload: loading,
});

export const setError = (error: { title: string; severityError: string }) => ({
  type: t.ERROR,
  payload: {
    ...error,
  },
});

export const setDataPage =
  (values: {}) =>
  async (
    // eslint-disable-next-line no-unused-vars
    dispatch: (arg0: {
      type: string;
      payload:
        | string
        | boolean
        | undefined
        | { title: string | undefined; severityError: string };
    }) => void
  ) => {
    dispatch({
      type: t.LOADING,
      payload: true,
    });
    emailjs
      .send('default_service', 'template_iq9y3gt', values, key)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: t.LOADING,
            payload: false,
          });
          dispatch({
            type: t.ERROR,
            payload: {
              title: 'El formulario se envió correctamente.',
              severityError: 'success',
            },
          });

          setTimeout(() => {
            dispatch({
              type: t.ERROR,
              payload: {
                title: '',
                severityError: '',
              },
            });
          }, 5000);
        }
      })
      .catch(() => {
        dispatch({
          type: t.ERROR,
          payload: {
            title: 'Error en el servidor, intentolo mas tarde.',
            severityError: 'error',
          },
        });
        dispatch({
          type: t.LOADING,
          payload: false,
        });
      });
  };
