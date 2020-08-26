# Composer

Composer is the depenency manager of choice for most Php projects at Bixal and in the general Php community. You can find general information on Composer and usage at their [documentation](https://getcomposer.org/doc/) page.

## Composer at Bixal

Most projects at Bixal will include some standardized way to manage php dependencies using composer, and ensuring you are installing the correct version of depenencies. Because projects recieve various levels of support, they may be running php 7.2, 7.3, or 7.4. If you install composer locally this leads to a lot of php shim usage, and version switching. While this is possible, it tends to lead to mistakes. Bixal usually provides some sort of [automated command](https://github.com/Bixal/drupal-project/blob/8.x/Makefile#L54), which uses a reference .env file to ensure all versions installed, or updated are using the correct version of php.
