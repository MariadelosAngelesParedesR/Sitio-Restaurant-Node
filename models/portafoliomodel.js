var pool = require('./db');

async function getNovedades(){
    try{
        var sql = 'select * from mis_portafolio' 
        var rows = await pool.query(sql)
        return rows; //mis portafolio bd

    }catch(error){
        console.log(error);
    }
}

async function getPortafolioBayId(id){
    try {
        var sql = 'select * from mis_portafolio where id = ?'
        var rows = await pool.query(sql, [id])
        return rows[0]//tenemos un solo portafolio 

        
    } catch (error) {
        console.log(error);
        
    }    
}

async function PortafolioNew(obj){
    try{
        var sql = 'insert into mis_portafolio set ?'
        var rows = await pool.query(sql,[obj])
        return rows
    } catch(error){
        console.log(error);
    } 
}

async function Portafolioupdate(obj, id){
    try{
        var sql = 'update mis_portafolio set ? where id = ?'
        var rows = await pool.query(sql,[obj,id])
        return rows
    } catch(error){
        console.log(error);
    }
}

async function Portafoliodelete(id){
    try{
        var sql = 'delete from mis_portafolio where id = ?'
        var rows = await pool.query(sql,[id])
        return rows
    }catch(error){
        console.log(error);
    }
}


module.exports = {getNovedades,getPortafolioBayId,PortafolioNew,Portafolioupdate,Portafoliodelete}