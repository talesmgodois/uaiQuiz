create table users
(
    id           binary(16) DEFAULT (UUID_TO_BIN(UUID(), TRUE)) NOT NULL,
    name         varchar(256)                NOT NULL,
    last_name    varchar(256)                NULL,
    email        varchar(256)                NULL,
    phone_number varchar(16)                 NULL,
    column_6     int                         NULL,
    constraint users_pk
        primary key (id)
);
