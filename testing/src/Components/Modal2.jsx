import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Modals from "../Components/Modal";
import Modal3 from "../Components/Modal3";
import ChineseFood from "../Asserts/ChieneseFood.webp";
import ChineseFood2 from "../Asserts/ChineseFood2.jpeg";

function ModalFullscreenExample2(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <h1 color="danger" onClick={toggle} className="modalButton">
        Things that I like
      </h1>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>
          Tell us something about you What do you think you're really good at?
        </ModalHeader>
        <ModalBody>
          <div class="table-responsive">
            <table class="table">
              {/* <caption>Likes</caption> */}
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Item list</th>
                  <th scope="col">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text">Food</td>
                  <td>
                    <ul className="itemList">
                      <li>All the food except Chinese food </li>
                      <br />
                      <li>Milk</li>
                      <li>Bread</li>
                      <li>Butter</li>
                      <li>Cheese</li>
                      <li>Yogurt</li>
                      <li>Sandwich</li>
                      <li>Pancake</li>
                      <li>Pie</li>
                      <li>Honey</li>
                      <li>Waffle</li>
                      <li>Donuts</li>
                      <li>Salad</li>
                      <li>Meatball</li>
                      <li>Grilled chicken</li>
                      <li>Burger</li>
                      <li>Tuna</li>
                      <li>Noodles</li>
                      <li>Egg</li>
                      <li>Bacon</li>
                      <li>Pizza</li>
                      <li>French Fries</li>
                      <li>Biryani</li>
                      <li>Pasta</li>
                      <li>Smoked salmon</li>
                      <li>Mayonnaise</li>
                      <li>Taco</li>
                      <li>Hotdog</li>
                      <li>Dosa</li>
                      <li>Chocolate</li>
                      <li>Ice cream</li>
                    </ul>
                  </td>
                  <td>
                    <ul className="itemList">
                      <li>I'm not alergic to any type of food.</li>
                      <li>
                        So for Chinese food, I've never tasted chinese food and
                        I dont think I will ever teste Chinese food
                      </li>
                      <li>
                        <div className="chineseFoodDiv">
                          <p>This looks delicious but...</p>
                          <img
                            className="chineseFood"
                            src={ChineseFood}
                            alt="Chinese Food"
                          />
                          <p>This is the main reason why I hate Chinese food</p>

                          <img
                            className="chineseFood"
                            src={ChineseFood2}
                            alt="Chinese Food"
                          />
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* <tr>
                  <td>Jacob</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>Mark</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <br />
        </ModalBody>
        <ModalFooter>
          <Modal3 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample2;
