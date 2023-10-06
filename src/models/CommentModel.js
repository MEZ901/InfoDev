class Commentaire {
  constructor(id, contant, created_at, article, isDeleted) {
    this.id = id;
    this.contant = contant;
    this.created_at = created_at;
    this.article = article;
    this.isDeleted = isDeleted;
  }
}

module.exports = Commentaire;
