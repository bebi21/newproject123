import React from "react";

export default function Main() {
  return (
    <>
      <div>
        <section className="home-slider owl-carousel">
          <div
            className="slider-item"
            style={{ backgroundImage: "url(images/bg_1.jpg)" }}
          >
            <div className="overlay" />
            <div className="container">
              <div
                className="row slider-text justify-content-center align-items-center"
                data-scrollax-parent="true"
              >
                <div className="col-md-8 col-sm-12 text-center ftco-animate">
                  <span className="subheading">Welcome</span>
                  <h1 className="mb-4">The Best Coffee Testing Experience</h1>
                  <p className="mb-4 mb-md-5">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                      Order Now
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                    >
                      View Menu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slider-item"
            style={{ backgroundImage: "url(images/bg_2.jpg)" }}
          >
            <div className="overlay" />
            <div className="container">
              <div
                className="row slider-text justify-content-center align-items-center"
                data-scrollax-parent="true"
              >
                <div className="col-md-8 col-sm-12 text-center ftco-animate">
                  <span className="subheading">Welcome</span>
                  <h1 className="mb-4">Amazing Taste &amp; Beautiful Place</h1>
                  <p className="mb-4 mb-md-5">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                      Order Now
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                    >
                      View Menu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slider-item"
            style={{ backgroundImage: "url(images/bg_3.jpg)" }}
          >
            <div className="overlay" />
            <div className="container">
              <div
                className="row slider-text justify-content-center align-items-center"
                data-scrollax-parent="true"
              >
                <div className="col-md-8 col-sm-12 text-center ftco-animate">
                  <span className="subheading">Welcome</span>
                  <h1 className="mb-4">Creamy Hot and Ready to Serve</h1>
                  <p className="mb-4 mb-md-5">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                      Order Now
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                    >
                      View Menu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-intro">
          <div className="container-wrap">
            <div className="wrap d-md-flex align-items-xl-end">
              <div className="info">
                <div className="row no-gutters">
                  <div className="col-md-4 d-flex ftco-animate">
                    <div className="icon">
                      <span className="icon-phone" />
                    </div>
                    <div className="text">
                      <h3>000 (123) 456 7890</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
                    <div className="icon">
                      <span className="icon-my_location" />
                    </div>
                    <div className="text">
                      <h3>198 West 21th Street</h3>
                      <p>
                        {" "}
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
                    <div className="icon">
                      <span className="icon-clock-o" />
                    </div>
                    <div className="text">
                      <h3>Open Monday-Friday</h3>
                      <p>8:00am - 9:00pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="book p-4">
                <h3>Book a Table</h3>
                <form action="#" className="appointment-form">
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <div className="input-wrap">
                        <div className="icon">
                          <span className="ion-md-calendar" />
                        </div>
                        <input
                          type="text"
                          className="form-control appointment_date"
                          placeholder="Date"
                        />
                      </div>
                    </div>
                    <div className="form-group ml-md-4">
                      <div className="input-wrap">
                        <div className="icon">
                          <span className="ion-ios-clock" />
                        </div>
                        <input
                          type="text"
                          className="form-control appointment_time"
                          placeholder="Time"
                        />
                      </div>
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <textarea
                        name
                        id
                        cols={30}
                        rows={2}
                        className="form-control"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="submit"
                        defaultValue="Appointment"
                        className="btn btn-white py-3 px-4"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-about d-md-flex">
          <div
            className="one-half img"
            style={{ backgroundImage: "url(images/about.jpg)" }}
          />
          <div className="one-half ftco-animate">
            <div className="overlap">
              <div className="heading-section ftco-animate ">
                <span className="subheading">Discover</span>
                <h2 className="mb-4">Our Story</h2>
              </div>
              <div>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-services">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ftco-animate">
                <div className="media d-block text-center block-6 services">
                  <div className="icon d-flex justify-content-center align-items-center mb-5">
                    <span className="flaticon-choices" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Easy to Order</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="media d-block text-center block-6 services">
                  <div className="icon d-flex justify-content-center align-items-center mb-5">
                    <span className="flaticon-delivery-truck" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Fastest Delivery</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="media d-block text-center block-6 services">
                  <div className="icon d-flex justify-content-center align-items-center mb-5">
                    <span className="flaticon-coffee-bean" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Quality Coffee</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 pr-md-5">
                <div className="heading-section text-md-right ftco-animate">
                  <span className="subheading">Discover</span>
                  <h2 className="mb-4">Our Menu</h2>
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn btn-primary btn-outline-primary px-4 py-3"
                    >
                      View Full Menu
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="menu-entry">
                      <a
                        href="#"
                        className="img"
                        style={{ backgroundImage: "url(images/menu-1.jpg)" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="menu-entry mt-lg-4">
                      <a
                        href="#"
                        className="img"
                        style={{ backgroundImage: "url(images/menu-2.jpg)" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="menu-entry">
                      <a
                        href="#"
                        className="img"
                        style={{ backgroundImage: "url(images/menu-3.jpg)" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="menu-entry mt-lg-4">
                      <a
                        href="#"
                        className="img"
                        style={{ backgroundImage: "url(images/menu-4.jpg)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="ftco-counter ftco-bg-dark img"
          id="section-counter"
          style={{ backgroundImage: "url(images/bg_2.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <div className="icon">
                          <span className="flaticon-coffee-cup" />
                        </div>
                        <strong className="number" data-number={100}>
                          0
                        </strong>
                        <span>Coffee Branches</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <div className="icon">
                          <span className="flaticon-coffee-cup" />
                        </div>
                        <strong className="number" data-number={85}>
                          0
                        </strong>
                        <span>Number of Awards</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <div className="icon">
                          <span className="flaticon-coffee-cup" />
                        </div>
                        <strong className="number" data-number={10567}>
                          0
                        </strong>
                        <span>Happy Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <div className="icon">
                          <span className="flaticon-coffee-cup" />
                        </div>
                        <strong className="number" data-number={900}>
                          0
                        </strong>
                        <span>Staff</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section ftco-animate text-center">
                <span className="subheading">Discover</span>
                <h2 className="mb-4">Best Coffee Sellers</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="menu-entry">
                  <a
                    href="#"
                    className="img"
                    style={{ backgroundImage: "url(images/menu-1.jpg)" }}
                  />
                  <div className="text text-center pt-4">
                    <h3>
                      <a href="#">Coffee Capuccino</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                    <p className="price">
                      <span>$5.90</span>
                    </p>
                    <p>
                      <a
                        href="#"
                        className="btn btn-primary btn-outline-primary"
                      >
                        Add to Cart
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="menu-entry">
                  <a
                    href="#"
                    className="img"
                    style={{ backgroundImage: "url(images/menu-2.jpg)" }}
                  />
                  <div className="text text-center pt-4">
                    <h3>
                      <a href="#">Coffee Capuccino</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                    <p className="price">
                      <span>$5.90</span>
                    </p>
                    <p>
                      <a
                        href="#"
                        className="btn btn-primary btn-outline-primary"
                      >
                        Add to Cart
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="menu-entry">
                  <a
                    href="#"
                    className="img"
                    style={{ backgroundImage: "url(images/menu-3.jpg)" }}
                  />
                  <div className="text text-center pt-4">
                    <h3>
                      <a href="#">Coffee Capuccino</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                    <p className="price">
                      <span>$5.90</span>
                    </p>
                    <p>
                      <a
                        href="#"
                        className="btn btn-primary btn-outline-primary"
                      >
                        Add to Cart
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="menu-entry">
                  <a
                    href="#"
                    className="img"
                    style={{ backgroundImage: "url(images/menu-4.jpg)" }}
                  />
                  <div className="text text-center pt-4">
                    <h3>
                      <a href="#">Coffee Capuccino</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                    <p className="price">
                      <span>$5.90</span>
                    </p>
                    <p>
                      <a
                        href="#"
                        className="btn btn-primary btn-outline-primary"
                      >
                        Add to Cart
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-gallery">
          <div className="container-wrap">
            <div className="row no-gutters">
              <div className="col-md-3 ftco-animate">
                <a
                  href="gallery.html"
                  className="gallery img d-flex align-items-center"
                  style={{ backgroundImage: "url(images/gallery-1.jpg)" }}
                >
                  <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-search" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 ftco-animate">
                <a
                  href="gallery.html"
                  className="gallery img d-flex align-items-center"
                  style={{ backgroundImage: "url(images/gallery-2.jpg)" }}
                >
                  <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-search" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 ftco-animate">
                <a
                  href="gallery.html"
                  className="gallery img d-flex align-items-center"
                  style={{ backgroundImage: "url(images/gallery-3.jpg)" }}
                >
                  <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-search" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 ftco-animate">
                <a
                  href="gallery.html"
                  className="gallery img d-flex align-items-center"
                  style={{ backgroundImage: "url(images/gallery-4.jpg)" }}
                >
                  <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-search" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-menu">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Discover</span>
                <h2 className="mb-4">Our Products</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row d-md-flex">
              <div className="col-lg-12 ftco-animate p-md-5">
                <div className="row">
                  <div className="col-md-12 nav-link-wrap mb-5">
                    <div
                      className="nav ftco-animate nav-pills justify-content-center"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        className="nav-link active"
                        id="v-pills-1-tab"
                        data-toggle="pill"
                        href="#v-pills-1"
                        role="tab"
                        aria-controls="v-pills-1"
                        aria-selected="true"
                      >
                        Main Dish
                      </a>
                      <a
                        className="nav-link"
                        id="v-pills-2-tab"
                        data-toggle="pill"
                        href="#v-pills-2"
                        role="tab"
                        aria-controls="v-pills-2"
                        aria-selected="false"
                      >
                        Drinks
                      </a>
                      <a
                        className="nav-link"
                        id="v-pills-3-tab"
                        data-toggle="pill"
                        href="#v-pills-3"
                        role="tab"
                        aria-controls="v-pills-3"
                        aria-selected="false"
                      >
                        Desserts
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex align-items-center">
                    <div
                      className="tab-content ftco-animate"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-1"
                        role="tabpanel"
                        aria-labelledby="v-pills-1-tab"
                      >
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a
                                href="#"
                                className="menu-img img mb-4"
                                style={{
                                  backgroundImage: "url(images/dish-1.jpg)",
                                }}
                              />
                              <div className="text">
                                <h3>
                                  <a href="#">Grilled Beef</a>
                                </h3>
                                <p>
                                  Far far away, behind the word mountains, far
                                  from the countries Vokalia and Consonantia.
                                </p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-outline-primary"
                                  >
                                    Add to cart
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a
                                href="#"
                                className="menu-img img mb-4"
                                style={{
                                  backgroundImage: "url(images/dish-2.jpg)",
                                }}
                              />
                              <div className="text">
                                <h3>
                                  <a href="#">Grilled Beef</a>
                                </h3>
                                <p>
                                  Far far away, behind the word mountains, far
                                  from the countries Vokalia and Consonantia.
                                </p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-outline-primary"
                                  >
                                    Add to cart
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a
                                href="#"
                                className="menu-img img mb-4"
                                style={{
                                  backgroundImage: "url(images/dish-3.jpg)",
                                }}
                              />
                              <div className="text">
                                <h3>
                                  <a href="#">Grilled Beef</a>
                                </h3>
                                <p>
                                  Far far away, behind the word mountains, far
                                  from the countries Vokalia and Consonantia.
                                </p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-outline-primary"
                                  >
                                    Add to cart
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-2"
                        role="tabpanel"
                        aria-labelledby="v-pills-2-tab"
                      >
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a
                                href="#"
                                className="menu-img img mb-4"
                                style={{
                                  backgroundImage: "url(images/drink-1.jpg)",
                                }}
                              />
                              <div className="text">
                                <h3>
                                  <a href="#">Lemonade Juice</a>
                                </h3>
                                <p>
                                  Far far away, behind the word mountains, far
                                  from the countries Vokalia and Consonantia.
                                </p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-outline-primary"
                                  >
                                    Add to cart
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a
                                href="#"
                                className="menu-img img mb-4"
                                style={{
                                  backgroundImage: "url(images/drink-2.jpg)",
                                }}
                              />
                              <div className="text">
                                <h3>
                                  <a href="#">Pineapple Juice</a>
                                </h3>
                                <p>
                                  Far far away, behind the word mountains, far
                                  from the countries Vokalia and Consonantia.
                                </p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-outline-primary"
                                  >
                                    Add to cart
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a
                                href="#"
                                className="menu-img img mb-4"
                                style={{
                                  backgroundImage: "url(images/drink-3.jpg)",
                                }}
                              />
                              <div className="text">
                                <h3>
                                  <a href="#">Soda Drinks</a>
                                </h3>
                                <p>
                                  Far far away, behind the word mountains, far
                                  from the countries Vokalia and Consonantia.
                                </p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-outline-primary"
                                  >
                                    Add to cart
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-3"
                        role="tabpanel"
                        aria-labelledby="v-pills-3-tab"
                      >
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a
                                href="#"
                                className="menu-img img mb-4"
                                style={{
                                  backgroundImage: "url(images/dessert-1.jpg)",
                                }}
                              />
                              <div className="text">
                                <h3>
                                  <a href="#">Hot Cake Honey</a>
                                </h3>
                                <p>
                                  Far far away, behind the word mountains, far
                                  from the countries Vokalia and Consonantia.
                                </p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-outline-primary"
                                  >
                                    Add to cart
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a
                                href="#"
                                className="menu-img img mb-4"
                                style={{
                                  backgroundImage: "url(images/dessert-2.jpg)",
                                }}
                              />
                              <div className="text">
                                <h3>
                                  <a href="#">Hot Cake Honey</a>
                                </h3>
                                <p>
                                  Far far away, behind the word mountains, far
                                  from the countries Vokalia and Consonantia.
                                </p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-outline-primary"
                                  >
                                    Add to cart
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a
                                href="#"
                                className="menu-img img mb-4"
                                style={{
                                  backgroundImage: "url(images/dessert-3.jpg)",
                                }}
                              />
                              <div className="text">
                                <h3>
                                  <a href="#">Hot Cake Honey</a>
                                </h3>
                                <p>
                                  Far far away, behind the word mountains, far
                                  from the countries Vokalia and Consonantia.
                                </p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-outline-primary"
                                  >
                                    Add to cart
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="ftco-section img"
          id="ftco-testimony"
          style={{ backgroundImage: "url(images/bg_1.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Testimony</span>
                <h2 className="mb-4">Customers Says</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
          <div className="container-wrap">
            <div className="row d-flex no-gutters">
              <div className="col-lg align-self-sm-end ftco-animate">
                <div className="testimony">
                  <blockquote>
                    <p>
                      “Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small.”
                    </p>
                  </blockquote>
                  <div className="author d-flex mt-4">
                    <div className="image mr-3 align-self-center">
                      <img src="images/person_1.jpg" alt />
                    </div>
                    <div className="name align-self-center">
                      Louise Kelly{" "}
                      <span className="position">Illustrator Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg align-self-sm-end">
                <div className="testimony overlay">
                  <blockquote>
                    <p>
                      “Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name of Lorem
                      Ipsum decided to leave for the far World of Grammar.”
                    </p>
                  </blockquote>
                  <div className="author d-flex mt-4">
                    <div className="image mr-3 align-self-center">
                      <img src="images/person_2.jpg" alt />
                    </div>
                    <div className="name align-self-center">
                      Louise Kelly{" "}
                      <span className="position">Illustrator Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg align-self-sm-end ftco-animate">
                <div className="testimony">
                  <blockquote>
                    <p>
                      “Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name. ”
                    </p>
                  </blockquote>
                  <div className="author d-flex mt-4">
                    <div className="image mr-3 align-self-center">
                      <img src="images/person_3.jpg" alt />
                    </div>
                    <div className="name align-self-center">
                      Louise Kelly{" "}
                      <span className="position">Illustrator Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg align-self-sm-end">
                <div className="testimony overlay">
                  <blockquote>
                    <p>
                      “Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however.”
                    </p>
                  </blockquote>
                  <div className="author d-flex mt-4">
                    <div className="image mr-3 align-self-center">
                      <img src="images/person_2.jpg" alt />
                    </div>
                    <div className="name align-self-center">
                      Louise Kelly{" "}
                      <span className="position">Illustrator Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg align-self-sm-end ftco-animate">
                <div className="testimony">
                  <blockquote>
                    <p>
                      “Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name. ”
                    </p>
                  </blockquote>
                  <div className="author d-flex mt-4">
                    <div className="image mr-3 align-self-center">
                      <img src="images/person_3.jpg" alt />
                    </div>
                    <div className="name align-self-center">
                      Louise Kelly{" "}
                      <span className="position">Illustrator Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section ftco-animate text-center">
                <h2 className="mb-4">Recent from blog</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("images/image_1.jpg")' }}
                  ></a>
                  <div className="text py-4 d-block">
                    <div className="meta">
                      <div>
                        <a href="#">Sept 10, 2018</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading mt-2">
                      <a href="#">The Delicious Pizza</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("images/image_2.jpg")' }}
                  ></a>
                  <div className="text py-4 d-block">
                    <div className="meta">
                      <div>
                        <a href="#">Sept 10, 2018</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading mt-2">
                      <a href="#">The Delicious Pizza</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("images/image_3.jpg")' }}
                  ></a>
                  <div className="text py-4 d-block">
                    <div className="meta">
                      <div>
                        <a href="#">Sept 10, 2018</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading mt-2">
                      <a href="#">The Delicious Pizza</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-appointment">
          <div className="overlay" />
          <div className="container-wrap">
            <div className="row no-gutters d-md-flex align-items-center">
              <div className="col-md-6 d-flex align-self-stretch">
                <div id="map" />
              </div>
              <div className="col-md-6 appointment ftco-animate">
                <h3 className="mb-3">Book a Table</h3>
                <form action="#" className="appointment-form">
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <div className="input-wrap">
                        <div className="icon">
                          <span className="ion-md-calendar" />
                        </div>
                        <input
                          type="text"
                          className="form-control appointment_date"
                          placeholder="Date"
                        />
                      </div>
                    </div>
                    <div className="form-group ml-md-4">
                      <div className="input-wrap">
                        <div className="icon">
                          <span className="ion-ios-clock" />
                        </div>
                        <input
                          type="text"
                          className="form-control appointment_time"
                          placeholder="Time"
                        />
                      </div>
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <textarea
                        name
                        id
                        cols={30}
                        rows={2}
                        className="form-control"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="submit"
                        defaultValue="Appointment"
                        className="btn btn-primary py-3 px-4"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
