# ReactJS GoFinances Challenge

## :dart: The Challenge

You need to create a frontend app using ReactJS to interact with your backend application created during the [nodejs-database-challenge](https://github.com/pupato13/nodejs-database-challenge).

### Functionalities

- **`List transactions from API`**: Your `Dashboard` page should be able to display a listing through a table, with the `title`, `value`, `type` and `category` field of all transactions that are registered in its API.

- **`Show your balance from API`**: Your `Dashboard` page, you must display the balance that is returned from your backend, containing the total, together with the sum of incomings and outcomes.

- **`Import CSV transactions file`**: On your `Import` page, you must allow sending a file in `CSV` format to your backend, which will import the transactions into your database. The CSV file must follow the following [model](https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-database-upload/assets/file.csv).

### Tests Specifications

For this challenge we have the following tests:

- **`should be able to list the total balance inside the cards`**: In order for this test to pass, your application must allow cards containing the total of `income`, `outcome` and the total of `income - outcome` subtraction to be displayed on your Dashboard, which is returned by your backend balance.

* **`should be able to list the transactions`**: For this test to pass, your application must allow all transactions that are returned from your backend to be listed within a table.

- **`should be able to navigate to the import page`**: In order for this test to pass, you must allow the page exchange through the Header, by the button that contains the name `Import`.

- **`should be able to upload a file`**: For this test to pass, you must allow a file to be sent via the drag-n-drop component on the `import` page, and it is possible to display the name of the file sent to the input.

# :rocket: Releasing the Kraken

## Requirements

You will only need Node.js, Postgres DB and a node global package, Yarn, installed in your environment.

### Node

-   #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

-   #### Node installation on Ubuntu

    You can install nodejs and npm easily with apt install, just run the following commands.

        $ sudo apt install nodejs
        $ sudo apt install npm

-   #### Other Operating Systems
    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node -v
    v12.18.0

    $ npm -v
    6.13.7

###

### PostgreSQL

https://hub.docker.com/_/postgres

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

## :computer: Install

Open your terminal, choose an awesome place to keep this project and type the commands below:

    $ git clone https://github.com/pupato13/reactjs-gofinances-challenge
    $ cd reactjs-gofinances-challenge
    $ yarn install

## Configure app

To run ReactJS Challenge, you will need to start the project NodeJS Database Challenge before.
You can get the walkthrough clicking [here](https://github.com/pupato13/nodejs-database-challenge#rocket-releasing-the-kraken).

After being sure your backend is running correctly, you can go ahead.

## :checkered_flag: Running the project

    $ yarn start

Access: [localhost:3000](http://localhost:3000/)

## :white_check_mark: Running tests

    $ yarn test
