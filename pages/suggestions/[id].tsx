import { COLORS } from "../../styles/theme/themeOptions";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Button from "../../components/shared/Button";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import SuggestionCard from "../../components/views/feedback/suggestions/SuggestionCard";
import Comments from "../../components/views/feedback/suggestions/components/Comments";

const SuggestionDetailsQuery = gql`
  query {
    suggestions {
      id
      comments
      description
      tags
      title
      upvotes
    }
  }
`;

const SuggestionDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, loading } = useQuery(SuggestionDetailsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

  const suggestion: any = data.suggestions.filter(
    (item: any) => item.id === id
  );

  return (
    <Grid
      sx={{
        mt: 2,
      }}
      justifyContent="center"
      container
      spacing={2}
    >
      <Grid item md={7}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
            mx: 2,
          }}
        >
          <Typography
            sx={{ color: COLORS.primary.navy, fontWeight: 700 }}
            variant="body2"
          >
            <Link href="/">{`< Go Back`}</Link>
          </Typography>
          <Button
            backgroundColor={COLORS.primary.blue}
            onClick={() => console.log("clicked")}
          >
            Edit Feedback
          </Button>
        </Box>
        <SuggestionCard suggestion={suggestion[0]} />
        <Comments />
      </Grid>
    </Grid>
  );
};

export default SuggestionDetails;
