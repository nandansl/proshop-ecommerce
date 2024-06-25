import bcrypt from "bcryptjs"

const user =[
{
    name:"Admin User",
    email:"admin@gmail.com",
    password:bcrypt.hashSync("12345",10),
    isAdmin:"true",
},
{
    name:"Nandan",
    email:"nnn@gmail.com",
    password:bcrypt.hashSync("12345",10),
    isAdmin:"true",
},
{
    name:"Arun",
    email:"aaaa@gmail.com",
    password:bcrypt.hashSync("12345",10),
    isAdmin:"true",
},
]
export default user;