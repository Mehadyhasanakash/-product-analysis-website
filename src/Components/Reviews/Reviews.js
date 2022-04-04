import React from 'react';
import ReviewsDisplay from '../ReviewsDisplay/ReviewsDisplay';
import useUser from '../../Hooks/useUser';

const Reviews = () => {

    const [users, setUsers] = useUser()


    return (
       <div className='container'>
            <div className=" row row-cols-1 row-cols-md-3 g-4 m-5">

            {
                users.map(user => <ReviewsDisplay

                    key={user.id}
                    user={user}


                ></ReviewsDisplay>)
            }
        </div>
       </div>
    );
};

export default Reviews;