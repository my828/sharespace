import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import graphic1 from "../../img/landing-graphic1.png";
import logoLong from "../../img/logo-long.png";
import graphic2 from "../../img/section2-graphic.png";
import refer from "../../img/refer-members.png";
import group from "../../img/group.png";
import connect from "../../img/connect.png";
import APIChaya from "../../img/apichaya.png";
import iSchool from "../../img/iSchool.png";
import MarysPlace from "../../img/marysplace.png";
import Pastry from "../../img/pastry.jpg";
import { Link } from "react-router-dom";
import Check from "../../img/check.png";
import Meet from "../../img/meet.png";
import Eval from "../../img/evaluate.png";
import Online from "../../img/online-support.png";
import YWCA from "../../img/YWCA.png";

import "./landing.scss";

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <div id="landing-page-content">
          <section id="section-1">
            <div id="what-we-do">
              <div class="row">
                <div class="col-12 col-md-6">
                  <img class="logo-img" src={logoLong}></img>
                  <h3 class="mb-2">Share your space for good.</h3>
                  <p class="font-light pb-2 ">
                    Survivors fleeing domestic violence do not have immediate
                    access to housing, trapping them between homelessness and
                    returning to abuse. Many emergency shelters and transitional
                    houses are hard to access, have rigorous screening
                    processes, and are simply at full capacity. Our tool builds
                    a community of support to provide immediate, flexible
                    housing to survivors in urgent need.
                  </p>
                  <p class="font-light pb-2 ">
                    Our team works closely with your nonprofit to take out the
                    bureaucracy, wait time, and lack of integration out of
                    housing resource planning by providing this easy-to-use
                    platform to dynamically find and book spaces for those who
                    need it.
                  </p>

                  <Link to="/ourtool">
                    <button class="btn btn-yellow-fill mt-2 mr-4">
                      LEARN MORE
                    </button>
                  </Link>
                  <Link to="/situation">
                    <button class="btn btn-teal-fill mt-2">SIGN UP</button>
                  </Link>
                </div>
                <div class="col-12 col-md-6">
                  <img class="graphic1" src={graphic1} />
                </div>
              </div>
            </div>
          </section>

          <div class="divider"></div>

          <section id="section-2">
            <div class="row">
              <div class="col-12 col-md-6">
                <h4>
                  <span style={{ color: "#f9c1b3" }}>
                    We all face unexpected situations.
                  </span>{" "}
                  For millions of women, it means having to leave their home.
                </h4>
              </div>
              <div class="col-12 col-md-6">
                <p class="font-light h5">
                  Emergency shelter and transitional housing continue to be the
                  most urgent unmet needs for domestic violence survivors. It is
                  becoming more necessary coordinate our resources so that more
                  people can stay off the streets and avoid longer term
                  consequences like debt and homelessness.
                </p>
              </div>
            </div>
            <div id="graphic-2">
              <img src={graphic2}></img>
            </div>
          </section>

          <div class="divider mb-3"></div>

          <section id="how-you-can-help">
            <h4>How you can help</h4>
            <div class="mt-4 row row-cards ml-0">
              <div class="card col col-12 col-md-4 d-flex">
                <img src={refer} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    Refer community members to host with a local organization.
                  </h5>
                  <p class="card-text font-light">
                    You know your community best. With the help of cloud
                    technology, Sharespace can effectively connect hosts with
                    nonprofits’ calendars in real time to ensure housing
                    availability is an option for those who need it.
                  </p>
                </div>
              </div>
              <div class="card col col-12 col-md-4 d-flex">
                <img src={group} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    Connect surviors with us or a local organization.
                  </h5>
                  <p class="card-text font-light">
                    Survivors turn to their friends and family first, but
                    sometimes it's better to get them the special support they
                    really need. Sharespace works closely with local nonprofits
                    and organizers to to find affordable and safe housing.
                  </p>
                </div>
              </div>
              <div class="card col col-12 col-md-4 d-flex">
                <img src={connect} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    Share your home with people on the road to independence.
                  </h5>
                  <p class="card-text font-light">
                    Anything helps. Whether you have an extra bed, a guest home
                    that lays empty some nights, or an Airbnb listing that you’d
                    like to do more with, your space can become a meaningful
                    experience and a way to give back to your community.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div class="divider mb-3"></div>
          <section id="who-we-work-with">
            <h4>Who we work with</h4>
            <p class="font-light">
              We're always looking to learn from experts in the causes we
              support. That's why we've partnered with organizations, both
              global and local, to truly understand the communities we serve and
              how to best help them. These registered nonprofits utilize Open
              Homes to find accomodations for their clients to help provide
              support for hosts during a stay.
            </p>
            <div class="contents">
              <div className="wwww-card">
                <img src={iSchool} alt="Information School Icon"></img>
                <div>
                  <p className="title">
                  University of Washington Information School
                    </p>
                  <p class="font-light">
                    We work closely with mentoring faculty at the University of
                    Washington who support and advise our project.
                  </p>
                </div>
              </div>
              <div className="wwww-card">
                <img src={APIChaya} alt="API Chaya Icon"></img>
                <div>
                  <p className="title">API Chaya</p>
                  <p class="font-light">
                    We developed a close working relationship with API Chaya as
                    a key part of our research and product development. API
                    Chaya connected us with hosts and advocates to review our
                    product as we brought it to market.
                  </p>
                </div>
              </div>
              <div className="wwww-card">
                <img src={MarysPlace} alt="Mary's Place Icon"></img>
                <div>
                  <p className="title">Mary's Place</p>
                  <p class="font-light">
                    We spent time with Mary's Place speaking with housing
                    advocates and visitors of the day shelter to receive
                    critical feedback on the direction of our project.
                  </p>
                </div>
              </div>
              <div className="wwww-card">
                <img src={YWCA} alt="YWCA Icon"></img>
                <div>
                  <p className="title">YWCA</p>
                  <p class="font-light">
                    The YWCA of King County has supported us through the entire
                    course of the project. We have had the opportunity to
                    volunteer with them, attend their annual luncheon and
                    connect with their housing advocates.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div class="divider mb-3"></div>

          <section id="hwsy">
            <h4>How we support you</h4>
            <p class="font-light">
              We understand this can sound like a lot to sign up for. That’s why
              Sharespace will be there to offer support and resources every step
              of the way.
            </p>
            <Slider
              dots={true}
              speed={500}
              infinite={true}
              slidesToShow={1}
              slidesToScroll={1}
            >
              <div className="slide">
                <img alt="..." src={Check} />
                <div class="">
                  <h5>Screenings and Checks</h5>
                  <p class="font-light">
                    Background checks will be conducted on guests and local
                    organizations are vetted before joining our platform. All
                    must meet safety qualifications before being considered for
                    a homestay.
                  </p>
                </div>
              </div>
              <div className="slide">
                <img alt="..." src={Meet} />
                <div class="">
                  <h5>Connecting with an Advocate</h5>
                  <p class="font-light">
                    Before any stay, advocates from the local organization we
                    partner with will personally handle the booking,
                    communications, needs-assessment, and cultural preferences
                    matching to ensure the right pairing.
                  </p>
                </div>
              </div>
              <div class="slide">
                <img class="" alt="..." src={Eval} />
                <div class="">
                  <h5>Routine Evaluations</h5>
                  <p class="font-light">
                    We’re constantly building, integrating, and improving our
                    platform. Hosts and organizations make this level of impact
                    possible, so it's our priority to make sure your needs are
                    met and tackle issues as they arise.
                  </p>
                </div>
              </div>
              <div class="slide">
                <img class="" alt="..." src={Online} />
                <div class="">
                  <h5>Online Support and Resources</h5>
                  <p class="font-light">
                    We have your back. Our platform supports a 24/7 chat service
                    that is available to you, in addition to the local
                    organization leader who will be your main point of contact.
                  </p>
                </div>
              </div>
            </Slider>
          </section>
        </div>
        <section id="section-5" class="pink-background">
          <div>
            <h1>
              Join your community to give back in a more meaningful way. Let's
              help end the cycle of domestic violence.
            </h1>
            <Link to="/situation">
              <button class="btn btn-white-fill mt-2">SIGN UP</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
