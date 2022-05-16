import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";

const localSt = JSON.parse(localStorage.getItem("persist:root"))
//const TOKEN = localSt === null ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDliNmU0MjUyZDEzNDZmZDdjMzhjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjY2NTMwOCwiZXhwIjoxNjUyOTI0NTA4fQ.ZmVOGPjhFY2cm80GMveuzTIVpSO2DsrtZkJ3nIXVRRg" : ""
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDliNmU0MjUyZDEzNDZmZDdjMzhjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjY2NTMwOCwiZXhwIjoxNjUyOTI0NTA4fQ.ZmVOGPjhFY2cm80GMveuzTIVpSO2DsrtZkJ3nIXVRRg"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}` },
})

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser !== "null" ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDliNmU0MjUyZDEzNDZmZDdjMzhjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjQ3MzU5MSwiZXhwIjoxNjUyNzMyNzkxfQ.0bMmXHXJPNQOtX4wHUcwZJTw14VfJecmAm5CGX4dF2E";