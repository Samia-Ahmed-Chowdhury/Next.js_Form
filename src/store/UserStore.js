import create from 'zustand';
import {devtools, persist} from 'zustand/middleware'

const UserStore = (set) => ({
    users: [],
    addUser: (user) => {
        set((state) => ({
            users: [user, ...state.users],
        }))
    },
    removeUser: (userId) => {
        set((state) => ({
            users: state.users.filter((u) => u.id !== userId)
        }))
    },
})

const useUserStore = create(
    devtools(
        persist(UserStore, {
            name: "users",
        })
    )
)


export default useUserStore;