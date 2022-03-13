const fs = require("fs");

module.exports = class CreateRoles1647183615085 {
    async up(queryRunner) {
        const command = fs.readFileSync(`${process.cwd()}/migration/sql/createRoles.sql`).toString();
        await queryRunner.query(command);
        await queryRunner.query('create unique index roles_uindex on roles (name);');
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE roles;
        `)
    }
}
        