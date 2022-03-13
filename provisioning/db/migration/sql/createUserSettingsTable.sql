create table user_settings
(
    id       binary(16) DEFAULT (UUID_TO_BIN(UUID(), TRUE)) NOT NULL,
    user_id  binary(16) null,
    settings json       not null,
    constraint users_settings_pk
        primary key (id),
    constraint user_settings_users_id_fk
        foreign key (user_id) references users (id)
);

