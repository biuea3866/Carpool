import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

const logformat = winston.format.printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`
});

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:MM:SS'}),
        logformat
    ),
    level: 'debug',
    transports: [
        new winstonDaily({
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            dirname: 'logs',
            filename: `%DATE%.log`,
            maxFiles: 30
        }),
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: 'logs',
            filename: `%DATE%.error.log`,
            maxFiles: 30
        })
    ]
});

logger.add(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    )
}));

export { logger };