---
title: Deploy Node.js app to Ubuntu - Server setup, Nginx, SSL
slug: deploy-nodejs-to-ubuntu
featured: true
date: 2021-07-04T00:00:00+00:00
featuredImage: ../images/nodejs-deploy.jpg
---

## Initial Server Setup with Ubuntu 18.04

After creating a new Ubuntu 18.04 server, you should take some configuration steps as part of an initial server setup in order to increase security and facilitate management later.

This guide will walk you through a few procedures that you should complete early on in order to create a solid foundation for your new server, before moving on to installing and configuring any software or services.

### Logging in as Root

Newly installed servers typically have only a root account set up, and that is the account you’ll use to log into your server for the first time.

The root user is an administrative user that has very broad privileges. Because of the heightened privileges of the root account, you are discouraged from using it on a regular basis. This is because part of the power inherent to the root account is the ability to make very destructive changes, even by accident. For that reason, the recommended practice is to set up a regular system user and give this user sudo permissions, so that it may run administrative commands with certain limitations. In the next step, you’ll set up such a user.

If you are not already connected to your server, go ahead and log in as the root user with the following command. Be sure to replace the highlighted portion of the command with your server’s public IP address:

```console
$ ssh root@your_server_ip
```

In the next step, you’ll set up a new system user account with reduced privileges, and configure this user to run administrative commands via sudo.

### Creating a New User

Once you are logged in as root, you can create a new user that will be your regular system user from now on.

The following example creates a new user called **manjiltamang**, but you should replace it with a username of your choice:

```console
$ adduser manjiltamang
```

In the next step, you’ll set up sudo privileges for this user. This will allow the user to execute administrative tasks as the root user through the sudo program.

### Granting Administrative Privileges

You have now a new user account with regular privileges. Sometimes, however, you’ll need to perform administrative tasks, like managing servers, editing configuration files, or restarting a server.

To avoid having to log out of your regular user and log back in as the root account, you can set up what are known as “superuser” or root privileges for your regular account. This will allow your regular user to run commands with administrative privileges by prefixing each command with the word `sudo`.

To add these privileges to you new user, you need to add the new user to the sudo group. By default on Ubuntu 18.04, users who belong to the sudo group are allowed to use the `sudo` command.

The following command will modify the default user settings, including the sudo group in the list of groups a user already belongs to. Pay attention to the `-a` argument, which stands for append. Without this option, the current groups a user is linked to would be replaced by `sudo`, which would cause unexpected consequences. The `-G` argument tells usermod to change a user’s group settings.

As root, run this command to add your new user to the sudo group (replace the highlighted word with your new user):

```console
$ usermod -aG sudo sammy
```

### Enabling External Access for Your Regular User

Now that you have a regular user for daily use, you need to make sure you can SSH into the account directly.

If you logged in to your root account using SSH keys, it’s likely that password authentication is disabled for SSH. You will need to add a copy of your local public key to the new user’s `~/.ssh/authorized_keys` file to log in successfully.

Since your public key is already in the root account’s `~/.ssh/authorized_keys` file on the server, you can copy that file and directory structure to your new user account in your existing session.

The simplest way to copy the files with the correct ownership and permissions is with the `rsync` command. This will copy the root user’s `.ssh` directory, preserve the permissions, and modify the file owners, all in a single command. Make sure to change the highlighted portions of the following command to match your regular user’s name:

```console
$ rsync --archive --chown=manjiltamang:manjiltamang ~/.ssh /home/manjiltamang
```

Now, open up a new terminal session and try to log in with your new username:

```console
$ ssh manjiltamang@your_server_ip
```

You should be able to log into the new user account without being prompted for the remote user’s SSH password for authentication. If your SSH key was set up with a keyphrase, you may be asked to unlock the SSH key by providing that password when you use the key for the first time in a terminal session.

Remember, if you need to run a command with administrative privileges, type sudo before it like this:

```console
$ sudo command_to_run
```

You will be prompted for your regular user password when using sudo for the first time each session (and periodically afterwards).

---

## Setting Up Nginx Server Blocks (Virtual Hosts) on Ubuntu 18.04

When using the Nginx web server, server blocks (similar to the virtual hosts in Apache) can be used to encapsulate configuration details and host more than one domain off of a single server.

In this guide, we’ll discuss how to configure server blocks in Nginx on an Ubuntu 16.04 server.

### Installing Nginx

