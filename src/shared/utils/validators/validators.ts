export interface ErrorType {
  errorMessage: string;
  errorStatus: boolean;
}

export const login = (value: string): ErrorType => {
  if (value.length === 0) {
    return { errorMessage: 'Field login can not be empty', errorStatus: true };
  }

  if (value.length < 3) {
    return {
      errorMessage: `Length of login should not be less 3 letters.`,
      errorStatus: true,
    };
  }

  const regExp =
    /^(?:[А-ЯA-Z][а-яa-z]+|[A-Z][a-z]+)(?:-[А-ЯA-Z][а-яa-z]+|[A-Z][a-z]+)*$/;
  const compare = regExp.test(value);
  if (!compare) {
    return {
      errorMessage:
        'The first letter must be capitalised, no spaces, no numbers, no special characters',
      errorStatus: true,
    };
  }

  return {
    errorMessage: '',
    errorStatus: false,
  };
};

export const password = (value: string): ErrorType => {
  if (value.length === 0) {
    return {
      errorMessage: 'Field PASSWORD can not be empty',
      errorStatus: true,
    };
  }
  if (value.length < 3) {
    return {
      errorMessage: `Length of PASSWORD should not be less 3 letters.`,
      errorStatus: true,
    };
  }

  const regExp = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/;
  const compare = regExp.test(value);
  if (!compare) {
    return {
      errorMessage:
        'From 8 to 40 characters, at least one capital letter and a number.',
      errorStatus: true,
    };
  }

  return { errorMessage: '', errorStatus: false };
};

export const email = (value: string): ErrorType => {
  if (value.length === 0) {
    return { errorMessage: 'Field email can not be empty', errorStatus: true };
  }
  if (value.length < 3) {
    return {
      errorMessage: `Length of email should not be less 3 letters.`,
      errorStatus: true,
    };
  }

  const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  const compare = regExp.test(value);
  if (!compare) {
    return {
      errorMessage: 'Invalid email.',
      errorStatus: true,
    };
  }

  return { errorMessage: '', errorStatus: false };
};

export const name = (value: string): ErrorType => {
  if (value.length === 0) {
    return { errorMessage: 'Field name can not be empty', errorStatus: true };
  }
  if (value.length < 3) {
    return {
      errorMessage: `Length of name should not be less 3 letters.`,
      errorStatus: true,
    };
  }
  const regExp = /^[А-ЯA-Z][а-яa-z\\-]*$|^[A-Z][a-z\\-]*$/;
  const compare = regExp.test(value);
  if (!compare) {
    return {
      errorMessage: `The first letter must be capitalised, no spaces,
        no numbers, no special characters (only hyphen is allowed).`,
      errorStatus: true,
    };
  }

  return { errorMessage: '', errorStatus: false };
};

export const reEnterPassword = (value: string): ErrorType => {
  if (value.length === 0) {
    return {
      errorMessage: 'Field reEnterPassword can not be empty',
      errorStatus: true,
    };
  }
  if (value.length < 3) {
    return {
      errorMessage: `Length of reEnterPassword should not be less 3 letters.`,
      errorStatus: true,
    };
  }

  const regExp = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/;
  const compare = regExp.test(value);
  if (!compare) {
    return {
      errorMessage:
        'From 8 to 40 characters, at least one capital letter and a number.',
      errorStatus: true,
    };
  }

  return { errorMessage: '', errorStatus: false };
};

export const phone = (value: string): ErrorType => {
  if (value.length === 0) {
    return { errorMessage: 'Field phone can not be empty', errorStatus: true };
  }
  if (value.length < 3) {
    return {
      errorMessage: `Length of phone should not be less 3 letters.`,
      errorStatus: true,
    };
  }
  const regExp = /^\+?\d{10,15}$/;
  const compare = regExp.test(value);
  if (!compare) {
    return {
      errorMessage:
        'From 10 to 15 characters, consists of digits, may start with a plus sign.',
      errorStatus: true,
    };
  }

  return { errorMessage: '', errorStatus: false };
};

export const message = (value: string): ErrorType => {
  if (value.length === 0) {
    return { errorMessage: 'Field phone can not be empty', errorStatus: true };
  }
  return { errorMessage: '', errorStatus: false };
};
