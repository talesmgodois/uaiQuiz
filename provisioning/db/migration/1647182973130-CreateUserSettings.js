
const fs = require('fs');

module.exports = class CreateUserSettings1647182973130 {

    async up(queryRunner) {
        const command = fs.readFileSync(`${process.cwd()}/migration/sql/createUserSettingsTable.sql`).toString();
        await queryRunner.query(command);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE users_settings;
        `)
    }
}
