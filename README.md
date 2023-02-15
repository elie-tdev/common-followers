# Github Common Followers (React Application)

A simple web app that accepts two GitHub usernames and displays a list of their common followers (ie, the people who follow both users).

### API notes:

- The [GitHub API provides an endpoint](https://docs.github.com/en/rest/users?apiVersion=2022-11-28#list-followers-of-a-user) to get a user’s followers, which can be called via fetch.
- **Authentication is not required**

### Local Development

Install and run

```bash
yarn && yarn start
```

The App will be run at port 3000.
