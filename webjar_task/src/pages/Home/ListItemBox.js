import React,{useEffect , useState} from 'react';
//mui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import RTL from '../../projectSetting/RTL';
//api
import axios from 'axios';


export default function CheckboxList() {
  const [checked, setChecked] = useState([0]);
  const [data , setData] = useState([]);
  const [selected , setSelected] = useState([]);
 
  //--------------> Get Data ------------//
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios({
      method: "get",
      url: "https://challenge.webjar.ir/post-categories",
      headers: "accept: application/json",
    })
      .then((response) => {
        console.log(response);
        console.log(response.data[1].createdAt.slice(0,10))
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };


 const handleToggle = (value) => () => {
     
    console.log(value);
    setSelected([...value]);
    
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    
  };

  return (
    
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {data.filter(namee => namee.name.includes('سیستم')).map((value) => {
        
        const labelId = `checkbox-list-label-${value.name}`;
        
        
        return (
    <>
        <RTL>
          <ListItem
            key={value._id} 
          >
            
            <ListItemButton role={undefined} onClick={handleToggle(value._id)}  dense>
            <ListItemText id={labelId} primary={`${value.name}`} />
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value._id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          </RTL>
          </>
        );
      })}
    </List>
    
  );
}