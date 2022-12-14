import { Box, Grid, Typography } from "@mui/material";
import { useGetSuggestion } from "lib/supabase/feedbackList";
import Link from "next/link";
import { useRouter } from "next/router";

import AddComment from "@/components/add-comment";
import Button from "@/components/button";
import Comments from "@/components/comments";
import SuggestionCard from "@/components/suggestion-card";
import { COLORS } from "@/styles/theme/themeOptions";

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
        <Comments comments={data?.[0].comments} />
        <AddComment />
      </Grid>
    </Grid>
  );
};

export default SuggestionDetails;
