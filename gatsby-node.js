exports.createResolvers = ({ createResolvers }) => {
  // this is just so there is something that generates console output when building
  // GraphQL schema, to showcase how there can be confusing output for users

  for (let i = 1; i <= 10; i++) {
    console.log(`Random output when building schema #${i}`)
  }

  createResolvers({
    Query: {
      doesntMatter: {
        type: `String`,
        resolve: () => `foo`,
      },
    },
  })
}
