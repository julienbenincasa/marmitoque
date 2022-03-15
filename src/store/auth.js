import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: {
            id: null,
            email: null,
            pseudo: null
        }
    },
    getters: {
        authenticated (state) {
            return state.token != null && state.user != null
        },

        userPseudo (state) {
            return state.user.pseudo
        },

        userId (state) {
            return state.user.id
        },

        token (state) {
            return state.token
        }
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        },
        SET_USER (state, user) {
            state.user.id = user[0]._id
            state.user.email = user[0].email
            state.user.pseudo = user[0].pseudo
        }
    },
    actions: {
        async signIn ({ dispatch }, credentials) {
            const response = await axios.post("https://marmitoque-server.herokuapp.com/auth/login", {
                email: credentials.email,
                password: credentials.password
            })
            .catch(function(error) {
                if (error.response && error.response.status === 401) {
                    alert(error.response.data.error)
                }
                return
            })

            return dispatch('attempt', response.data.jwt)
        },

        async newRecipe (credentials) {
            const response = await axios.post("https://marmitoque-server.herokuapp.com/recipes", credentials, { headers: {"Authorization" : `Bearer ${token}`}})
            .catch(function(error) {
                if (error.response && error.response.status === 401) {
                    alert(error.response.data.error)
                }
                return
            })
        },

        async attempt ({ commit }, token) {
            commit('SET_TOKEN', token)
            const response = await axios.get("https://marmitoque-server.herokuapp.com/auth/me", { headers: {"Authorization" : `Bearer ${token}`}})
            commit('SET_USER', response.data)
        }
    }
  };
  

