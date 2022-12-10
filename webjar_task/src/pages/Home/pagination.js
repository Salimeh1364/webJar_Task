import React, {  useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";

//style

export default function PaginationRounded() {
 
  //API
 
  useEffect(() => {
   getData()
  });

   const getData = () => {
    axios({
      method: "get",
      url:" https://challenge.webjar.ir/posts/count",
      headers: "accept: application/json",
    })
      .then((response) => {
        console.log(response);
    
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

 
  return (
    <Stack spacing={4}  
    >
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        
      />
    </Stack>
  );
}
