# Initialisation script

Running `bin/init.sh` does the following:

- Set up `bam` as the project command
- Create a custom DNS resolver
- Set up SSL for reverse-proxy
- Create a docker machine
- Install packages for workspaces

## Project command

We can use `bam` in the terminal to control the project from anywhere. Typing `bam` in the terminal will show options.

```
$ bam
```

NOTE: This setup step is optional. You can use `docker-compose` from the root of the project as an alternative. All the scripts are inside `base-app-monorepo/bin/`

## Custom DNS resolver

We want a nice URL for our dev environment, such as `http://bam.com.vm`. When init script is run, it automatically create a custom resolver for the `.vm` domain. This runs in a container called `vm-dnsmasq`. Running `docker ps` should show something like this:

```
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS                                          NAMES
e9e861d92f73        andyshinn/dnsmasq:2.78   "dnsmasq -k --addres…"   About an hour ago   Up About an hour    0.0.0.0:53535->53/tcp, 0.0.0.0:53535->53/udp   vm-dnsmasq
```

This can be created using the following command:

```
bam vm-up
```

Alternatively, we can put it in our static hostfile i.e. `/etc/hosts` for Mac. It should look something like this:

```
127.0.0.1   bam.com.vm
```
