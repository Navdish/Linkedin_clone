import { Box, FormControl, IconButton, InputAdornment, OutlinedInput, Tab, Tabs, Typography } from "@mui/material"
import React from "react";
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function a22yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Messaging = () => {

    const [value, setValue] = React.useState(0);
    const [value2, setValue2] = React.useState(10);
    const [horizontalValue, setHorizontalValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    const handleChangeHorizontal = (event, newValue) => {
        setHorizontalValue(newValue);
      };

    return(
        <Box sx={{backgroundColor:"#F4F2EE", display:"flex", justifyContent:"center", height:"100vh"}}>
            <Box sx={{pt:"20px"}}>
            <Box sx={{ width:"1128px", display:"flex", gap:"2.4rem"}}>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                >
            

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={horizontalValue} onChange={handleChangeHorizontal} aria-label="basic tabs example">
                <Tab label="Focused" {...a22yProps(0)} />
                <Tab label="Other" {...a22yProps(1)} />
                </Tabs>
            </Box>


            <CustomTabPanel value={horizontalValue} index={0}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    
                </Tabs>
            </CustomTabPanel>

            <CustomTabPanel value={horizontalValue} index={1}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value2}
                    onChange={handleChange2}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Item 10" {...a11yProps(10)} />
                    <Tab label="Item 11" {...a11yProps(11)} />
                    <Tab label="Item 12" {...a11yProps(12)} />
                    <Tab label="Item 13" {...a11yProps(13)} />
                    
                </Tabs>
            </CustomTabPanel>





                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                


                <TabPanel value={value2} index={10}>
                    Item 1 One
                </TabPanel>
                <TabPanel value={value2} index={11}>
                    Item 1 Two
                </TabPanel>
                <TabPanel value={value2} index={12}>
                    Item 1 Three
                </TabPanel>
                <TabPanel value={value2} index={13}>
                    Item 1 Four
                </TabPanel>
               
                </Box>
            </Box>
            </Box>
        </Box>
    )
}

export default Messaging

















{/* <Box sx={{ width:"782px", backgroundColor:"white", display:"flex"}}>
                    <Box sx={{width:"313px", border:"1px solid #e8e8e8"}}>
                        <Box sx={{height:"48px", width:"100%",  border:"1px solid #e8e8e8", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Typography sx={{pl:"16px", pr:"16px"}}>Messaging</Typography>
                            <Box sx={{mr:"8px", display:"flex"}}>
                                <IconButton sx={{width:"40px"}}><MoreHorizOutlinedIcon/></IconButton>
                                <IconButton sx={{width:"40px"}}><EditOutlinedIcon/></IconButton>
                            </Box>
                            
                        </Box>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                                endAdornment={<InputAdornment position="end"><MenuIcon/></InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                'aria-label': 'weight',
                                }}
                            />
                        </FormControl>


                        
                    </Box>
                    <Box sx={{width:"100%",height:"100%", border:"1px solid #e8e8e8"}}>
                        <Box sx={{width:"100%", pl:"12px", pr:"12px", height:"43px", outline:"1px solid #e8e8e8", boxSizing:"border-box"}}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:"322px",height:"835px", backgroundColor:"white"}}>
                
                </Box> */}