import { useSelector } from "react-redux"
import { selectSelectedCamper } from "../../redux/campersSlice"
import { Box, Typography, Rating } from "@mui/material"

function Reviews() {
  const camper = useSelector(selectSelectedCamper);
  const reviews = camper.reviews;

  return (
    <Box sx={{ mt: 2 }}>
    <Typography variant="h6" sx={{ mb: 1 }}>Customer Reviews:</Typography>
    {reviews.map((review, index) => (
      <Box key={index} sx={{ p: 2, borderBottom: "1px solid #ddd" }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {review.reviewer_name}
        </Typography>
        <Rating value={review.reviewer_rating} precision={0.5} readOnly />
        <Typography sx={{ mt: 1, fontStyle: "italic" }}>
          "{review.comment}"
        </Typography>
      </Box>
    ))}
  </Box>
  )
}

export default Reviews