export class DefaultController {
  static index(_request, response) {
    response.json({
      success: true,
      message: "Hello, world!"
    });
  }
}
