'use client'
import React from 'react'
import useUserStore from '@/store/UserStore'
import { FaTrash } from 'react-icons/fa';

function DataList() {
    const { users, removeUser } = useUserStore(
        (state) => ({
            users: state.users,
            removeUser: state.removeUser,
        })
    )
    console.log(users)

    return (
        <>
            {
                users && Array.isArray(users) && users.length > 0 ? (
                    <div className='lg:px-12 px-5'>
                        <div className='my-8'>
                            <h2 className='text-center text-xl font-medium  mx-auto'>All Users Data </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table  table-xs ">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>User Name</th>
                                        <th>User Email</th>
                                        <th>User Age</th>
                                        <th>Deete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) =>
                                            <tr key={user.id}>
                                                <td>{index + 1}</td>
                                                <td>{user.userInfo?.name}</td>
                                                <td>${user.userInfo?.email}</td>
                                                <td>{user.userInfo?.age}</td>
                                                <td><FaTrash className='text-secondaryColor' onClick={() => {
                                                    removeUser(user.id)}} />
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
                    :
                    <h1 className='text-center mt-16 font-bold'>No User Data available</h1>
            }
        </>
    )

}

export default DataList