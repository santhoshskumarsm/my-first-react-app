import inventoryService from '../service/InventoryService';
class InventoryController {
    getHandler = (req, resp) => {
        resp.status(200);
        resp.send(inventoryService.findAll());
    }
    getIdParamHandler = (req, resp) => {
        let id = req.params.id;
        let item = inventoryService.findById(id);
        if (item) {
            resp.status(200);
            resp.send(item);
        } else {
            resp.status(404);
            resp.send();
        }
    }

    postHandler = (req, resp) => {
        let item = {
            id: req.body.id,
            title: req.body.title,
            cost: req.body.cost
        };
        try {
            inventoryService.addItem(item);
            resp.status(200);
            resp.send(item);
        } catch (err) {
            resp.status(500);
            resp.send(err);
        }
    }

    putHandler = (req, resp) => {
        let item = {
            id: req.body.id,
            title: req.body.title,
            cost: req.body.cost
        };
        try {
            inventoryService.updateItem(item);
            resp.status(200);
            resp.send(item);
        } catch (err) {
            resp.status(500);
            resp.send(err);
        }
    }
    
    deleteHandler = (req, resp) => {
        let id = req.params.id;
        try {
            inventoryService.deleteItem(id);
            resp.status(200);
            resp.send();
        } catch (err) {
            resp.status(500);
            resp.send(err);
        }
    }
}
const inventoryController = new InventoryController();
export default inventoryController;