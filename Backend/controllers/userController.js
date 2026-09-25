import axios from "axios";

export const getProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username

          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }

          profile {
            ranking
            reputation
          }
        }
      }
    `;

    const response = await axios.post(
      "https://leetcode.com/graphql",
      {
        query,
        variables: {
          username,
        },
      }
    );

    res.status(200).json({
      success: true,
      data: response.data.data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch LeetCode profile",
    });
  }
};