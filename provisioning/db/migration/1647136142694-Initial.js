const fs = require('fs');
// const path = require('path');
module.exports = class Initial1647136142694 {

    async up(queryRunner) {
        const createUsersSQL = fs.readFileSync(`${process.cwd()}/migration/sql/createUser.sql`).toString();
        await queryRunner.query(createUsersSQL);
        await queryRunner.query('create unique index users_email_uindex on users (email);');
        await queryRunner.query('create unique index users_id_uindex on users (id);');
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE users;
        `)
    }
}
        