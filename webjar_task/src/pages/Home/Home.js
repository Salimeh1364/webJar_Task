import React, { useEffect, useState } from "react";

//API
import axios from "axios";
import fa from "moment/locale/fa";
import moment from "moment-jalaali";
import "moment/locale/fa";

//mui

import RTL from "../../projectSetting/RTL";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

//style
import style from "../Home/style/home.module.css";

//import component
import { BelogPost } from "./post";
import PaginationRounded from "./pagination";
import ListItem from "./ListItemBox";


const Search = styled("div")(({ theme }) => ({
  position: "relative",

  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  backgroundColor: "#FFFFFF",
  borderRadius:"15px",
  boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.05)",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "760px",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  "&:focus": {
    width: "40ch",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0, 0, 0, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

function Home() {
  const [data, setData] = useState([]);

  //-------> get data from server <-----------

  useEffect(() => {
    
    getData();
    //-------> convert date to farsi format 
    moment.locale("fa", fa);
    moment.loadPersian();
    
  }, []);

  const getData = () => {
    axios({
      method: "get",
      url: "https://challenge.webjar.ir/posts",
      headers: "accept: application/json",
    })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  //-------------> CheckBoxList <--------------
  
  return (
    <div className={style.container}>
      <header className={style.headerWeb}>
        <p>وبلاگ</p>

        {/* ------------>SearchBox<------------  */}
        <RTL>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             sx={{height:"60px" , width:"760px"}}
              placeholder="جستجو کنید"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </RTL>
      </header>

      {/* ////////// contentBody //////////////////  */}

      <div className={style.contentBody}>

        {/* ------------> ListBox <------------  */}
        <div className={style.checkBox}>
          <p >دسته بندی</p>
          <ListItem style={{fontWeight: "400" , fontSize: "18px"}} />
        </div>

        {/* -----------> map posts >------------  */}
        <div className={style.posts}>
          {data?.map((item) => {
            let convertDate = item.createdAt.slice(0,10)
            return <BelogPost author={item.author} title={item.title} body={item.body} comment={item.commentCount } date={moment(convertDate, "YYYY/jM/jD").format( "jD" + "jMMMM" + "jYYYY" )}/>;
          })}

           {/* ------------- >pagination <--------------  */}
        <PaginationRounded></PaginationRounded>
        </div>

      </div>
    </div>
  );
}

export default Home;
