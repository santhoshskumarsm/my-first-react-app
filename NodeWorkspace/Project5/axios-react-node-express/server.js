import inventoryController from './api-server/controller/InventoryController';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const PORT = 5225;
const API_PATH = '/items';
const apiServer = express();
apiServer.use(bodyParser.urlencoded({extended:true}));
apiServer.use(bodyParser.json());
apiServer.use(cors());
apiServer.get(API_PATH,inventoryController.getHandler);
apiServer.get(`${API_PATH}/:id`,inventoryController.getIdParamHandler);
apiServer.post(API_PATH,inventoryController.postHandler);
apiServer.put(`${API_PATH}/:id`,inventoryController.putHandler);
apiServer.delete(`${API_PATH}/:id`,inventoryController.deleteHandler);
apiServer.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})