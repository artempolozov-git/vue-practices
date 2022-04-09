export default {
    state: {
        comments: [

        ]
    },
    getters: {
        VALID_COMMENTS (state) {
            return state.comments.filter(p => {
                return p.name && p.body
            })
        }
    },
    actions: {
        async FETCH_COMMENTS (context, limit=4) {
            let res = await fetch(
                'https://jsonplaceholder.typicode.com/comments?_limit=' + limit
        );
            let posts = await res.json();
            context.commit('UPDATE_COMMENTS', posts)
        }
    },
    mutations: {
         UPDATE_COMMENTS (state, posts) {
             state.comments = posts
         },
        CREATE_COMMENTS (state, newComment) {
            state.comments.unshift(newComment)
        },
    },
}