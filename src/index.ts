import express from "express";
const app = express();
const port = 8080; // default port to listen

app.get( "/", ( req: express.Request, res: express.Response ) => {
    res.json({"hello": "world"}) 
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
 
