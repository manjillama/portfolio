---
title: Change ssh key-pair of running EC2 instance
slug: change-ssh-key-pair-of-ec2
featured: false
date: 2021-08-14T00:00:00+00:00
featuredImage: ../src/images/ec2-ubuntu.jpg
---

## Amazon EC2 key pairs and Linux instances

A key pair, consisting of a public key and a private key, is a set of security credentials that you use to prove your identity when connecting to an EC2 instance. Amazon EC2 stores the public key on your instance, and you store the private key. For Linux instances, the private key allows you to securely SSH into your instance. Anyone who possesses your private key can connect to your instances, so it's important that you store your private key in a secure place.

Because Amazon EC2 doesn't keep a copy of your private key, there is no way to recover a private key if you lose it. However, there can still be a way to connect to instances for which you've lost the private key. For more information, see [Connect to your Linux instance if you lose your private key](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replacing-lost-key-pair.html).

You can use Amazon EC2 to create your key pairs. You can also use a third-party tool to create your key pairs, and then import the public keys to Amazon EC2.

### Create a key pair using Amazon EC2

To create your key pair

- Open the Amazon EC2 console at [https://console.aws.amazon.com/ec2/](https://console.aws.amazon.com/ec2/).

- In the navigation pane, under **Network & Security**, choose **Key Pairs**.

- Choose Create key pair.

- For **Name**, enter a descriptive name for the key pair. Amazon EC2 associates the public key with the name that you specify as the key name. A key name can include up to 255 ASCII characters. It can’t include leading or trailing spaces.

- For **File format**, choose the format in which to save the private key. To save the private key in a format that can be used with OpenSSH, choose **pem**. To save the private key in a format that can be used with PuTTY, choose **ppk**.

- Choose **Create key pair**.

- The private key file is automatically downloaded by your browser. The base file name is the name you specified as the name of your key pair, and the file name extension is determined by the file format you chose. Save the private key file in a safe place.

> Important: This is the only chance for you to save the private key file.

- If you will use an SSH client on a macOS or Linux computer to connect to your Linux instance, use the following command to set the permissions of your private key file so that only you can read it.

```sh
chmod 400 my-key-pair.pem
```

If you do not set these permissions, then you cannot connect to your instance using this key pair. For more information, see [Error: Unprotected private key file](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html#troubleshoot-unprotected-key).

### Retrieve the public key from the private key

On your local Linux or macOS computer, you can use the ssh-keygen command to retrieve the public key for your key pair. Specify the path where you downloaded your private key (the .pem file).

```sh
ssh-keygen -y -f /path_to_key_pair/my-key-pair.pem
```

The command returns the public key, as shown in the following example.

```sh
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQClKsfkNkuSevGj3eYhCe53pcjqP3maAhDFcvBS7O6V
hz2ItxCih+PnDSUaw+WNQn/mZphTk/a/gU8jEzoOWbkM4yxyb/wB96xbiFveSFJuOp/d6RJhJOI0iBXr
lsLnBItntckiJ7FbtxJMXLvvwJryDUilBMTjYtwB+QhYXUMOzce5Pjz5/i8SeJtjnV3iAoG/cQk+0FzZ
qaeJAAHco+CY/5WrUBkrHmFJr6HcXkvJdWPkYQS3xqC0+FmUZofz221CBt5IMucxXPkX4rWi+z7wB3Rb
BQoQzd8v7yeb7OzlPnWOyN0qFU0XA246RA8QFYiCNYwI3f05p6KLxEXAMPLE
```

If the command fails, run the following command to ensure that you've changed the permissions on your private key pair file so that only you can view it.

```sh
chmod 400 my-key-pair.pem
```

### Add or replace a key pair for your instance

You can change the key pair that is used to access the default system account of your instance by adding a new public key on the instance, or by replacing the public key (deleting the existing public key and adding a new one) on the instance. You might do this for the following reasons:

- If a user in your organization requires access to the system user account using a separate key pair, you can add the public key to your instance.

- If someone has a copy of the private key (.pem file) and you want to prevent them from connecting to your instance (for example, if they've left your organization), you can delete the public key on the instance and replace it with a new one.

The public keys are located in the `.ssh/authorized_keys` file on the instance.

To add or replace a key pair, you must be able to connect to your instance. If you've lost your existing private key or you launched your instance without a key pair, you won't be able connect to your instance and therefore won't be able to add or replace a key pair. If you've lost your private key, you might be able to retrieve it. For more information, see [Connect to your Linux instance if you lose your private key](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replacing-lost-key-pair.html). If you launched your instance without a key pair, you won't be able to connect to the instance unless you chose an AMI that is configured to allow users another way to log in.

**To add or replace a key pair**

- Create a new key pair using the [Amazon EC2 console](#create-a-key-pair-using-amazon-EC2) or a [third-party tool](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws).

- Retrieve the public key from your new key pair. For more information, see [Retrieve the public key from the private key](#retrieve-the-public-key-from-the-private-key).

- [Connect to your instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html) using your existing private key.

- Using a text editor of your choice, open the `.ssh/authorized_keys` file on the instance. Paste the public key information from your new key pair **underneath** the existing public key information. Save the file.

- Disconnect from your instance, and test that you can connect to your instance using the new private key file.

- (Optional) If you're replacing an existing key pair, connect to your instance and delete the public key information for the original key pair from the `.ssh/authorized_keys` file.
