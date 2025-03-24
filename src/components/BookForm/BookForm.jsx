import { useState } from "react";
import { TextField, Input, Box, Button, Typography } from "@mui/material";
import { toast } from "react-hot-toast";

function BookForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      bookingDate: "",
      comment: "",
    });
    e.target.reset();
    toast.success("Booking request sent successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <Box
      sx={{
        border: "1px solid #dadde1",
        borderRadius: "10px",
        padding: "44px",
      }}
    >
      <Box sx={{ }}>
          <Typography  sx={{ mb: 1 }}>
            Book your campervan now
          </Typography>
          <Typography  color="secondary.main">
            Stay connected! We are always ready to help you.
          </Typography>
        </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          value={formData.name}
          placeholder="Name*"
          disableUnderline={true}
          sx={{
            maxWidth: "360px",
            width: "360px",
            marginTop: "8px",
            paddingLeft: "20px",
          }}
          required
          onChange={handleChange}
        />
        <Input
          value={formData.email}
          placeholder="Email*"
          disableUnderline={true}
          sx={{
            maxWidth: "360px",
            width: "360px",
            marginTop: "8px",
            paddingLeft: "20px",
          }}
          required
          onChange={handleChange}
        />
        <Input
          value={formData.date}
          placeholder="Date*"
          disableUnderline={true}
          sx={{
            maxWidth: "360px",
            width: "360px",
            marginTop: "8px",
            paddingLeft: "20px",
          }}
          required
          onChange={handleChange}
        />
        <Input
          value={formData.comment}
          placeholder="Comment"
          disableUnderline={true}
          sx={{
            maxWidth: "360px",
            width: "360px",
            marginTop: "8px",
            paddingLeft: "20px",
          }}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">Send</Button>
      </Box>
    </Box>
  );
}

export default BookForm;
