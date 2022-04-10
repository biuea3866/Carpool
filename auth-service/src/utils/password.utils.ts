import bcrypt from 'bcrypt';

class PasswordUtils {
    constructor() {}

    public async generator(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    public async checker(
        origin_password: string,
        encrypted_password: string
    ): Promise<boolean> {
        return await bcrypt.compare(
            origin_password,
            encrypted_password
        );
    }
}

const passwordUtils = new PasswordUtils();

export { 
    passwordUtils,
    PasswordUtils
};