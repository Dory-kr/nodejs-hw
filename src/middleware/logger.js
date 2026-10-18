import pino from 'pino-http';

export const logger = pino({
  transport: { target: 'pino-pretty' }, // гарний, читабельний вивід
});
