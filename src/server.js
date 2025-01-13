// import dotenv from "dotenv";
// import express from "express";
// import connectDB from "./db/index.js";

const dotenv = require("dotenv");
dotenv.config({ path: "./env" });
const express = require("express");
const connectDB = require("./db");
// const { default: connectDB } = require("./db/index.js");
connectDB;

const app = express();

connectDB();
