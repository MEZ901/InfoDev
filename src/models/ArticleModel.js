class Article {
  constructor(id, title, contenu, DateOfCreate, author, isDeleted) {
    this.id = id;
    this.title = title;
    this.contenu = contenu;
    this.DateOfCreate = DateOfCreate;
    this.author = author;
    this.isDeleted = isDeleted;
  }
}

module.exports = Article;
