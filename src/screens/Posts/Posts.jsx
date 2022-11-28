import React, {useState} from "react";
import {addPost} from "../../store/posts/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectPosts} from "../../store/posts/selectors";
import {PostList} from "../../components/PostList/PostList";
import {Button, Input} from "@mui/material";
import styles from './Posts.module.css'

export const Posts = () => {
    const posts = useSelector(selectPosts)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            id: `ps-${Date.now()}`,
            image: './assets/images/wolf.gif',
            title,
            text
        }
        dispatch(
            addPost(newPost)
        )
        setTitle('')
        setText('')
    }

    return (
        <section className={styles.posts_section}>
            <h1>Posts</h1>
            <div className={styles.post_list}>
                <PostList posts={posts}/>
            </div>
            <form
                className={styles.post_form}
                onSubmit={handleSubmit}>
                <label>Title
                    <Input variant={'outlined'} sx={{
                        width: '100%'
                    }} type='text' value={title} onChange={event => setTitle(event.target.value)}/>
                </label>
                <label>Text
                    <Input variant={'outlined'} sx={{
                        width: '100%'
                    }} type='text' value={text} onChange={event => setText(event.target.value)}/>
                </label>
                <Button type='submit' onClick={handleSubmit}>send</Button>
            </form>

        </section>

    )
}