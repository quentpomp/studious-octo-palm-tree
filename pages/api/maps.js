let header = {
    "alg": "ES256",
    "kid": "UPY7CCRJZ6",
    "typ": "JWT"
}
let payload = {
    "iss": "HRC9HL9Y8C",
    "iat": Date.now() / 1000,
    "exp": (Date.now() / 1000) + 1800,
    "origin":  "http://localhost:3000"
}

let authKey = fs.readFile("../AuthKey_UPY7CCRJZ6.p8")

let authorizationToken = jwt.sign(payload, authKey, { header: header });

