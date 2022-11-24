import React, {useEffect} from 'react';
import {FETCH_STATUSES} from "../../utils/constants";
import {CircularProgress} from "@mui/material";
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
                gridTemplateColumns:'repeat(5, 1fr)',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.5rem',
            }}>
                {articles.map((article) => (
                    <a href={article.url} target={'_blank'} key={article.id}>
                        <div
                            style={{
                                width: '250px',
                                height: '300px',
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'space-between',
                                border: '1px solid black'
                            }}
                        >

                            <img src={article.imageUrl} style={{
                                width: '100',
                                height: 'auto'
                            }} alt={article.imageUrl}/>
                            <h5 style={{textAlign: 'center'}}>{article.title}</h5>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    </>
}