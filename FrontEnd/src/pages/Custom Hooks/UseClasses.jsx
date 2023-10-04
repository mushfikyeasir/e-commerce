// import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import { useEffect } from "react";

const UseClasses = () => {
    const [PopClasses, setPopClasses] = useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setPopClasses(data);
                // setLoading(false);
            });
    }, [])

    // const {data: menu = [], isLoading: loading, refetch} = useQuery({
    //     queryKey: ['menu'],
    //     queryFn: async() => {
    //         const res = await fetch('http://localhost:5000/classes');
    //         return res.json();
    //     }
    // })

    return [PopClasses]
    // return [PopClasses, refetch]
}

export default UseClasses;