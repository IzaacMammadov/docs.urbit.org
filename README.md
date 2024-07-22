The website for Urbit Documentation is maintained by the Urbit Foundation and the Urbit community. Issues and contributions are welcome.

## Getting Started

1. Fork the [Urbit Documentation site repository](https://github.com/urbit/docs.urbit.org).

2. [Create a local clone](https://help.github.com/articles/cloning-a-repository/) of your fork.

3. Navigate to the `docs.urbit.org` directory and install Node 18 using [nvm](https://github.com/nvm-sh/nvm):

    ```shell
    cd docs.urbit.org
    nvm install 18
    ```
    You can then run `nvm use` whenever in the repository (or automate it with a script - see [here](https://github.com/nvm-sh/nvm#deeper-shell-integration)).

4. Install our dependencies:

    ```shell
    npm install
    ```

5. Run the development server:

    ```shell
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To learn more about contributing, see GitHub's [documentation](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).


## Framework and Library Documentation

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

We deploy using Vercel. All pull requests will show a deployment preview via the same.
