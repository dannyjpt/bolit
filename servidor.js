var port = process.env.PORT || 4000;
var express=require("express");
app=express();
servidor=require("http").createServer(app);
io=require("socket.io").listen(servidor);


servidor.listen(port);

app.use(express.static(__dirname+"/"));

app.get("/",function(req,res){
    res.sendfile(__dirname+"/index.html");
});

io.sockets.on("connect",function(socket){
    
    socket.on("enviarmensaje",function(data){
        io.sockets.emit("enviado",data);
        
});
    
    socket.on("crear",function(data){
        io.sockets.emit("creado",data);
        
});
        
    socket.on("mover",function(data){
        io.sockets.emit("moviendo",data);
        
});
    
    socket.on("eliminar",function(data){
        io.sockets.emit("eliminado",data);
        
});
    
    socket.on("posicionar",function(data){
        io.sockets.emit("posicionado",data);
        
});

    
});