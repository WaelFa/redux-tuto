import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

class Post extends Component {

    componentWillUnmount() {
        this.props.fetchPosts();
    }
 
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.key} >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    post: state.post.items 
})
export default connect(mapStateToProps, {fetchPosts})(Post)