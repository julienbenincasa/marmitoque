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
                  console.log(error.response.data.error)
                }
                return
            })

            dispatch('attempt', response.data.jwt)
        },

        async attempt ({ commit }, token) {
            commit('SET_TOKEN', token)
            const response = await axios.get("https://marmitoque-server.herokuapp.com/auth/me", { headers: {"Authorization" : `Bearer ${token}`}})
            commit('SET_USER', response.data)
        }
    }
  };
  

