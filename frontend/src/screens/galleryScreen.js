import '../App.css'
import { useState, useEffect } from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions';
import { Divider } from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[50],
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function Gallery() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <>
            <Box sx={{ width: '100%', background: 'rgb(17, 24, 39)', color: 'white' }} >
                <Box sx={{ borderBottom: 1, }}>
                    <ThemeProvider theme={theme}>
                        <Tabs value={value}
                            indicatorColor="primary" centered onChange={handleChange} aria-label="Collections">
                            <Tab label="Humans" {...a11yProps(0)} />
                            <Tab label="Animals" {...a11yProps(1)} />
                            <Tab label="GTA" {...a11yProps(2)} />

                        </Tabs>
                    </ThemeProvider>
                </Box>
                <TabPanel value={value} index={0}>
                    {loading ? (<div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div>)
                        : error ? (<h2>{error}</h2>) : (
                            products.map((product) => (
                                product.group === 'Humans' ? (
                                    <>
                                        <img src={product.imageUrl} alt={product.name} className="mx-auto md:p-5 p-1 max-h-screen" />
                                        <p className="text-center mb-10 text-gray-200 text-xl ">{product.name}</p>
                                        <Divider/>
                                    </>
                                ) : (null)
                            ))
                        )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {loading ? (<div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div>)
                        : error ? (<h2>{error}</h2>) : (
                            products.map((product) => (
                                product.group === 'Animals' ? (
                                    <>
                                        <img src={product.imageUrl} alt={product.name} className="mx-auto md:p-5 p-1 max-h-screen" />
                                        <p className="text-center mb-10 text-gray-200 text-xl">{product.name}</p>
                                        <Divider/>
                                    </>
                                ) : (null)
                            ))
                        )}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {loading ? (<div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div>)
                        : error ? (<h2>{error}</h2>) : (
                            products.map((product) => (
                                product.group === 'GTA' ? (
                                    <>
                                        <img src={product.imageUrl} alt={product.name} className="mx-auto md:p-5 p-1 max-h-screen" />
                                        <p className="text-center mb-10 text-gray-200 text-xl">{product.name}</p>
                                        <Divider/>
                                    </>
                                ) : (null)
                            ))
                        )}
                </TabPanel>
            </Box>
        </>
    )
}

export default Gallery;
