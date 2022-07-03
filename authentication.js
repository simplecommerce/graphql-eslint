const { gql } = require("apollo-server");

export default gql`
	type Mutation {
		refreshToken(input: RefreshToken!): Tokens @rateLimit(limit: 0)
	}
`;
