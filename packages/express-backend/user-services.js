import mongoose from "mongoose";
import userModel from "./user.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb+srv://dbaitaza_user:password@evilmeowie.jqkao32.mongodb.net/?appName=evilmeowie", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

  function getUsers(name, job) {
    if (!name && !job) {
      return userModel.find();
    } else if (name && !job) {
      return userModel.find({ name: name });
    } else if (!name && job) {
      return userModel.find({ job: job });
    } else {
      return userModel.find({ name: name, job: job });
    }
  }

function findUserById(id) {
  return userModel.findById(id);
}

function addUser(user) {
  const userToAdd = new userModel(user);
  const promise = userToAdd.save();
  return promise;
}

function findUserByName(name) {
  return userModel.find({ name: name });
}

function findUserByJob(job) {
  return userModel.find({ job: job });
}

function findUserByNameAndJob(name, job) {
  return userModel.find({ name: name, job: job });
}

function deleteUserById(id) {
  return userModel.findByIdAndDelete(id);
}

export default {
  addUser,
  getUsers,
  findUserById,
  findUserByName,
  findUserByJob,
  findUserByNameAndJob,
  deleteUserById,
};