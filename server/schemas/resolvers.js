const { User, Plant, Order } = require("../models");
const { signToken } = require("../utils/auth");
require("dotenv").config();
//Stripe key
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const userSeeds = require("../seeders/userSeeds.json");
const plantSeeds = require("../seeders/plantsSeeds.json");

const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    //list all users
    users: async () => {
      return User.find().populate("plant");
    },

    //list one user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("plant");
    },

    //???? - sorts by time of creation - could use it in comment section
    plants: async (parent, { username }) => {
      return Plant.find();
      const params = username ? { username } : {};
      return Plant.find(params).sort({ createdAt: -1 });
    },

    //finding one plant by plant id
    plant: async (parent, { plantId }) => {
      return Plant.findOne({ _id: plantId });
    },

    // get stripe key
    getStripeKey: () => {
      return {
        key: process.env.bestripeKey,
      };
    },

    // order query for plants for purchase
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.plants",
          populate: "plants",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },

    // checkout query for plants for purchase
    checkout: async (parent, args, context) => {
      const order = new Order({ products: args.plants });
      console.log(context);
      const url = new URL(context.headers.referer).origin;
      console.log(url);
      const line_items = [];
      const stripe = getStripeKey();
      const { products } = await order.populate("products");
      console.log(products);
      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          // images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },

    // query to separate only plants sold in store in DB
    //Query is returning nothing
    inStore: async (parent, { name }) => {
      return Plant.find({ inStore: true });
    },

    // logged in user

    me: async (parent, args, context) => {
      //check to see if user is logged in
      console.log(context)
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("plant");
      }
      throw new AuthenticationError("You need to be logged in -test1!");
    },

    // search for plants by animal - cats dogs or both

    specificPlantA: async (_, { name, animalSafe }) => {
      const animalSafeValue =
        typeof animalSafe != undefined
          ? { $regex: new RegExp(animalSafe), $options: "i" }
          : "cats/dogs";
      const safeOrnot = await Plant.find({
        name: { $regex: new RegExp(name), $options: "i" },
        animalSafe: animalSafeValue,
      });
      return safeOrnot;
    },

    // search for plants safety by plant name - needs to be improved

    specificPlantS: async (_, { name }) => {
      return Plant.find({ name: new RegExp(name) });
    },
  },

  Mutation: {
    // seeding database
    seed: async () => {
      try {
        await Plant.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);
        await Plant.insertMany(plantSeeds);
        // for (let i = 0; i < plantSeeds.length; i++) {
        //   const { _id, plantAuthor } = await Plant.create(plantSeeds[i]);
        //   const user = await User.findOneAndUpdate(
        //     { username: plantAuthor },
        //     {
        //       $addToSet: {
        //         plant: _id,
        //       },
        //     }
        //   );
        // }

        return "all done!";
      } catch (err) {
        console.error(err);
      }
    },

    // adding new user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    removeUser: async (parent, { _id }, context) => {
      const user = await User.findOne({ _id });
      return User.findOneAndDelete({ _id: context.user._id }, { new: true });
    },

    // login in existing user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      // login that is going to create and return a token as part of the authentication protocol
      return { token, user };
    },

    addFavorite: async (parent, { plantId }, context) => {
     
      if (context.user) {
        const plant = await Plant.findOne({
          _id: plantId,
        });
        if (plant) {
          const user = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { plant: plant._id } },
            { new: true }
          ).populate("plant");
          console.log("USER>>>", user)
          return user;
        }

        return context.user;
      }

      // throw new AuthenticationError('You need to be logged in!'); <-Deleted and replaced by line below
      throw new Error("You need to be logged in!");
    },

    removeFavorite: async (parent, { plantId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { plant: plantId } },
          { new: true }
        );
      }
      //Review this part that was returning an error even after being logged in in Anthony's template
      throw new AuthenticationError("You need to be logged in test-4!");
    },

    addComment: async (parent, { plantId, comment_text }, context) => {
      if (context.user) {
        return Plant.findOneAndUpdate(
          { _id: plantId },
          {
            $addToSet: {
              comments: { comment_text, comment_author: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new Error("You need to be logged in -test3!");
    },
    //Checking for the context to add the user
    /**When we create the token, it identifies the user which creates a context and it is created by the authentication Middleware inside auth.js; once it verifies the user, it will put it as part of the request for the user   */
    removeComment: async (parent, { plantId, commentId }, context) => {
      if (context.user) {
        return Plant.findOneAndUpdate(
          { _id: plantId },
          {
            $pull: {
              comments: {
                _id: commentId,
                comment_author: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      // throw new AuthenticationError('You need to be logged in!'); <-Deleted and replaced by line below
      throw new Error("You need to be logged in -test5!");
    },

    // add order to buy plants
    addOrder: async (parent, { plants }, context) => {
      console.log(context);
      if (context.user) {
        const order =  Order.create({ products: plants });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order._id },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
