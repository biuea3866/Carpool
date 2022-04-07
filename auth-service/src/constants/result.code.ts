// auth-service status code - 1000 ~ 1100
// common code - 2000 ~ 3000

const UNIQUE_EMAIL: number = 1000;
const UNIQUE_NICKNAME: number = 1001;
const FOUND_USER: number = 1002;
const SIGNED_IN: number = 1003;
const SIGNED_UP: number = 1004;
const UPDATED_PASSWORD: number = 1005;
const UPDATED_NICKNAME: number = 1006;
const UPDATED_LICENSE: number = 1007;
const DELTED_USER: number = 1008;
const LOGOUTED: number = 1009;

const DATABASE_ERROR: number = 2000;
const EXCEPTION_ERROR: number = 2001;
const UN_AUTHENTICATION: number = 2003;

export {
    UNIQUE_EMAIL,
    SIGNED_IN,
    FOUND_USER,
    UNIQUE_NICKNAME,
    SIGNED_UP,
    UPDATED_PASSWORD,
    UPDATED_NICKNAME,
    UPDATED_LICENSE,
    DELTED_USER,
    LOGOUTED,
    DATABASE_ERROR,
    EXCEPTION_ERROR,
    UN_AUTHENTICATION,
};