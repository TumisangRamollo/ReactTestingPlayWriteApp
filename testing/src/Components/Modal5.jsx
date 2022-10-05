import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal6 from "./Modal6";
import A12 from "../Asserts/12.png";
import A15 from "../Asserts/15.png";
import Nodejs from "../Asserts/nodejs2.png";
import Html from "../Asserts/html.png";
import Redux from "../Asserts/Redux2.png";
import React2 from "../Asserts/Reactjs2.png";
import Mysql from "../Asserts/14.avif";
import PGP from "../Asserts/17.png";
import JWT from "../Asserts/JWT.png";
import CSS from "../Asserts/css.png";
import MariaDb from "../Asserts/mariadb-logo1.png";
import D1 from "../Applications/Screenshot from 2022-10-03 14-44-54.png";
import D2 from "../Applications/Screenshot from 2022-10-03 14-45-12.png";
import D3 from "../Applications/Screenshot from 2022-10-03 14-45-37.png";
import D4 from "../Applications/Screenshot from 2022-10-03 14-45-46.png";
import D5 from "../Applications/Screenshot from 2022-10-03 14-46-05.png";
import D6 from "../Applications/Screenshot from 2022-10-03 14-46-09.png";
import D7 from "../Applications/Screenshot from 2022-10-03 14-46-20.png";
import D8 from "../Applications/Screenshot from 2022-10-03 14-46-26.png";
import D9 from "../Applications/Screenshot from 2022-10-03 14-46-37.png";
import D10 from "../Applications/Screenshot from 2022-10-03 14-46-43.png";
import D11 from "../Applications/Screenshot from 2022-10-03 14-47-09.png";
import D12 from "../Applications/Screenshot from 2022-10-03 14-48-45.png";

function ModalFullscreenExample5(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <h1 color="danger" onClick={toggle} className="modalButton">
        Skills
      </h1>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          {/* <p>Problem-solving</p> */}
          <h4>Some of my personal Skills</h4>
          <br />
          <hr />
          <div className="imagessContainer">
            {/* <div className="skillContainers">
              <h5>Motivation</h5>
              <hr />
              <p>
                it can help you to push through tough times and achieve great
                results for yourself and employers.
              </p>
            </div> */}
            <div className="skillContainers">
              <h5>Willingness to learn</h5>
              <hr />

              <p>
                I'm always seeking out new experiences, skills and information
                that will improve my abilities and enjoyment.
              </p>
            </div>
            <div className="skillContainers">
              <h5>Desire to progress</h5>
              <hr />

              <p>Basically, I always say what I mean and do what I say.</p>
              <p>I claim my intention and choose my destiny.</p>
            </div>
            <div className="skillContainers">
              <h5>Listening</h5>
              <hr />

              <p>
                In schools they always tell/teach their students that listening
                its a skill. So ever since I was told that in school, I made
                sure that I listen attentively to anyone talking to me so that I
                understand what they're saying, respond and reflect on what's
                being said.
              </p>
            </div>
            <div className="skillContainers">
              <h5>Loyalty</h5>
              <hr />

              <p>
                Loyalty is more than just the length of time you work at a
                company, it’s about how hard you work and how committed your are
                to the success of the business, making this an understandably
                sought-after skill.
              </p>
            </div>
            <div className="skillContainers">
              <h5>Honesty</h5>
              <hr />

              <p>
                Whether you’ve made a mistake, things aren’t going as well as
                you’d hoped or you’re not sure your boss’ idea is going to work,
                employers value honesty. So be sure to demonstrate this personal
                skill to your CV.
              </p>
            </div>
          </div>
          <hr />

          <br />
          <h4>Skills based on software development</h4>
          <br />
          <hr />
          <br />
          <h5>
            This are some of the skills I acquired from The Coding Ground
            Academy
          </h5>
          <p>
            With all the development tools below, I can create static or dynamic
            websites from start to finish.
          </p>
          <p>
            Create new databases using SQL(postgres, mySQL , mariaDB) and no-SQL
            (MongoDB).
          </p>

          <p>
            Practiced functionalities for creating multiple login pages that
            allow users to safely access their accounts (JWT).
          </p>
          <br />
          <h4>Frontend Development Tools</h4>
          <br />
          <div className="imagessContainer">
            <img className="imagess" src={Html} alt="" />
            <img className="imagess" src={CSS} alt="" />
            <img className="imagess" src={A12} alt="" />
            <img className="imagess" src={React2} alt="" />
            <img className="imagess" src={Redux} alt="" />
            <br />
          </div>
          <hr />

          <h4>Backend Development Tools</h4>
          <div className="imagessContainer">
            <br />
            <img className="imagess" src={Nodejs} alt="" />
            <img className="imagess" src={JWT} alt="" />
          </div>

          <br />
          <br />
          <hr />

          <h4>Databases</h4>
          <div className="imagessContainer1">
            <br />
            <img className="imagess" src={A15} alt="" />
            <img className="imagess" src={PGP} alt="" />
            <img className="imagess" src={Mysql} alt="" />
            <img className="imagess" src={MariaDb} alt="" />
          </div>
          <br />
          <hr />

          {/* <p>Debugging in code through frameworks and libraries.</p> */}

          <br />
          <hr />

          <p>Some of the projects I've created using the above dev tools</p>
          <div className="imagessContainer2">
            <h6>Student Mentor Project</h6>
            <div className="imagessContainer2Divider">
              <div>
                <img src={D2} alt="" />
              </div>
              <div>
                <img src={D1} alt="" />
              </div>
            </div>
            <hr />

            <h6>Voting Application</h6>
            <div className="imagessContainer2Divider">
              <div>
                <img src={D3} alt="" />
              </div>
              <div>
                <img src={D4} alt="" />
              </div>
            </div>
            <hr />

            <h6>TheCodingGround website</h6>
            <div className="imagessContainer2Divider">
              <div>
                <img src={D5} alt="" />
              </div>
              <div>
                <img src={D6} alt="" />
              </div>
            </div>

            <div className="imagessContainer2Divider">
              <div>
                <img src={D7} alt="" />
              </div>
              <div>
                <img src={D8} alt="" />
              </div>
            </div>

            <div className="imagessContainer2Divider">
              <div>
                <img src={D9} alt="" />
              </div>
              <div>
                <img src={D10} alt="" />
              </div>
            </div>
            <hr />

            <h6>Sia Bot</h6>
            <div className="imagessContainer2Divider">
              <div>
                <img src={D11} alt="" />
              </div>
              <div>
                <img src={D12} alt="" />
              </div>
            </div>
          </div>

          {/* 

          <p>
            1. Spitting:
            <span>
              Spitting on the sidewalk, on the ground or out the car window to
              be "cool"... It's just never cute.
            </span>
          </p>
          <p>
            2. Tapping:
            <span>
              The sound of tapping fingers or a tapping pen can be so
              distracting. Especially in a classroom or at work.
            </span>
          </p>

          <p>
            3. Pet hair:
            <span>Pet hair all over clothes, floor or furniture</span>
          </p>

          <p>People who can't apologize</p>

          <p> Worse, someone who expects you to pay</p> */}
        </ModalBody>
        <ModalFooter>
          <Modal6 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample5;
