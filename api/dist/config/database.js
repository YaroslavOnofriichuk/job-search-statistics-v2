"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = exports.dbConf = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '.env' });
const config = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["dist/**/*.entity{.ts,.js}"],
    subscribers: ["dist/**/*.subscriber{.ts,.js}"],
    migrations: ["dist/migrations/*-migrations.js"],
    cli: {
        migrationsDir: "dist/migrations"
    },
    autoLoadEntities: true,
    synchronize: false,
    migrationsRun: true,
    logging: true,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.DB_CA,
    }
};
exports.dbConf = (0, config_1.registerAs)('typeorm', () => config);
exports.dataSource = new typeorm_1.DataSource(config);
//# sourceMappingURL=database.js.map