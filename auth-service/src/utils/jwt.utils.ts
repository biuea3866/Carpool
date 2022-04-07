import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/env.variable';

class JwtUtils {
    constructor() {}

    public async generator(userId: string): Promise<string> {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 *60),
            data: userId
        }, SECRET_KEY);
    }

    public async verify(token: string): Promise<string | jwt.JwtPayload> {
        return jwt.verify(token.split('Bearer ')[1],
                          SECRET_KEY);
    }
}

export { JwtUtils };