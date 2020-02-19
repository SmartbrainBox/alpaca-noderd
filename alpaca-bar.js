/*
This Node will grab the market history and pass et as a json array
*/

var Alpaca = require('@alpacahq/alpaca-trade-api')
module.exports = function(RED){
    function AlpacaBar(config){
        RED.nodes.createNode(this,config);
        this.alpacaConfig = RED.nodes.getNode(config.alpaca);
        this.on('input',(msg, send, done) => {
            send = send || function() { node.send.apply(node,arguments) }
            const alpaca = new Alpaca({
                keyId: this.alpacaConfig.key,
                secretKey: this.alpacaConfig.secret,
                paper: true,
              })
              this.log(config.timescale)
              if(config.useinput) {
                alpaca.getBars(msg.payload.timescale,msg.payload.symbol).then((x)=>{
                    msg.payload = x
                    send(msg)
                });

              } else {
                alpaca.getBars(config.timescale,config.symbol.split(',')).then((x)=>{
                    msg.payload = x
                    send(msg)
                });
              }
           
            if(done)
                done();
        })

        this.on('close', function() {
            // tidy up any state
        });
    }

    RED.nodes.registerType('alpaca-bar',AlpacaBar) 
}