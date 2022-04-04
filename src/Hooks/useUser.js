import { useEffect, useState } from "react"

const useUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return [users, setUsers]
}

export default useUser;