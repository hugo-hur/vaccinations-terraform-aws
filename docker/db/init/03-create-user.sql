\connect vaccin vaccin_impl

create user vaccin_user with encrypted password 'vaccin_user';
grant usage on schema vaccin_impl to vaccin_user;
grant select on vaccin_impl.orders to vaccin_user;
grant select on vaccin_impl.vaccinations to vaccin_user;
alter role vaccin_user set search_path to vaccin_impl;
