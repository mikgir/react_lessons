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
            width: '60%',
            height: '100%',
            margin: '0 auto'
        }}>
            <h1>Articles</h1>
            <button onClick={sendRequest}>new articles</button>
            {status === FETCH_STATUSES.REQUEST && <div style={{
                width: '60%',
                height: '5rem',
                margin: '0 auto'
            }}>
                <CircularProgress/>
            </div>}
            {error && <h4>{error}</h4>}
            <div>
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            {article.title}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}