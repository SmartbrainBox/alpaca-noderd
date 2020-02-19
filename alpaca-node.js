module.exports = function(RED){
    function AlpacaNode(n) {
        RED.nodes.createNode(this,n);
        this.key = n.key;
        this.secret = n.secret
        this.url = n.url
    }
    RED.nodes.registerType("alpaca-node",AlpacaNode);
}