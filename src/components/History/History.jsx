import React from 'react'

function History() {
    return (
        <div>
        <header className="section-header pt-3"></header>

          <section className="section-content padding-y pb-5">
            <div className="container">
              <div className="row">
                <main className="col-md-24">

                  <div className="card">
                    <table className="table table-borderless table-shopping-cart">
                      <h3 className='ml ml-5 pt-3'>History</h3>
                    </table>
                  </div>

                    <div className="p-3 bg-white rounded mt-4"
                        style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }} >
                        <div className="d-flex justify-content-between">
                          <p className="px-2 py-1 ">Free 20kg baggage</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="d-flex mt-4">
                          <div className="mx-3">
                            <h6>Air Asia</h6>
                            <h6>Indonesia AirAsia</h6>
                          </div>
                          <div className="mx-3">
                            <h6>22:15</h6>
                            <h6 className="fonts-light">CGK</h6>
                          </div>
                        </div>

                  </div>
                  </div>
                  
                </main>
              </div>
            </div>
          </section>
      </div>
    );
}
export default History;