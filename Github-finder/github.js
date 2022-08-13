class GitHub {
  constructor() {
    this.client_id = "9ac877933ae6f3b2fc26";
    this.client_secret = "31123fc3b30a0e1f6018e7b3fb770251e98e18aa";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
