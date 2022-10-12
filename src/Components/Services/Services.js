import React from 'react';
import shipping from '../../Asset/images/service-3.png';
const Services = () => {
    return (
        <div className='container-fluid mt-5'>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
                <div class="col ">
                    <div class="card h-100 text-center" >
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='card-img-top' style={{ height: '200px', width: '200px' }} src={shipping} alt='' />
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Sustainable Matarial</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius sapien erat, eu egestas velit facilisis sed</p>
                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card h-100 text-center" >
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='card-img-top' style={{ height: '200px', width: '200px' }} src={shipping} alt='' />
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Sustainable Matarial</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius sapien erat, eu egestas velit facilisis sed</p>
                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card h-100 text-center">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='card-img-top' style={{ height: '200px', width: '200px' }} src={shipping} alt='' />
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Sustainable Matarial</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius sapien erat, eu egestas velit facilisis sed</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;