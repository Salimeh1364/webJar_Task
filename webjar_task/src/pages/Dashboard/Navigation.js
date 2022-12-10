import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RTL from "../../projectSetting/RTL";

//popup
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Login from "./Login";

// style
import style from "../Dashboard/style/nav.module.css"
import Group from "../../asset/img/Group.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // ------->> LOgin-modal <<---------------

  // Modal style
    const contentStyle = { 
      width:'60vw',
      height:'65vh' ,
      background: '#fafafa',
      border: '1px solid #FFFFFF',
      borderRadius: '15px',
      top: "13vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "spaceBetween",
      alignItems: "center",
      fontSize: "12px",
      position:"relative"
     };
  const [showModal , setModal] = React.useState(false);

  const handleModal = () => {
    setModal(!showModal)
  }

  // ----------- >Nav Tab>---------------

  return (
    <>
    <RTL>
      <Box sx={{ width: "100%", color: "00c853" }}>
        <Box
          sx={{
            width: "100%",
            height: "128px",
            borderBottom: 1,
            borderColor: "divider",
            boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)",
            display: "flex",
            alignItems: "center",
            paddingLeft: "43.5px",
          }}
        >
          {/* ------------->insert Logo <------------------ */}
          
          <div style={{ paddingLeft: "163px", paddingRight: "10vw" }}>
            <img
              src={Group}
              alt="group"
              style={{ hight: "53px", width: "60px" }}
            />
          </div>

          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor=" primary"
            aria-label="#00c853 tabs example"
            TabIndicatorProps={{
              style: {
                background: "#00C853",
                color: "#00c853",
              },
            }}
            // ------------<style each tab>----------

            sx={{
              width:"40vw",
              "& button": { fontSize: "20px", marginRight: "3vw" },
              "& button:active": { transition: "3s", color: "#00c853" },
            }}
          >
            <Tab label="خانه" {...a11yProps(0)} />
            <Tab label="محصولات" {...a11yProps(1)} />
            <Tab label="خدمات" {...a11yProps(2)} />
            <Tab label="وبلاگ" {...a11yProps(3)} />
          </Tabs>

          <div className={style.boxButton} onClick={handleModal}>
            <button   className={style.loginButton} >ورود</button>
          </div>
        </Box>
        <TabPanel value={value} index={0}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-around",
              width: "8vw",
              marginRight:"7vw"
            }}
          >
            <p style={{ color: "#00c853" }}>خانه</p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-around",
              width: "8vw",
              marginRight:"10vw"
            }}
          >
            <p style={{}}>خانه</p> {">"}{" "}
            <p style={{ color: "#00c853" }}>محصولات</p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-around",
              width: "8vw",
              marginRight:"10vw"
            }}
          >
            <p style={{}}>خانه</p> {">"}{" "}
            <p style={{ color: "#00c853" }}>خدمات</p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-around",
              width: "8vw",
              marginRight:"10vw"
            }}
          >
            <p style={{}}>خانه</p> {">"}{" "}
            <p style={{ color: "#00c853" }}>وبلاگ</p>
          </div>
        </TabPanel>
      </Box>
    </RTL>

    {/* // ------->Modal<-----------  */}

    <Popup position="top left"
     modal
     nested
     {...{contentStyle}}
     open={showModal}
    >
    {close => (
      <div>
        <Login/>
      </div>
    )}
  </Popup>
  </>
  );
}
