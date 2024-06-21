import axios from "axios";
import { createContext, useState } from "react";
import { NavLink } from "react-router-dom";

const UsersContext = createContext()

const UsersProvider = ({ children }) => {


    const [users, setUsers] = useState()

    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState()


    const getUserList = async () => {
        try {
            const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`)
            setUsers(data.data)
            setTotalPage(data.total_pages)

        } catch (error) {
            console.log(error);
        }
    }

    const handlePageClick = (i) => {
        setPage(i)

    }

    const handlePages = () => {
        let pages = []
        for (let i = 1; i <= totalPage; i++) {

            pages.push(
                <NavLink
                    onClick={() => handlePageClick(i)}
                    key={i}>
                    {i}
                </NavLink>)
        }

        return pages
    }

    const handleEdit=(id)=>{
        console.log("edit"+id);
    }

    const handleDelete=async(id)=>{
        try {
            await axios.delete(`https://reqres.in/api/users/${id}`)
            console.log("deleted" +id);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UsersContext.Provider value={{ getUserList, users, handlePageClick, page, totalPage, handlePages, handleEdit, handleDelete }}>
            {children}
        </UsersContext.Provider>
    )
}


export { UsersContext, UsersProvider }