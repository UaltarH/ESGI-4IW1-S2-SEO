export class ArticleController {
  static index(_request, response) {
    response.json({
      success: true,
      message: "Articles route"
    });
  }
}