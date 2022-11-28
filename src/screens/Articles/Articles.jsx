import React, {useEffect} from 'react';
import {FETCH_STATUSES} from "../../utils/constants";
import {Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../store/articles/reducer";
import {selectArticles, selectArticlesError, selectArticlesStatus} from "../../store/articles/selectors";

export const Articles = () => {
    const dispatch = useDispatch()

    const articles = useSelector(selectArticles)
    const error = useSelector(selectArticlesError)
    const status = useSelector(selectArticlesStatus)


    const sendRequest = async () => {
        dispatch(getArticles())
    }
    useEffect(() => {
        sendRequest()
    }, [])

    return <>
        <section style={{
            width: '70%',
            height: '100%',
            margin: '0 auto'
        }}>
            <h1>Articles</h1>
            <button
                style={{
                    width: '5rem',
                    height: '2rem',
                    margin: '5rem 0'
                }}
                onClick={sendRequest}>
                renew
            </button>
            {status === FETCH_STATUSES.REQUEST && <div style={{
                width: '100%',
                height: '5rem',
                margin: '0 auto'
            }}>
                <CircularProgress/>
            </div>}
            {error && <h4>{error}</h4>}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.5rem',
            }}>
                {articles.map((article) => (
                    <Card sx={{maxWidth: 345, minHeight: 450}} key={article.id}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={article.imageUrl}
                            alt={article.imageUrl}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {article.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><a href={article.url} target={'_blank'}>Learn More</a></Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </section>
    </>
}