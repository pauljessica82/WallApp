const dev = {
    url: {
        "BASE_POSTS_API": "http://127.0.0.1:8000/api/posts/",
        "BASE_URL": "http://127.0.0.1:8000/api"
    }
};

const prod = {
    url: {
        "BASE_API": "https://jessiecodes-reminderapp.herokuapp.com/api/tasks/",

    }
};

export const detailRoute = (id) => {
    return config.url.BASE_API + `${id}/`
}


export const config = process.env.NODE_ENV === 'development' ? dev : prod;