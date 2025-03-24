import { useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/campersSlice";
import { Box, Typography, Rating } from "@mui/material";

function Reviews() {
  const camper = useSelector(selectSelectedCamper);
  const reviews = camper.reviews;

  return (
    <Box
      sx={{
        width: "630px",
        display: "flex",
        flexDirection: "column",
        gap: "44px",
      }}
    >
      {reviews.map((review, index) => (
        <Box key={index} sx={{}}>
          <Typography variant="subtitle1" fontWeight="bold">
            {review.reviewer_name}
          </Typography>
          <Rating value={review.reviewer_rating} precision={0.5} readOnly />
          <Typography sx={{}}>{review.comment}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Reviews;
