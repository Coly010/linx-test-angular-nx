## LINX Test Repo

Small test repository to POC a concept of running Nx via Docker

### Usage

For convenience, a JS script has been added which encapsulates the Docker command:

`node linx.js nx <target> <project>`

e.g.

`node linx.js nx serve mftest`

### Module Federation Usage

To serve the host app and all remotes as static:

`node linx.js nx serve ng-shell`


### Info

The docker image `cferry101/linx` will install `nx@latest` on `linux`
 - This allows the container to have the linux native bindings for Nx

The docker image will expose port `4200-4299`.
 - This can be problematic if the user uses a different port for their application.
 - The `linx.js` script will bind the same range of ports on user's machine to these exposed ports.
 - If the user has something running on any of the ports in the range already, they may encounter issues.

The `serve` target for `mftest` needed updated to set the `host` property.
 - This was needed for `webpack-dev-server` to open the port on the correct IP that is exposed via Docker.

The current workspace gets mounted to the docker container for convenience. 
