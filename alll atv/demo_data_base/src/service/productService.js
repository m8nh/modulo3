const connection = require('../model/conection');
connection.connected;

class ProductService {
    static findAll() {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query('SELECT * FROM product', (err,products) => {
            if (err) {
                reject(err);
             } else {
                resolve(products);
                }
            })
        })
        
    }

    static save(product) {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query(`insert into manager.product(price, name, description, image)
                           values (${product.price}, '${product.name}', '${product.description}',
                                   'abc.jpg')`, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Tạo Thành công')
                }
            })
        })
    }
    
    static remove(id) {
        let connect = connection.getConnection();
        let sql = `delete from manager.product where id = ${id}`;
        return new Promise((resolve, reject) => {
            connect.query(sql, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Thành công')
                }
            })
        })
    }


  static findById(id) {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query(`SELECT * FROM product WHERE id = ${id}`, (err, products) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve(products);
                 }
             }) 
        })
    }

    static update(product, id) {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query(`UPDATE product SET name = '${product.name}', price = ${product.price}, description = '${product.description}' WHERE id = ${id}`, (err, products) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve(products);
                 }
             }) 
        })
    }

    static findByNameContaining(name) {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query(`SELECT * FROM my_database1.product WHERE name LIKE '%${name}%'`, (err, products) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve(products);
                 }
             }) 
        })
    }

}
module.exports = ProductService;
