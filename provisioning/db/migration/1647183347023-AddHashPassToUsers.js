const fs = require('fs');

module.exports = class AddHashPassToUsers1647183347023 {

    async up(queryRunner) {
        queryRunner.query(`alter table users add hash_password varchar(512) not null;`);
    }

    async down(queryRunner) {
        queryRunner.query(`alter table users DROP COLUMN hash_password`)
    }
}
