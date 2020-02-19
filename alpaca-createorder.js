module.exports = function(RED){
    function AlpacaCreateOrder(config){
        RED.nodes.createNode(this.config);
        this.on('input',(msg,send,done)=>{
            send = send || function() { node.send.apply(node,arguments) }
            
            if (done) {
                done();
        });
    }
}