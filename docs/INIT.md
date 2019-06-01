# Initialisation script

Running `bin/init.sh` does the following:

- Set up `bra` as the project command
- Set up https://bit.dev/ as a package registry (We use some shared packages hosted on here) 
- Create a custom DNS resolver

## Project command

We can use `bra` in the terminal to control the project from anywhere. Typing `bra` in the terminal will show options.

```
$ bra
```

NOTE: This setup step is optional. You can use `docker-compose` from the root of the project as an alternative. All the scripts are inside `~/bra/bin/`

## Bit

Some packages in this project are hosted on https://bit.dev/. You can also run command manually:

```
npm config set '@bit:registry' https://node.bit.dev
```

## Custom DNS resolver

We want a nice URL for our dev environment, such as `http://bra.com.vm`. When init script is run, it automatically create a custom resolver for the `.vm` domain. This runs in a container called `vm-dnsmasq`. Running `docker ps` shoudl show something like this:

```
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS                                          NAMES
e9e861d92f73        andyshinn/dnsmasq:2.78   "dnsmasq -k --addres…"   About an hour ago   Up About an hour    0.0.0.0:53535->53/tcp, 0.0.0.0:53535->53/udp   vm-dnsmasq
```

This can be created using the following command:
```
bra vm-up
```

Alternatively, we can put it in our static hostfile i.e. `/etc/hosts` for Mac. It should look something like this:

```
127.0.0.1   bra.com.vm
```