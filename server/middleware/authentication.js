import jwt from 'jsonwebtoken';

const authentication = async (req, res, next) => {
    try {
        // check token 
        // console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        // check if token is customed from user or google auth
        const isCustomUser = token.length < 500;

        let decodedData;
        //verify and assign decoded id to userId
        if (token && isCustomUser) {
            decodedData = jwt.verify(token, '@user');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();

    } catch (error) {
        console.log(error);
    }
};

export default authentication;