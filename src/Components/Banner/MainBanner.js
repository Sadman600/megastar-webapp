import React from 'react';
import watch from '../../Asset/images/watch-11.png';
import mbannerbg from '../../Asset/images/main-banner-1.jpg';
const MainBanner = () => {
    return (
        <div className='container-fluid' >
            {/* style={{ backgroundImage: `url(${mbannerbg})` }} */}
            <div class="container" >
                <div class="row">
                    <div class="col-lg-6">
                        <div className='mt-5'>
                            <h4 style={{ color: 'tomato', fontWeight: '900' }}>Welcome to Megastar</h4>
                            <div >
                                <h1 style={{ fontSize: '60px', fontWeight: '900' }}>Better <span style={{ color: 'tomato' }}>Gadget</span> for</h1>
                                <h1 style={{ fontSize: '60px', fontWeight: '900' }}>Better Lifestyle</h1>
                            </div>
                            <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus arcu vitae odio hendrerit gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            <div>
                                <button className='btn btn-danger'>SHOP NOW</button>
                                <button className='btn btn-outline-success ms-3'>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div className='d-flex justify-content-center align-item-center mt-5'>
                            <img className='w-50' src={watch} alt='watch' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;