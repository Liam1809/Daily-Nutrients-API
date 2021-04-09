import jwt from 'jsonwebtoken';

const authentication = async (req, res, next) => {
    try {
        // check token 
        // console.log("The current token \n", req.headers);
        // split token from authorization
        const token = req.headers.authorization.split(" ")[1];
        // check if token is customed from user or google auth
        const isCustomUser = token.length < 500;

        let decodedData;
        //verify and assign decoded id to userId
        // if isCustomUser
        if (token && isCustomUser) {
            // verify token with secret text and assign data to decodedData
            decodedData = jwt.verify(token, '@user');
            // console.log("Custom token");
            // console.log(decodedData);
            // add decoded's id to userId of req object 
            req.userId = decodedData?.id;
            req.userName = decodedData?.name;
            // if google user
        } else {
            decodedData = jwt.decode(token);
            // console.log("Google token");
            // console.log(decodedData);
            // sub: google specific id 
            req.userId = decodedData?.sub;
            req.userName = decodedData?.name;
        }

        next();

    } catch (error) {
        console.log(error);
    }
};

export default authentication;