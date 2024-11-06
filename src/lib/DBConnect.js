// import mongoose from 'mongoose'
// import React from 'react'

// async function DbConnect() {

//     let isConnected = false
//     isConnected ? 'DB is Alerdy Connected' : null

//     try {
//         let connected = await mongoose.connect(process.env.MONGODB_URL)
//         console.log('DB Connected is sucess')

//         {
//             connected.connection.readyState == 1 ? isConnected = true : null
//         }

//     } catch (error) {
//         console.log(error)
//     }

// }

// export default DbConnect

import mongoose from "mongoose";

export default async function DbConnect() {
  try {
    let connection;
    console.log("Connection", connection.connection);
    connection?.connection?.readyState != 1
      ? (connection = await mongoose.connect(process.env.MONGODB_URL))
      : null;
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
}
