import React from 'react';

const Stat = () => {
    return (
        <div className='container-fluid text-center border shadow-sm rounded mt-5'>
            <div className='row'>

                <div className='col-lg-4'>
                    <div className='d-flex flex-column justify-content-center align-items-center text-center p-3'>
                        <h1 style={{ color: 'tomato', fontWeight: '900' }}>50,000+</h1>
                        <h5 style={{ fontWeight: '900' }}>Registared <br /> Customer</h5>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='d-flex flex-column justify-content-center align-items-center text-center p-3'>
                        <h1 style={{ color: 'tomato', fontWeight: '900' }}>75,000+</h1>
                        <h5 style={{ fontWeight: '900' }}>Products <br /> Delivered</h5>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='d-flex flex-column justify-content-center align-items-center text-center p-3'>
                        <h1 style={{ color: 'tomato', fontWeight: '900' }}>10,000+</h1>
                        <h5 style={{ fontWeight: '900' }}>Products <br /> Available</h5>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default Stat;
