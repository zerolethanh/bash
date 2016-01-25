#!/usr/bin/env bash
yum remove -y git*
sudo yum -y groupinstall "Development Tools"
sudo yum -y install gettext-devel openssl-devel perl-CPAN perl-devel zlib-devel

#create git folder if not exists && download git source
mkdir -p git && cd git
git init
git remote add origin https://github.com/git/git.git
git pull origin master

#install git
make configure
./configure --prefix=/usr/local
sudo make install
git --version