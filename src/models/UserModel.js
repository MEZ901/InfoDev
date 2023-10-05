class User {
  constructor(id, name, email, password, photo, created_at, isDeleted) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.photo = photo;
    this.created_at = created_at;
    this.isDeleted = isDeleted;
  }
}

module.exports = User;
