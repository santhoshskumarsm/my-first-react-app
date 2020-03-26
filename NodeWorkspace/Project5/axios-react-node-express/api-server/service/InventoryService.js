import fs from 'fs';
const FILE_PATH = "./data/inventory.json";
class InventoryService {
    readData = () =>  JSON.parse(fs.readFileSync(FILE_PATH)).items ;
    saveData = (data) =>  fs.writeFileSync(FILE_PATH,JSON.stringify(data)) ;
    
    finAll = () => this.readData() ;
    
    findById = (id) => this.readData().find(item => item.id==id) ;
    addItem = (item) => {
        let items = this.readData();
        items.push(item);
        this.saveData({items:items});
    }
    updateItem = (item) => {
        let items = this.readData();
        let index = items.findIndex(itm => itm.id==item.id);
        items[index] = item;
        this.saveData({items:items});
    }
    deleteItem = (item) => {
        let items = this.readData();
        let index = items.findIndex(itm => itm.id==item.id);
        items.splice(index,1);
        this.saveData({items:items});
    }
}
const inventoryService = new InventoryService();
export default inventoryService;