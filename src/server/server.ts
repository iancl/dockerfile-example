import express, {Application, Request, Response} from 'express';

export interface IServer {
  start(): Promise<void>
}

export default class Server implements IServer {
  private app: Application = express();
  private port: number = 8080;

  constructor() {
    this.mountRoutes();
  }

  private mountRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res
        .status(200)
        .set('Content-Type', 'text/html')
        .send('hello!');
    });
  }
  public start(): Promise<void> {
    return new Promise((resolve) => {
      this.app.listen(this.port, () => {
        console.log(`listening on port ${this.port}`);
        resolve();
      });
    });
  }
}
