enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

interface Options {
  method: METHOD;
  headers?: Record<string, any>;
  data?: any;
  timeout?: number;
}

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;

function queryStringify(data: any) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

export class HTTPTransport {
  get: HTTPMethod = (url, options) => {
    return this.request(
      url,
      { ...options, method: METHOD.GET },
      options?.timeout,
    );
  };

  post: HTTPMethod = (url, options) => {
    return this.request(
      url,
      { ...options, method: METHOD.POST },
      options?.timeout,
    );
  };

  put: HTTPMethod = (url, options) => {
    return this.request(
      url,
      { ...options, method: METHOD.PUT },
      options?.timeout,
    );
  };

  delete: HTTPMethod = (url, options) => {
    return this.request(
      url,
      { ...options, method: METHOD.DELETE },
      options?.timeout,
    );
  };

  request = (url: string, options: Options, timeout = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHOD.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
