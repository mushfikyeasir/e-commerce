// import { useQuery } from '@tanstack/react-query'
import { useQuery } from 'react-query';

// import useAxiosSecure from './useAxiosSecure';
// import useAuth from './useAuth';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useCart = () => {
    // const { user, loading } = useAuth();
    const {user}=useContext(AuthContext)
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: ClassCart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/dashboard?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },

    // queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/dashboard?email=${user?.email}`)
    //         return res.json();
    //     },
    })
    

    return [ClassCart, refetch]

}
export default useCart;

