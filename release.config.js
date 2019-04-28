module.exports = {
  branch: "release",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/git",
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
};
