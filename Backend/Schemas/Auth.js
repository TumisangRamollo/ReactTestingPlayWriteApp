const user = require("../Models/userModels");
const { hashPassword, comparePassword } = require("../SecretPasswod/HashedPassword");
const { createToken } = require("../Token/GetToken");

const signUpUser = (app) => {
  app.post("/sign_up", async (req, res) => {
    const { email, password } = req.body;
    try {
      const foundUser = await user.findOne({ email: email });

      if (foundUser !== null) {
        return res.send({ token: null, error: "email already exists" });
      }
      const hashedPassword = await hashPassword(password);
      const newUser = new user({ email, password: hashedPassword });
      const record = await newUser.save();
      const token = createToken(record);

      return res.send({ error: null, token: token });
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const foundUser = await user.findOne({ email: email });

      if (!foundUser) {
        return res.send("password or email is incorrect ");
      }

      if (foundUser) {
        const isPasswordCorrect = await comparePassword(
          password,
          foundUser.password
        );

        if (isPasswordCorrect) {
          const token = createToken(foundUser);
          return res.send({ message:"Logged in succesfully",foundUser ,token });
        } else {
          return res.send({message:"password or email is incorrect "});
        }
      }
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = { signUpUser };