Because Nginx is available in Ubuntu’s default repositories, it is possible to install it from these repositories using the apt packaging system.

Since this is our first interaction with the apt packaging system in this session, we will update our local package index so that we have access to the most recent package listings. Afterwards, we can install nginx:

```console
$ sudo apt update
$ sudo apt install nginx
```

After accepting the procedure, apt will install Nginx and any required dependencies to your server.

### Checking your Web Server

At the end of the installation process, Ubuntu 18.04 starts Nginx. The web server should already be up and running.

We can check with the `systemd` init system to make sure the service is running by typing:

```console
$ systemctl status nginx
```

```console
Output
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2018-04-20 16:08:19 UTC; 3 days ago
     Docs: man:nginx(8)
 Main PID: 2369 (nginx)
    Tasks: 2 (limit: 1153)
   CGroup: /system.slice/nginx.service
           ├─2369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           └─2380 nginx: worker process
```

As you can see above, the service appears to have started successfully.

### Create Server Block File for Domain

By default, Nginx contains one server block called `default` which we can use as a template for our own configurations. We will begin by designing our first domain’s server block, which we will then copy over for our second domain and make the necessary modifications.

#### Create the First Server Block File

As mentioned above, we will create our first server block config file by copying over the default file:

```console
$ sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/yourdomain.com
```

Now, open the new file you created in your text editor with sudo privileges:

```console
$ sudo nano /etc/nginx/sites-available/yourdomain.com
```

Ignoring the commented lines, the file will look similar to this:

```console
  server_name yourdomain.com www.yourdomain.com;

  location / {
    proxy_pass http://localhost:5000; #whatever port your app runs on
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
```

#### Enable your Server Blocks and Restart Nginx

Now that we have our server block files, we need to enable them. We can do this by creating symbolic links from these files to the sites-enabled directory, which Nginx reads from during startup.

We can create these links by typing:

```console
$ sudo ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/
```

These files are now in the enabled directory. We now have two server blocks enabled, which are configured to respond based on their listen directive and the server_name (you can read more about how Nginx processes these directives here):

yourdomain.com: Will respond to requests for yourdomain.com and www.yourdomain.com
default: Will respond to any requests on port 80 that do not match the other blocks.

In order to avoid a possible hash bucket memory problem that can arise from adding additional server names, we will go ahead and adjust a single value within our /etc/nginx/nginx.conf file. Open the file now:

```console
$ sudo nano /etc/nginx/nginx.conf
```

Within the file, find the server_names_hash_bucket_size directive. Remove the `#` symbol to uncomment the line:

```console
http {
    . . .

    server_names_hash_bucket_size 64;

    . . .
}
```

Save and close the file when you are finished.

Next, test to make sure that there are no syntax errors in any of your Nginx files:

```console
$ sudo nginx -t
```

If no problems were found, restart Nginx to enable your changes:

```console
$ sudo systemctl restart nginx
```

Nginx should now be serving your domain name.

---

## Install Node/NPM

We’ll use the Node Version Manager (NVM) to install Node.js and NPM in our server. Execute the following shell script provided in the nvm documentation to get started with the installation.

```console
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Once the Shell Script is successfully run, you need load nvm. Execute the following command to make the changes made by the shell script take effect in the current terminal.

```console
$ source .bashrc
```

Once it’s done, you can check whether nvm is installed, by simply executing the command nvm. To install the latest version of Node.js and NPM execute the following command.

```console
$ nvm install node
```

In order for some npm packages to work (those that require compiling code from source, for example), you will need to install the build-essential package:

```console
$ sudo apt install build-essential
```

---

## Testing everything with a simple Node.js app

Once we are done setting up all the necessary things we need to run a simple Node.js application, let’s put it into the test. Make sure you have git installed in the server, you can use the command `git --version` to check the version of git in the server. If git is not installed by default, you can install git by simply executing `sudo apt install git`.
Execute the following command to clone the repository from GitHub to your server.

```console
$ git clone yourproject.git
```

Install dependencies and test app

```console
$ cd yourproject
$ npm install
$ npm start (or whatever your start command)
# ctrl+C to stop app
```

> Make sure that your Node.js application is running on the same port that we used in Nginx server block config file.

---

## Add SSL with LetsEncrypt

```console
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Only valid for 90 days, test the renewal process with
sudo certbot renew --dry-run
```

Now you should be able to check the output of the node web app we ran from a browser by navigating to `https://yourdomain.com` and you should see your Node app.
