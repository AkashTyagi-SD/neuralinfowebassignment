import React, { useEffect, memo, useState } from 'react';
import { Typography, makeStyles, List, ListItem, Grid, ListItemText } from '@material-ui/core';
import { BASE_URL } from '../constant/Config';
import { useHistory } from 'react-router-dom';
import Header from '../common/Header';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 16,
    },
    inline: {
        display: 'inline',
    },
}));

function AllPostList () {
    const [data, setData] = useState([]);
    const history = useHistory();
    const classes = useStyles();

    /**
     * Description:This function will fetch post list data from server
     */
    const fetchPostList = async () => {
        try {
            let response = await fetch(`${BASE_URL}posts`);
            let json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPostList();
    }, []);

    return (
        <div>
            <Header title="Post" />
            <Grid justify="center" container direction="column" className={classes.root}>
                {data.map((item) => (
                    <List className={classes.list} key={item.id}>
                        <ListItem
                            style={{ cursor: 'pointer' }}
                            alignItems="flex-start"
                            onClick={() => {
                                history.push({
                                    pathname: '/postdetails',
                                    state: { postid: item.id },
                                });
                            }}
                        >
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                            Title:
                                        </Typography>
                                        {item.title}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                ))}
            </Grid>
        </div>
    );
}

export default memo(AllPostList);
