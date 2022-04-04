import useUser from '../../Hooks/useUser';
import image from '../../image.jpg'
import HomeReviewsDispaly from '../HomeReviewsDispaly/HomeReviewsDispaly';




const Home = () => {

    const  [users, setUsers] = useUser()




    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>

                <div className='col col-lg-6  p-5'>
                    <h1>The Best Barefoot Shoes for Walking or Running</h1>
                    <p>YOU WERE BORN barefoot, and a growing body of evidence suggests you should have stayed that way. The technology and padding of the modern shoe protect your feet, but protection isn't always what you want. Feet were made to stretch, flex, roll, and bend, and letting them do what they evolved to do can reduce impact injuries and provide a host of other benefits.</p>
                    <button type="button" class="btn btn-warning ">Show more</button>
                </div>

                <div className='col col-lg-6 me-auto'>
                    <img className='img-fluid' src={image} alt="" />
                </div>



            </div>



            <div className='container m-5'>
            <h1 className='m-5 text-center'>Coustomar reviews {users.length} </h1>
                <div className='row row-cols-1 row-cols-md-3 g-4 m-5'>
                   
                           
                    {
                        users.map(user => <HomeReviewsDispaly
                        
                        key={user.id}
                        user ={user}
                        
                        ></HomeReviewsDispaly>)
                    }
                   

                </div>
               <div className='text-center mb-5'>
               <button type="button" class="btn btn-success">All Display reviews</button>
               </div>

            </div>
            
        </div>
    );
};

export default Home;