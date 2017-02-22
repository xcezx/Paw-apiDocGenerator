import { registerCodeGenerator } from './__mocks__/Shims';

@registerCodeGenerator
export default class Generator {
  static identifier = 'me.xcezx.PawExtensions.apiDocGenerator';
  static title = 'apiDoc Generator';

  generate(context, requests, options) {
    let generated = '/**\n';

    const request = context.getCurrentRequest();
    generated += this.api(request.method, request.url, request.name);

    if (request.name.length > 0) {
      generated += this.apiName(request);
    }
    if (request.description.length > 0) {
      generated += this.apiDescription(request);
    }

    generated += ' */';

    return generated;
  }

  api(method, url, title) {
    let path = url.replace(/^https?:\/\/[^\/]+/i, '');
    if (!path) {
      path = '/';
    }
    return ` * @api {${method.toLowerCase()}} ${path} ${title}\n`;
  }

  apiName(request) {
    return ` * @apiName ${request.name}\n`;
  }

  apiDescription(request) {
    return ` * @apiDescription ${request.description}\n`;
  }
}
