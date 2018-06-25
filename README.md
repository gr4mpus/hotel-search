# Setup Database

## 1. Login as Root
    mysql -u root -p
        
## 2. Create Database and User

    * CREATE DATABASE hotelsearchdb;
    * CREATE USER hotelsearchadmin IDENTIFIED BY 'hotelsearchpass';
    * GRANT ALL PRIVILEGES ON hotelsearchdb.* TO hotelsearchadmin;
    * FLUSH PRIVILEGES;
    * EXIT