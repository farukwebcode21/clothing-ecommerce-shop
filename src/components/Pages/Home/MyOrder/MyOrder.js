import React, { useEffect, useState } from 'react'
import useAuth from '../../../../hooks/useAuth'

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [control, setControl] = useState(false);
    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`)
            .then(res => res.json())
        .then(data => setMyOrder(data));
    }, [email])

    const handleDelete = (id) => {
        console.log('clicking')
        fetch(`http://localhost:5000/orders/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setControl(!control);
                    alert('Are you sure want delete');
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
                        <tr><td>01</td>
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
