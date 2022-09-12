import { COLORS } from "@/styles/theme/themeOptions";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import SuggestionCard from "@/components/views/feedback/suggestions/SuggestionCard";
import Comments from "@/components/views/feedback/suggestions/components/Comments";
import AddComment from "@/components/views/feedback/suggestions/components/AddComment";
import { useGetSuggestion } from "lib/supabase/feedbackList";

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
  const { data, isLoading } = useGetSuggestion(id);

  if (isLoading) return <p>Loading...</p>;

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
            onClick={() => router.push(`/suggestions/edit/${id}`)}
          >
            Edit Feedback
          </Button>
        </Box>
        <SuggestionCard suggestion={data?.[0]} />
        <Comments suggestionID={id} />
        <AddComment />
      </Grid>
    </Grid>
  );
};

export default SuggestionDetails;
