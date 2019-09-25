import Server from './server/server';

async function main() {

  try {
    let server:Server = new Server();
    await server.start();
  }
  catch (err) {
    console.error(err);
  }

}

main();
