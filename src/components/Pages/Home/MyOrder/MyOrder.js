import React, { useEffect, useState } from 'react'
import useAuth from '../../../../hooks/useAuth'

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const email = user.email;

    useEffect(() => {
        fetch(`https://polar-chamber-95190.herokuapp.com/orders/${email}`)
            .then(res => res.json())
        .then(data => setMyOrder(data));
    }, [email])

    const handleDelete = (id) => {
        const url=`https://polar-chamber-95190.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully');
                    const remaining = myOrder.filter(order => order._id !== id);
                    setMyOrder(remaining);
                }

        })
    }
    return (
        <section id='myorder' className='mx-5 my-5'>
            <h3 className='text-center pt-5'>Total Add Product : {myOrder.length}</h3>
            <div className='container table-responsive pt-5'>
                <table className="table table-hover">
                <thead className='table-dark'>
                 <tr>
                   <th scope="col">SL</th>
                   <th scope="col">Product</th>
                   <th scope="col">Email</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Confirm</th>
                 </tr>
                </thead>
                <tbody>
                {
                    myOrder.map(order =>
                        <tr key={order._id}><td>01</td>
                        <td>{order.productName}</td>
                        <td>{order.email}</td>
                        <td>${order.productPrice}</td>
                        <td onClick={() => handleDelete(order._id)} className='text-danger delete'>Delete</td>
                        <td className='confirm text-success'>Confirm</td>
                        </tr>
                        )
                 }
                </tbody>
                </table>
            </div>
        </section>
    )
}

export default MyOrder
