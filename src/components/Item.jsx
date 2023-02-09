import React from 'react'

const Item = () => {
    return (
        <>
            <main className='container__cards'>
                <section className='card'>
                    <div className='cover__card'>
                        <img src="../src/assets/guantes.jpg" alt="GUANTES" />
                    </div>
                    <h4>Guantes de Boxeo</h4>
                    <p>Sit enim voluptate quaerat consequatur soluta.
                        Provident nemo  ducimus totam.</p>
                    <hr />
                    <div className='footer__Card'>
                        <h4 className='precio'>$150.000</h4>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Item